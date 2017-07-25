import { observable, action } from 'mobx'

class Store {
  @observable src = './iframe.html';

  @action onLoad = e => {
    console.log(e);
  };
}

export default new Store();