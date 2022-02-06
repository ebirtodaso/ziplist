// eslint-disable-next-line consistent-return
function zipList(list1, list2) {
  const newList = [];
  let count = 0;
  if (list1.length === list2.length) {
    for (const item of list1) {
      newList[count] = item;
      count += 2;
    }
    count = 1;
    for (const item of list2) {
      newList[count] = item;
      count += 2;
    }
    return newList;
  }
}
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
