import React from 'react';

import SideBarMain from './sidebar_main';
import BestLinks from './sidebar_best_links';
import SideBarBrowse from './sidebar_browse';
import SideBarSignIn from './sidebar_sign_in';
import SideBarAdditionalFeatures from './sidebar_additional_features';
import SideBarSettings from './sidebar_settings';
import SideBarFooter from './sidebar_footer';

const SectionSideBar = () => (
  <div>
    <aside id="sidebar-component" className="sidebar-container">
      <SideBarMain />
      <BestLinks />
      <SideBarBrowse />
      <SideBarSignIn />
      <SideBarAdditionalFeatures />
      <SideBarSettings />
      <SideBarFooter />
    </aside>
  </div>
);

export default SectionSideBar;
