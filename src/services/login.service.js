import auth from "../utils/auth";
import BaseApiService from "./base.api.service";
class LoginService extends BaseApiService {
  routes = {
    signIn: '/user/signin',
    signOut: '/user/signout',
  }
  signInGoogle() {
    const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const codeUrl = process.env.REACT_APP_GOOGLE_API_URL_CODE;
    const tokenUrl = process.env.REACT_APP_GOOGLE_API_URL_TOKEN;
    const codeOptions = {
      response_type: 'code',
      client_id,
      redirect_uri: window.location.origin + '/signin',
      scope: 'profile',
    };
    const tokenOptions = {
      client_id,
      client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: window.location.origin + '/signin',
    }
    return auth.signWithPopup(codeUrl, tokenUrl, codeOptions, tokenOptions)
            .then(({access_token, refresh_token}) => {
              console.log(access_token)
              this.signIn(access_token);
            });
  
  }

  signIn(token) {
    this.POST(this.routes.signIn, { token });
  }

  signOut() {
    this.GET(this.routes.signOut);
  }

}

export default new LoginService();