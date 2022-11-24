import React from 'react';
import { useEffect, useState } from 'react';
// import {Redirect} from '@docusaurus/router';

import PageContent from "./_hiddenPageContent.mdx"
import BlockedPageNotice from "./_blockedPageNotice.mdx"

function Page() {
  const [userIsEmployee, setUserIsEmployee] = useState(false);

  setTimeout(() => {
    setUserIsEmployee(true);
  }, 5000) // State will change to true afer 5 seconds to test the if statement below
  

  if (userIsEmployee) {
    return <PageContent />
  } else {
    return <BlockedPageNotice />;
  } 
};

export default Page;
