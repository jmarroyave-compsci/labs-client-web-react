class Server {
  constructor(props) {
    this.debug = !props || props.debug === true ? true : false;
  }

  exec(method, url, params, config, callback, callback_err){
    var $this = this;   
    var options = {};

    if($this.debug){
      console.debug("SRV", method.toUpperCase(), url, params);
    }

    if(method === 'get'){
      options.method = "GET";
      var _url = new URL(url);
      _url.search = new URLSearchParams(params);
      url = _url;
    } else if(method === 'post') {
      options.method = "POST";
      options.body = JSON.stringify(params);
    }

    options.headers = {
      'Origin': `${location.protocol}//${location.hostname}${location.port ? ':' + location.port : ''}`,
      'Content-Type': 'application/json;charset=utf-8'
    };
    options.mode = 'cors';

    fetch(url, options)
      .then(function (response) {
        if($this.debug){
          console.debug("SRV", method.toUpperCase(), url, params, 'Response', response);
        }
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText
          });
        }
      })
      .then(function (data) {
        if(callback){
          callback(data);     
        }
      })
      .catch(function (err) {
        if($this.debug){
          console.debug("SRV", method.toUpperCase(), url, params, "ERROR", err);
        }
        if(callback_err){
          callback_err(err);
        }
      });
  }

  getp(uri, params){
    const $this = this;
    return new Promise((resolve, reject) => {
      $this.get(uri,params,function(data){
        resolve(data);
      },function(err){
        reject(err);
      });
    });
  }

  get(uri, params, callback){
    if(params.params)
      params = params.params;
    this.exec('get', uri, params, {}, callback);
  }

  postp(uri, params){
    const $this = this;
    return new Promise((resolve, reject) => {
      $this.post(uri,params,function(data){
        resolve(data);
      },function(err){
        reject(err);
      });
    });
  }

  post(uri, params, callback, callback_err){
    if(params.params)
      params = params.params;
    this.exec('post', uri, params, {}, callback, callback_err);
  }  
}

export default Server;
