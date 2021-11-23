
export const getDashboardQuery = (data, field) => {
  var op;
  console.log("query", field)
  switch(field){
    case "type":
      op = {op: "eq", field: "type", value: data.label.toLowerCase()}
      break;
    case "genre":
      op = {op: "eq", field: "genres", value: data.label.toLowerCase()}
      break;
    case "countries":
      op = {op: "eq", field: "countries", value: data.label.toLowerCase()}
      break;
    case "rating entities":
      op = {op: "eq", field: "ratings.entity", value: data.label.toLowerCase()}
      break;
    case "ratings":
      op = {op: "eq", field: "ratings.rating", value: parseInt(data.label)}
      break;
    case "released":
      op = {op: "range", field: "releaseYear", value: [parseInt(data.label), parseInt(data.label) + 10]}
      break;
    case "duration":
      op = {op: "lte", field: "duration", value: parseInt(data.label)}
      break;
    case "production":
      op = {op: "eq", field: "production", value: data.label.toLowerCase()}
      break;
    case "cast":
      op = {op: "len", field: "cast", value: parseInt(data.label)}
      break;
    case "directors":
      op = {op: "len", field: "directed", value: parseInt(data.label)}
      break;
    case "producers":
      op = {op: "len", field: "produced", value: parseInt(data.label)}
      break;
    case "writers":
      op = {op: "len", field: "written", value: parseInt(data.label)}
      break;
    case "awards":
      op = {op: "len", field: "awards", value: parseInt(data.label)}
      break;
  }

  return op;
}