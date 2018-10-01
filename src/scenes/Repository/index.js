import React, { Component } from 'react'
import Alert from '../../components/Alert'

class Repository extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repo: null,
      isFetching: true,
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/repos/${this.props.username}/${this.props.reponame}`)
      .then(response => response.json())
      .then(json => ({
        id: json.id,
        name: json.name,
        description: json.description,
        stars: json.stargazers_count,
        language: json.language,
        url: json.html_url,
      }))
      .then(repo => this.setState({ repo, isFetching: false }))
      .catch(error => console.log('Failed to fetch Repo data.', error))
  }

  render() {
    return (
      <div>
        {this.state.isFetching && <Alert message='Loading...' />}

        {!this.state.isFetching &&
          <div className='repository'>
            <h3>{this.state.repo.name}</h3>
            <p>{this.state.repo.description}</p>
            <p><b>Stars:</b> {this.state.repo.stars}</p>
            <p><b>Language:</b> {this.state.repo.language || 'Other'}</p>
            <p>
              <a
                className='btn btn-small'
                target='_blank'
                rel='noopener noreferrer'
                href={this.state.repo.url}
              >
                View in GitHub.com
              </a>
            </p>
          </div>
        }
      </div>
    )
  }
}

export default Repository
