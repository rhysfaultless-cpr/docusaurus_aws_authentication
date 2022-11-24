# docusaurus_aws_authentication

## Link to the deployed website:

-   [_production_ branch](https://production.d2xlu2crws7rbf.amplifyapp.com/)

## Tools used

1.  [Node.js](https://nodejs.org)
2.  Google Chrome or another chromium based web browser
2.  [React](https://reactjs.org/)
3.  [Docusaurus](https://docusaurus.io/)
4.  [AWS Amplify](https://aws.amazon.com/amplify/)
5.  [AWS Cognito](https://aws.amazon.com/cognito/)


## Process used to create this repo

1.  `npx create-docusaurus@latest docusaurus_aws_authentication classic`
2.  `cd docusaurus_aws_authentication`
3.  Delete all _blog_ references:
    - from _docusaurus.config.js_
    - _blog_ folder and its contents
4.  Remove GitHub link from the Navigation bar (editing _docusaurus.config.js_)
5.  Remove all links from the Footer (editing _docusaurus.config.js_)
6.  `npm install -g @aws-amplify/cli`
7.  `amplify init` since I already have an Amazon Web Services IAM profile.
    This command redirects me to a Google Chrome tab asking me to enter:
    - My AWS acoount number
    - My IAM username
    - my IAM password
    Note: Use the command `amplify configure` if you do not have Amazon IAM user profiles yet;
    noting that you will still need to have created an AWS account using your root-email address.
8.  `amplify add auth`
    - _? Do you want to use the default authentication and security configuration?_
      - `Default configuration`
    - _? How do you want users to be able to sign in?_
      - `Username`
    - _? Do you want to configure advanced settings?_
        - `No, I am done.`
9.  `amplify push`
10. `npm install aws-amplify`
11. Added a _hidden-page_ folder and related files.
12. We force the the User to login before viewing any page content.
    This was done by [Swizzling](https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root) the Root of Docusaurus, by manually:
    - creating a folder _/src/theme_
    - creating a file _/src/theme/Root.js_

    This allows us to wrap the entire site with a sign-in authentication layer.
    This is similar to editing the _App.js_ file of a typical React site.
    In this repository's _/src/theme/Root.js_ file, note the `withAuthenticator` wrapping:

    ```javascript
    import React from 'react';
    import { Amplify } from 'aws-amplify';
    import { withAuthenticator } from '@aws-amplify/ui-react';
    import '@aws-amplify/ui-react/styles.css';
    import awsExports from '../aws-exports';
    Amplify.configure(awsExports);

    function Root({children}) {
      return (
        <>
          {children}
        </>
      );
    }

    export default withAuthenticator(Root);
    ```
    
    The [withAuthenticator wrapper UI](https://aws.amazon.com/blogs/mobile/amplify-uis-new-authenticator-component-makes-it-easy-to-add-customizable-login-pages-to-your-react-angular-or-vue-app/) is a simple way to add the User sign-in and sign-up forms.

    <center><img src="/static/img/readme_images/readme_1.png" width="467"/></center>

    Amplify offers tools to build your own UI for these autherntication calls if the prebuilt withAuthenticator is not acceptable.
13. The User is forced to login befor seeing any of our Docusaurus page content.
    We still need a way to allow the User to sign-out.
    You could simply add a sign-out button to all pages by adding to the Root.js file:
    ```javascript
    import React from 'react';
    import { Amplify, Auth } from 'aws-amplify';
    import { withAuthenticator } from '@aws-amplify/ui-react';
    import '@aws-amplify/ui-react/styles.css';
    import awsExports from '../aws-exports';
    Amplify.configure(awsExports);

    function Root({children, signOut}) {
      return (
        <>
          <button onClick={signOut}>Sign Out</button>
          {children}
        </>
      );
    }

    export default withAuthenticator(Root);
    ```

    This would allow the User to sign-out, but is not an ideal location of the UI button.
    Most User's will expect the sign-out button to be added to the Navigation Bar, or the Footer.
    By default, all Docusaurus buttons in the Navbar or Footer require a hyperlink; and cannot be used to run a function.

    We can force Docusaurus to allow a funtion buttons by [Swizzling](https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root) the Navbar or Footer (_our repository shows the steps to add a button to the Docusaurus Navbar_).
    
    To Swizzle the Navbar, manually:
    - create a folder _/src/components/NavbarItems_
    - create a file _/src/component/NavbarItems/SignOutButtons.js_
      - Refer to the file in this repository for details of the content
    - create a folder _/src/theme/NavbarItem_
    - create a file _/src/theme/NavbarItem/ComponentTypes.js_
      - Refer to the file in this repository for details of the content
      - Note, the _custom-_ call in the line `custom-signOutButton': SignOutButton,` is required per the Docusaurus Swizzling syntax.
    - update the existing file _/docusaurus.config.js_
      - Add a block to the _themeConfig_ ... _navbar_ --- _items_ section
      - The new block will add our _custom-signOutButton_ element to the Navbar
 
    ```javascript
    themeConfig:
      ({
        navbar: {
          title: 'My Site',
          logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Tutorial',
            },
            {
              type: 'custom-signOutButton', 
              position: "right"
            },
          ],
        },
      }),
    ```
    
## Process to clone and use this repo

This can be run on Windows, macOS, or Linux.
The commands shown are for a Linux system, but you can replicate these by using a VS Code terminal on a Windows or macOS machine.

1.  Check that you have Node.js version 16 or higher with `node -v`.
    Install [Node.js](https://nodejs.org/) if you do not have it yet.
1.  `git clone https://github.com/rhysfaultless-cpr/docusaurus_aws_authentication.git`
2.  `cd docusaurus_aws_authentication.git`
3.  `npm install`
4.  `npm run start`

## References / Readings that helped create this

1.  https://docusaurus.io/docs/next/creating-pages
    - Creating React Pages
    - Creating Marxdown Pages
    - Not creating a page, by adding an underscore to the file name
2.  https://docusaurus.io/docs/docusaurus-core#redirect
    - Docusaurus Redirect component, to redirect to another URL path
3.  https://docusaurus.io/docs/advanced/routing
    - Explains Docusaurus's routing structure and build process
4.  https://docusaurus.io/docs/advanced/architecture
    - Explains Docusaurus's architecture for 
5.  https://github.com/facebook/docusaurus/issues/3748
    - _How to add access control option?_
6.  https://github.com/facebook/docusaurus/issues/2769
    - Authentication for private pages
7.  https://github.com/facebook/docusaurus/issues/2844
    - Router interceptor and Authentication
8.  https://stackoverflow.com/questions/63810181/docusaurus-2-run-custom-script-for-every-page
    - Docusaurus 2: Run custom script for every page
    - https://docusaurus.io/docs/api/docusaurus-config#clientModules
    - https://docusaurus.io/docs/advanced/client#client-modules
9.  Wrapping the Root React component
    - https://stackoverflow.com/questions/67966163/root-component-swizzle-in-docusaurus-v2-not-working
10. Adding a logout button:
    - https://github.com/facebook/docusaurus/issues/7227
    - https://github.com/facebook/docusaurus/pull/7231
    - https://github.com/facebook/docusaurus/issues/7227
    - https://github.com/facebook/docusaurus/issues/3135
    - https://github.com/facebook/docusaurus/issues/7227
    - https://docusaurus.io/docs/api/themes/configuration
    - https://medium.com/@kevinwilliams.dev/adding-material-ui-to-docusaurus-e1889bf81515
    - https://blog.1password.com/docusaurus-documentation-framework/
11. AWS authentication sign-out
    - https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/#sign-out
