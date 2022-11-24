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

---

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
    Use the command `amplify configure` if you do not have IAM user profiles yet;noting that you will still need to have created an AWS account using your root-email address.
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
12. [Swizzled](https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root) the Root of Docusaurus, by manually:
    - create a folder _/src/theme_
    - create a file _/src/theme/Root.js_ 

---

## Process to clone and use this repo

This can be run on Windows, macOS, or Linux.
The commands shown are for a Linux system, but you can replicate these by using a VS Code terminal on a Windows or macOS machine.

1.  Check that you have Node.js version 16 or higher with `node -v`.
    Install [Node.js](https://nodejs.org/) if you do not have it yet.
1.  `git clone https://github.com/rhysfaultless-cpr/docusaurus_aws_authentication.git`
2.  `cd docusaurus_aws_authentication.git`
3.  `npm install`
4.  `npm run start`

---

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
