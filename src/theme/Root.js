import React from 'react';

import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Root({children, signOut, user}) {
  return (
    <>
      {children}
    </>
  );
}

export default withAuthenticator(Root);
