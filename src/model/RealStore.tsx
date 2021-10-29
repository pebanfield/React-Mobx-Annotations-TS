import { observable, toJS } from 'mobx';
import axios from 'axios';

class RealStore {
  @observable data: Object = null;
}

export default RealStore;