import BaseApiService from './base.api.service'

class SettingService extends BaseApiService {
  routes = {
    getSettings: '/setting/list'
  }
  constructor() {
    super();
    this.getSettings = this.getSettings.bind(this);
  }

  getSettings() {
    return this.GET(this.routes.getSettings);
  }
}

export default new SettingService();