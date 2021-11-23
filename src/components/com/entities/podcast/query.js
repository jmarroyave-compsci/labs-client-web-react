
export const getDashboardQuery = (data, field) => {
  var op;

  switch(field){
    case "category":
      op = {op: "eq", field: "category", value: data.label.toLowerCase()}
      break;
    case "languages":
      op = {op: "eq", field: "language", value: data.label.toLowerCase()}
      break;
    case "countries":
      op = {op: "eq", field: "country", value: data.label.toLowerCase()}
      break;
    case "author":
      op = {op: "eq", field: "author", value: data.label.toLowerCase()}
      break;
  }

  return op;
}