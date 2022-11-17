# docusaurus_aws_authentication

---

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
8.  `npm run start`
