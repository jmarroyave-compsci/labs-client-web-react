import Constants from 'config/constants';
import Server from 'config/datasources/server';
import Local from 'config/datasources/local';

class Data {
  constructor(){
    if(Constants.LOCAL === true)
      this.proxy = Local;
    else 
      this.proxy = Server;
  }	

  get(name, params){
    return this.proxy.get(name, params);
  }
}

const inst = new Data();
export default inst;