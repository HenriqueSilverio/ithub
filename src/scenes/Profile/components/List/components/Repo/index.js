import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Repo extends Component {
  render() {
    const repo = this.props.data

    return (
      <Link
        className='repos-item'
        repo={repo}
        to={`/${this.props.username}/${repo.name}`}
      >
        <span className='repos-text'>
          <b>Name:</b> {repo.name}
        </span>

        <span className='repos-text'>
          <b>Stars:</b> {repo.stars}
        </span>

        <span className='repos-btn'>
          Read more
        </span>
      </Link>
    )
  }
}

export default Repo
