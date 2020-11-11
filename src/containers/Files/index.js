import React from 'react';
import DataExport from './DataExport';
import DataImport from './DataImport';

import CollapsibleSection from '../../components/CollapsibleSection';


const Files = () => (
  <div className="container-full-page mt-settings">
  <CollapsibleSection name="settings_import" label="Data Import">
      <DataImport />      
    </CollapsibleSection>
    <CollapsibleSection name="settings_export" label="Data Export">
      <DataExport />
      </CollapsibleSection>
  </div>
);

export default Files;
