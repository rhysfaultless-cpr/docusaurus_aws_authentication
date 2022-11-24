import React from 'react';
import { useState, useEffect } from 'react';

import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

async function fetchTenant(setTenant, setUserIsCustomer, setUserIsReseller, setUserIsEmployee) {
  // get the access token of the signed in user
  const {accessToken} = await Auth.currentSession();
  // get the tenant from the top of the cognito groups list
  const cognitogroups = accessToken.payload['cognito:groups'];
  const tenant = cognitogroups;
  setTenant(tenant);
  const tempUserIsCustomer = (tenant.indexOf('employee') !== -1) || (tenant.indexOf('reseller') !== -1) || (tenant.indexOf('customer') !== -1)
  const tempUserIsReseller = (tenant.indexOf('employee') !== -1) || (tenant.indexOf('reseller') !== -1)
  const tempUserIsEmployee = (tenant.indexOf('employee') !== -1)
  setUserIsCustomer(tempUserIsCustomer);
  setUserIsReseller(tempUserIsReseller);
  setUserIsEmployee(tempUserIsEmployee);
}

function Root({children}) {
  return (
    <>
      {children}
    </>
  );
}

export default withAuthenticator(Root);
