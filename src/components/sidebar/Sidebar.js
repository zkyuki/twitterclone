import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar_twitterIcon'/>
        <SidebarOption text="home" Icon={HomeIcon} />
        <SidebarOption text="discover" Icon={SearchIcon} />
        <SidebarOption text="notification" Icon={NotificationsIcon} />
        <SidebarOption text="message" Icon={MessageIcon} />
        <SidebarOption text="bookmark" Icon={BookmarkIcon} />
        <SidebarOption text="list" Icon={ListIcon} />
        <SidebarOption text="profile" Icon={PermIdentityIcon} />
        <SidebarOption text="more" Icon={MoreHorizIcon} />
        <Button variant="outlined" className='sidebar_tweet'>Tweet</Button>
    </div>
  );
}

export default Sidebar;
