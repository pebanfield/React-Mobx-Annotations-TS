import { observable } from 'mobx';

//the very most basic usage
class SampleStore {
  @observable basicObservableProp: string = null;
}

export default SampleStore;