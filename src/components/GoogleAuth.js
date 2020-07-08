import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '614965761072-lvor22k1sf8m05rq3053q6n8l2f051km.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
