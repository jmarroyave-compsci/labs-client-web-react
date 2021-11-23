
export const getDashboardQuery = (data, field) => {
  var op;
  console.log("query", field)
  switch(field){
    case "country":
      op = {op: "eq", field: "country", value: data.label.toLowerCase()}
      break;
    case "continent":
      op = {op: "eq", field: "continent", value: data.label}
      break;
    case "started":
      op = {op: "range", field: "startYear", value: [parseInt(data.label), parseInt(data.label) + 10]}
      break;
  }

  return op;
}