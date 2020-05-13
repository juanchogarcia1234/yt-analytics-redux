import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";
import logo from "../logo.png";

class Login extends React.Component {
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "353774115925-g76lj2djpa98rnsppf8d87fqpu26ht5j.apps.googleusercontent.com",
          scope: "https://www.googleapis.com/auth/youtube.readonly",
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtubeAnalytics/v2/rest"]
        })
        .then(() => {
          this.GoogleAuth = window.gapi.auth2.getAuthInstance(); // returns a googleAuth object

          this.onAuthChange(this.GoogleAuth.isSignedIn.get());
          this.GoogleAuth.isSignedIn.listen(this.onAuthChange);

          console.log(this.GoogleAuth.isSignedIn.get());
          // Listen for sign-in state changes.
        });
    });
  }

  // updateSigninStatus = isSignedIn => {
  //     console.log('estoy logueado');
  //     console.log(isSignedIn);
  // }

  onAuthChange = isSignedIn => {
    console.log("la esta llamanado");
    console.log(isSignedIn);
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.GoogleAuth.signIn().then(() => {
      var request = window.gapi.client.youtubeAnalytics.reports.query({ ids: "channel==MINE", startDate: "2019-05-01", endDate: "2020-03-30", metrics: "views", dimensions: "country" });

      // Execute the API request.
      request.execute(function (response) {
        console.log(response.result);
      });
    }); //inicia sign in
  };

  render() {
    console.log(this.props.isLoggedIn);
    return (
      <div className="ui one column stackable center aligned page grid">
        <div className="column twelve wide">
          <div className="card mx-auto text-center shadow p-3 mb-5 bg-white rounded" style={{ width: "18rem", marginTop: "40px", margin: "50px auto" }}>
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Испанский с Хуаном</h5>
              <p className="card-text">Youtube Analytics for channel Испанский с Хуаном.</p>
              <div>
                <button onClick={this.onSignInClick} type="button" className="ui google button">
                  <i className="google icon" />
                  Log in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isLoggedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Login);
