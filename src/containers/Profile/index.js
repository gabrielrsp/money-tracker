import React from 'react';

import User from './User';
import CollapsibleSection from '../../components/CollapsibleSection';


const Profile = () => (
  <div className="container-full-page mt-settings">

    <CollapsibleSection name="settings_user" label="User">
      <User />
    </CollapsibleSection>
  </div>
);

export default Profile;
