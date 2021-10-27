
export const isArray = function(obj){
	return (Object.prototype.toString.call(obj) === '[object Array]')
}

export const isString = function(obj){
  return (typeof obj === 'string')
}

export const getData = function(collection, handler){
  if(isArray(collection)){
    return collection.map( (item, idx) => handler(item, idx) )
  } else {
    return Object.keys(collection).map( (key, idx) => handler(collection[key], idx))
  }
}
