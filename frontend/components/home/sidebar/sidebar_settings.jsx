import React from 'react';

const SideBarSettings = () => {
  return (
    <div className="sidebar-settings">
      <a href="">
        <i className="yt-settings-settings"></i>
        <span>Settings</span>
      </a>
      <a href="">
        <i className="yt-settings-report-history"></i>
        <span>Report History</span>
      </a>
      <a href="">
        <i className="yt-settings-help"></i>
        <span>Help</span>
      </a>
      <a href="">
        <i className="yt-settings-feedback"></i>
        <span>Send feedback</span>
      </a>
    </div>
  )
}

export default SideBarSettings;