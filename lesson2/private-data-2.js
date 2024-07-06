function makeList() {
  let list = [];

  return function(todo) {
    if (todo) {
      if (list.includes(todo)) {
        list.splice(list.indexOf(todo), 1);
        console.log(`${todo} removed!`);
      } else {
        list.push(todo);
        console.log(`${todo} added!`);
      }
    } else if (list.length) {
      console.log(list.join('\n'));
    } else {
      console.log('The list is empty.');
    }
  };
}

let list = makeList();
list();

list("make breakfast");
list("read book");
list();


list("make breakfast");
list();