import React, { Component } from 'react'
import Card from './components/Card'
import Alert from '../../components/Alert'
import './search.css'

class Search extends Component {
  render() {
    return (
      <div>
        <form className='form-search' onSubmit={this.props.handleSubmit}>
          <div className='form-group form-group-input'>
            <label className='form-label' htmlFor='username'>
              Username:
            </label>
            <input
              id='username'
              className='form-control'
              name='username'
              type='search'
              placeholder='E.g. BrendanEich'
              value={this.props.query}
              onChange={this.props.handleChange}
            />
          </div>
          <div className='form-group form-group-submit'>
            <button className='btn btn-submit' type='submit'>
              Search
            </button>
          </div>
        </form>

        {this.props.isFetching && <Alert message='Loading...' />}

        {!this.props.isFetching && !!this.props.notFound && <Alert />}

        {!this.props.isFetching && !!this.props.user && <Card user={this.props.user} />}
      </div>
    )
  }
}

export default Search
