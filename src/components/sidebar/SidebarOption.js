import react from 'react';

import './SidebarOption.css';

function SidebarOption({ text, Icon, active }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption_active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
