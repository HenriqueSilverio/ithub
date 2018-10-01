import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Search from './scenes/Search'
import Profile from './scenes/Profile'
import Repository from './scenes/Repository'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      user: null,
      notFound: false,
      isFetching: false,
    }

    this.handleChange = this.handleChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ query: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ isFetching: true })

    fetch(`https://api.github.com/users/${this.state.query.trim()}`)
      .then(response => response.json())
      .then(json => {
        if (json.message && 'Not Found' === json.message) {
          this.setState({
            user: null,
            notFound: true,
            isFetching: false,
          })

          return
        }

        this.setState({
          user: json,
          notFound: false,
          isFetching: false,
        })
      })
      .catch(error => console.log('Error', error))
  }

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <h2 className='app-title'>
            <Link className='app-title-link' exact='true' to='/'>
              ItHub
            </Link>
          </h2>

          <Route
            exact
            path='/'
            render={() => {
              return <Search
                user={this.state.user}
                query={this.state.query}
                notFound={this.state.notFound}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                isFetching={this.state.isFetching}
              />
            }}
          />

          <Route
            exact
            path='/:user'
            render={({ match }) => {
              return <Profile
                user={this.state.user}
                username={match.params.user}
              />
            }}
          />

          <Route
            exact
            path='/:user/:repo'
            render={({ match }) => {
              return <Repository
                username={match.params.user}
                reponame={match.params.repo}
              />
            }}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
