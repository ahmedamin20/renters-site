import React from 'react'
import ProfileLink from '../profile/profileLink';
import Logout from '../../auth/logout';
import ProfileItem from './profileItems';

const ProfileMenu = ({profile, setProfile, data}) => {
  return (
    profile && 
        <div
          className="flex flex-col absolute justify-center gap-[15px] shadow-lg top-12 right-2 w-[250px] h-auto text-black dark:text-darkGrey bg-white dark:bg-darkPrimary p-[15px] rounded-xl"
          onClick={() => {
            setProfile(!profile);
          }}
        >
          <ProfileLink
            image={data?.data?.avatar}
            name={data?.data?.name}
            email={data?.data?.email}
          />
          <ProfileItem title="Add Your Product" path="/productForm"/>
          <Logout />
        </div>
        )
        }

export default ProfileMenu
