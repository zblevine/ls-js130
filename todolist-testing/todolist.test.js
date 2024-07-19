/* eslint-disable max-lines-per-function */
const Todo = require('./todo.js');
const TodoList = require('./todolist.js');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns copy of list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('calling first returns first todo', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('calling last returns last todo', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('calling shift removes and returns first todo', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.size()).toBe(2);
  });

  test('calling pop removes and returns last todo', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.size()).toBe(2);
  });

  test('isDone returns true when all items in list are done, else false', () => {
    expect(list.isDone()).toBe(false);
    todo1.markDone();
    todo2.markDone();
    expect(list.isDone()).toBe(false);
    todo3.markDone();
    expect(list.isDone()).toBe(true);
  });

  test('add shouldn\'t work on non-Todo objects', () => {
    expect(() => list.add({iam: 'not a todo'})).toThrow(TypeError);
  });

  test('itemAt works on index with element, throws error if not', () => {
    expect(list.itemAt(2)).toEqual(todo3);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
    expect(() => list.itemAt('hey hey hey')).toThrow(ReferenceError);
  });

  test('markDoneAt works on index with element, throws error if not', () => {
    list.markDoneAt(2);
    expect(list.itemAt(2).isDone()).toBe(true);
    expect(() => list.markDoneAt(5)).toThrow(ReferenceError);
    expect(() => list.markDoneAt('hey hey hey')).toThrow(ReferenceError);
  });

  test('markUndoneAt works on index with element, throws error if not', () => {
    list.markDoneAt(2);
    list.markUndoneAt(2);
    expect(list.itemAt(2).isDone()).toBe(false);
    expect(() => list.markUndoneAt(5)).toThrow(ReferenceError);
    expect(() => list.markUndoneAt('hey hey hey')).toThrow(ReferenceError);
  });

  test('markAllDone marks all done', () => {
    list.markAllDone();
    expect(list.itemAt(0).isDone()).toBe(true);
    expect(list.itemAt(1).isDone()).toBe(true);
    expect(list.itemAt(2).isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test('removeAt', () => {
    expect(() => list.removeAt(3)).toThrow(ReferenceError);
    expect(list.removeAt(1)).toEqual([todo2]);
    expect(list.size()).toBe(2);
  });

  test('toString returns string representation of the list', () => {
    list.markDoneAt(1);
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);

    list.markAllDone();
    let string2 = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
    expect(list.toString()).toBe(string2);
  });

  test('forEach iterates through all elements', () => {
    let arr = [];
    list.forEach(todo => arr.push(todo.getTitle()));
    expect(arr).toEqual(['Buy milk', 'Clean room', 'Go to the gym']);
  });

  test('filter filters', () => {
    list.markDoneAt(1);
    list.markDoneAt(2);
    let filtered = list.filter(todo => todo.isDone());
    expect(filtered.first()).toEqual(todo2);
  });
});