import Org_db from "./OrganicProduct";

function getRandom(arr) {
    const index = Math.floor(Math.random()*arr.length);
    const item = arr[index];
    return item;
}
// var arr1 = map(Org_db)
const result = getRandom(Org_db);

const result2 = getRandom(Org_db);


var index1 = Org_db.indexOf[result];
var index2 = Org_db.indexOf[result2];



export {result, result2, index1, index2};
