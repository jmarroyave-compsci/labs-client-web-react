const START_YEAR = 1870;

export const getDecades = ( { ascending=false, all=false, unknown=false } ) => { 
  var resp = [];

  if(all){
    resp.push("all")
  }

  for(var i = START_YEAR; i < new Date().getFullYear(); i+=10){
    const num = i.toString().slice(0,3).padEnd(4, "0")
    resp.push( num )
  } 

  if(unknown){
    resp.push("?")
  }

  return (!ascending) ? resp.reverse() : resp;
}

export const getYears = () => {
  var resp = [];
  for(var i = START_YEAR; i < new Date().getFullYear(); i++){
    const num = i.toString()
    resp.push( num )
  } 

  return resp.reverse();
}