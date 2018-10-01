import React, { Component } from 'react'
import Alert from '../../components/Alert'
import User from './components/User'
import List from './components/List'
import './profile.css'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.user,
      repos: [],
      isFetching: true,
    }
  }

  componentDidMount() {
    if (!this.props.user && '' !== this.props.username) {
      this.fetchUserAndRepos()
      return
    }

    this.fetchRepos()
  }

  fetchUserAndRepos() {
    fetch(`https://api.github.com/users/${this.props.username}`)
      .then(response => response.json())
      .then(userData => {
        if (userData.message && 'Not Found' === userData.message) {
          this.setState({
            user: null,
            repos: [],
            notFound: true,
            isFetching: false,
          })

          return
        }

        this.setState({ user: userData })

        return fetch(`https://api.github.com/users/${this.props.username}/repos`)
      })
      .then(response => response.json())
      .then(reposData => {
        if (reposData.message && 'Not Found' === reposData.message) {
          this.setState({
            user: null,
            repos: [],
            notFound: true,
            isFetching: false,
          })

          return
        }

        this.setState({
          repos: reposData,
          isFetching: false,
        })
      })
  }

  fetchRepos() {
    fetch(`https://api.github.com/users/${this.props.username}/repos`)
      .then(response => response.json())
      .then(reposData => {
        if (reposData.message && 'Not Found' === reposData.message) {
          this.setState({
            user: null,
            repos: [],
            notFound: true,
            isFetching: false,
          })

          return
        }

        this.setState({
          repos: reposData,
          isFetching: false,
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.isFetching && <Alert message='Loading...' />}

        {!this.state.isFetching && <User data={this.state.user} />}

        {!this.state.isFetching &&
          <List
            data={this.state.repos}
            username={this.props.username}
          />
        }
      </div>
    )
  }
}

export default Profile
