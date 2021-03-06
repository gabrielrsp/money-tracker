import React from 'react';
import CurrencyInput from './Currency/Input';
import CurrenchExchangeRate from './Currency/ExchangeRate';
import CollapsibleSection from '../../components/CollapsibleSection';

const Settings = () => (
  <div className="container-full-page mt-settings">
    <CollapsibleSection name="settings_currency" label="Currency">
      <CurrencyInput />
      <CurrenchExchangeRate />
    </CollapsibleSection>

  </div>
);

export default Settings;
