import axios from 'axios';

class Server {
  constructor(props) {
    this.onStartLoading = null;
    this.onStopLoading = null;
    this.onError = null;
    

    var connections = [
      {protocol: 'http', server: 'data-server', path:'/data'},
      {protocol: 'https', server: 'jmarroyave-search-backend.herokuapp.com', path:''},
      {protocol: 'https', server: 'jmarroyave-data-server.herokuapp.com', path:''},
      {protocol: document.location.protocol.replace(":",""), server: document.location.hostname, path:'/data'},
    ]

    var current =  (props && props.local == false) ? connections[2] : connections[3]; 
    this.serverURI = (current.server == '') ? current.path : `${current.protocol}://${current.server}${current.path}`;
    this.debug = (!props || props.debug) ? true : false;

    //console.info("data-server", this.serverURI);
  }

  triggerOnStartLoading(){   
    if(this.onStartLoading){
      this.onStartLoading();
    }
  }

  triggerOnStopLoading(){
    if(this.onStopLoading)
      this.onStopLoading();
  }

  triggerOnError(err){
    if(this.onError)
      this.onError(err);   
  }

  exec(method, uri, params, config, callback, callback_err){
    var $this = this;   
    var url = (uri.indexOf("http") == 0 || uri.indexOf(".") == 0) ? uri : this.serverURI + uri;
    var p;
    this.triggerOnStartLoading()
    const timeout = 60 * 1000;

    if(method === 'get'){
      p = axios.get(url, {
        params:params,
        timeout: (config && config.timeout) ? config.timeout : timeout,
      });
    } else {
      p = axios.post(url, params, {
        timeout: (config && config.timeout) ? config.timeout : timeout,
      });
    }

    if($this.debug){
      console.debug("SRV", method.toUpperCase(), uri, params);
    }


    p.then(response => {
      if($this.debug){
        console.debug("SRV", method.toUpperCase(), uri, params, 'Response', response);
      }
      if(callback)
        callback(response.data);
      $this.triggerOnStopLoading()
    })
    .catch(err => {
      if($this.debug){
        console.debug("SRV", method.toUpperCase(), uri, params, "ERROR", err);
      }
      this.triggerOnError(err);
      if(callback_err){
        callback_err(err)
      }
      $this.triggerOnStopLoading()
    });      
  }

  getp(uri, params){
    const $this = this;
    return new Promise((resolve, reject) => {
      $this.get(uri,params,function(data){
        resolve(data);
      });
    });
  }

  get(uri, params, callback){
    if(params.params)
      params = params.params;
    this.exec('get', uri, params, {}, callback);
  }

  getLong(uri, params, timeout, callback, callback_err){
    if(params.params)
      params = params.params;
    this.exec('get', uri, params, {timeout: timeout}, callback, callback_err);
  }

  post(uri, params, callback, callback_err){
    if(params.params)
      params = params.params;
    this.exec('post', uri, params, {}, callback, callback_err);
  }  

  fetch(url, params, callback, callback_err){
    if(params.params)
      params = params.params;
    var $this = this;   
    this.triggerOnStartLoading()
    axios.get(url, {params:params})
    .then(function(response){
      if($this.debug){
        console.debug("SRV", 'FETCH:', url, params, 'Server Response:', response);
      }
      if(callback){
        callback(response.data);
      }
      $this.triggerOnStopLoading()
    })
    .catch(err => {
      if($this.debug){
        console.debug("SRV", 'FETCH:', url, params, 'Server Error:', err);
      }
      $this.triggerOnStopLoading()
      this.triggerOnError(err);
    });      
  }
}

export default Server;
