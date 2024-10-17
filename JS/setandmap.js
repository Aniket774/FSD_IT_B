const map=new Map([
    ["Key1","js"],
    [123, "java"],
    [234,456],
    ["lan1","GO"]
]);

console.log(map.get(123));
console.log(map.get("Key1"));
map.set("Key2","typescript");
console.log(map);