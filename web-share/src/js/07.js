function compare(times) {
  let a = { key: {} };
  let temp = a;
  for (let i = 0; i < times; i++) {
    let tmp = temp["key"];
    tmp["key"] = {};
    temp = tmp;
  }
  temp["key"]["key"] = "surprise";

  let d0 = new Date();
  let i = a;
  while (i["key"] !== "surprise") {
    i = i["key"];
  }
  console.log("[] time", new Date() - d0);

  let d1 = new Date();
  let ii = a;
  while (ii.key !== "surprise") {
    ii = ii.key;
  }
  console.log(". time", new Date() - d1);
}


compare(10000000);  
compare(10000001);  
compare(10000002); 
compare(10000003); 