import axios from "axios";
import alertService from './alert.service'

axios.interceptors.request.use(
  (config) => {
    config = { ...config, url: `/api${config.url}` };
    return config;
  },
  function (error) {
    alertService.error();
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    const status = error.response.status;
    // if(status >= 300 && status < 400) {
    //   window.location.href = '/';
    // } else {
    //   alertService.error('Unauthorized !');
    // }
  }
);

class BaseApiService {
  constructor() {
    this.api = axios;
  }

  GET(url, context, opts = {}) {
    if (context) {
      return this.api.get(this.inject(url, context), opts);
    } else {
      return this.api.get(url, opts);
    }
  }

  POST(url, body = {}, opts = {}) {
    return this.api.post(url, body, opts);
  }

  PATCH(url, body, opts = {}) {
    return this.api.patch(url, body, opts);
  }

  PUT(url, body, opts = {}) {
    return this.api.put(url, body, opts);
  }

  DELETE(url, context, opts = {}) {
    if (context) {
      return this.api
        .delete(this.inject(url, context), opts);
    } else {
      return this.api.delete(url, opts);
    }
  }

  inject(restApi, context) {
    let properties = restApi.match(/(:\w+)/g);

    properties.forEach((property) => {
      let contextVar = property.substring(1);
      let contextValue = context[contextVar];

      if (contextValue !== undefined) {
        restApi = restApi.replace(property, contextValue);
      } else {
        throw new Error(
          "inject: context." + contextVar + " expected but undefined"
        );
      }
    });

    return restApi;
  }
}

export default BaseApiService;