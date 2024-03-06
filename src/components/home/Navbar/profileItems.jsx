import React from 'react'
import { Link } from 'react-router-dom'

const ProfileItem = ({path,title}) => {
  return (
    <div className="p-2 rounded-lg">
                  <Link to={path} className="sidebar-item-link">
                    <span>
                      {" "}
                      {title}
                      {/* <span className=' text-sm'>{email}</span> */}
                    </span>
                  </Link>
                </div>
  )
}

export default ProfileItem
