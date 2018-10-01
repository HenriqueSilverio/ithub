import React, { Component } from 'react'
import Filter from './components/Filter'
import Repo from './components/Repo'
import './list.css'

class List extends Component {
  constructor(props) {
    super(props)

    const sorted = this.parse(props.data).sort((a, b) => b.stars - a.stars)

    this.state = {
      repos: sorted,
      sortOrder: 'DESC',
    }

    this.handleSortChange = this.handleSortChange.bind(this)
  }

  parse(repos) {
    return repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      language: repo.language,
      url: repo.html_url,
    }))
  }

  sortRepos(order = 'DESC') {
    if ('ASC' === order.toUpperCase()) {
      this.setState({
        repos: this.state.repos.sort((a, b) => a.stars - b.stars)
      })

      return
    }

    this.setState({
      repos: this.state.repos.sort((a, b) => b.stars - a.stars)
    })
  }

  handleSortChange(event) {
    const order = event.target.value

    this.setState({ sortOrder: order })

    this.sortRepos(order)
  }

  render() {
    return (
      <div>
        <Filter
          sortOrder={this.state.sortOrder}
          handleSortChange={this.handleSortChange}
        />

        <div className='repos-list'>
          {this.state.repos.map(item => (
            <Repo key={item.id} data={item} username={this.props.username} />
          ))}
        </div>
      </div>
    )
  }
}

export default List
