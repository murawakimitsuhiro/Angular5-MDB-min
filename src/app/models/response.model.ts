import { AppModel } from './app.model';

export class ResponseModel extends AppModel {
  data: any;
  error: string;

  constructor(data?: any) {
    super(data);

    this.data = 'data' in data ? data.data : {};
    this.error = 'error' in data ? data.error : {};
  }
}
