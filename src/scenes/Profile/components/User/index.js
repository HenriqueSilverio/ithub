import React, { Component } from 'react'

class User extends Component {
  render() {
    const user = this.props.data

    return (
      <div className='profile-card'>
        <div>
          <div className='profile-card-body'>
            <div className='profile-body-avatar'>
              <img
                className='profile-avatar'
                src={user.avatar_url}
                alt=''
              />
            </div>
            <div>
              <h3 className='profile-body-title'>
                {user.name}
              </h3>

              {!!user.email &&
                <p className='profile-body-text'>
                  {user.email}
                </p>
              }

              {!!user.bio &&
                <p className='profile-body-text'>
                  {user.bio}
                </p>
              }

              <ul className='list-inline'>
                <li><b>Followers:</b> {user.followers}</li>
                <li><b>Following:</b> {user.following}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default User
