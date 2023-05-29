import openWindow from "./openWindow";
import axios from "axios";
import qs from 'querystring'
class Auth {
  signWithPopup(codeUrl, tokenUrl, codeOptions, tokenOptions) {
    return openWindow(
      `${codeUrl}?${qs.stringify(codeOptions)}`,
      'width=495,height=645',
    ).then(async (response) => {
      if (response.status === 'matched' && response.search) {
        const query = qs.parse(response.search);
        try {
          const res = await axios.create().post(tokenUrl, {...tokenOptions, code: query.code});
          return res.data;
        } catch(e){
          console.log(e)
        }
      } else {
        return Promise.reject(response);
      }
    });
  }
}

export default new Auth();