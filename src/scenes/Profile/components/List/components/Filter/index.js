import React, { Component } from 'react'
import './filter.css'

class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <div className='filter-text'>
          <b>Sort by:</b>
        </div>
        <div className='filter-group'>
          <input
            id='repos-sort-desc'
            className='filter-control'
            name='repos-sort'
            value='DESC'
            type='radio'
            onChange={this.props.handleSortChange}
            checked={this.props.sortOrder === 'DESC'}
          />
          <label className='filter-label' htmlFor='repos-sort-desc'>
            More stars
          </label>
        </div>
        <div className='filter-group'>
          <input
            id='repos-sort-asc'
            className='filter-control'
            name='repos-sort'
            value='ASC'
            type='radio'
            onChange={this.props.handleSortChange}
            checked={this.props.sortOrder === 'ASC'}
          />
          <label className='filter-label' htmlFor='repos-sort-asc'>
            Less stars
          </label>
        </div>
      </div>
    )
  }
}

export default Filter
