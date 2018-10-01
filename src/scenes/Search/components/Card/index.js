import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './card.css'

class Card extends Component {
  render() {
    const user = this.props.user

    console.log(user)

    return (
      <div className='card'>
        <div className='card-header'>
          <img
            className='card-avatar'
            src={user.avatar_url}
            alt={user.name}
          />
        </div>
        <div className='card-body'>
          <h4 className='card-title'>
            {user.name}
          </h4>
          <p className='card-description'>
            {user.bio}
          </p>
          <p className='card-action'>
            <Link className='btn' exact='true' to={`/${user.login}`}>
              Read more
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default Card
