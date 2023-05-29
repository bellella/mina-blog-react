import { Subject } from 'rxjs';

class AlertService {
  alertSubject = new Subject();

  onAlert() {
    return this.alertSubject.asObservable();
  }

  success(content = 'You\'ve done a good job!' ) {
    this.alertSubject.next({ type: 'SUCCESS', title: 'Success', content});
  }

  error(content = 'Something is wrong!') {
    this.alertSubject.next({ type: 'ERROR', title: 'Error', content });
  }

  alert() {
    this.alertSubject.next({ type: 'SUCCESS', content: '' });
  }
}

export default new AlertService()