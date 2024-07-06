/* eslint-disable max-lines-per-function */
function makeList() {
  let items = [];
  return {
    list: function() {
      if (items.length) {
        console.log(items.join('\n'));
      } else {
        console.log('This list is empty.');
      }
    },

    add: function(item) {
      items.push(item);
      console.log(`${item} added!`);
    },

    remove: function(item) {
      if (items.includes(item)) {
        items.splice(items.indexOf(item), 1);
        console.log(`${item} removed!`);
      } else {
        console.log('Item not present in list.');
      }
    }
  };
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.remove('carrots');
list.list();