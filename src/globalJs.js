import React from 'react';
import { useEffect, useState } from 'react';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '/src/aws-exports';
Amplify.configure(awsExports);

function globalJs({ signOut, user }) {
  const [userIsEmployee, setUserIsEmployee] = useState(false);
  
  setTimeout(() => {
    setUserIsEmployee(true);
  }, 5000) // State will change to true afer 5 seconds to test the if statement below

  if (ExecutionEnvironment.canUseDOM) {
    // As soon as the site loads in the browser, register a global event listener
    return null;
  }else{
    return null;
  }
}

export default withAuthenticator(globalJs);
