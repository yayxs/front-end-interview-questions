const qs = `?name=vast&age=10`;

let sp = new URLSearchParams(qs);

console.log(sp);
console.log(sp.toString());

if (sp.has("name")) {
  console.log(sp.get("name"));
}
