/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {

   constructor(){
    this.list = [];
   }

  add(todo){
    this.list.push(todo);
    return "sucessfully added!";
  }

  remove(indexOfTodo){
    if(indexOfTodo >= this.list.length){
      return "todo Not Exist!"
    }
    return this.list.splice(indexOfTodo,1);
  }

  update(index, updatedTodo){
    this.listindex = updatedTodo;
    return "update sucessful!";
  }

  getAll(){
    return this.list;
  }

  get(indexOfTodo){
    if(indexOfTodo >= this.list.length){
      return "todo Not Exist!"
    }
    
    return this.list[indexOfTodo];
  }

  clear() {
    this.list = [];
  }

}

const todo = new Todo();

todo.add('Excercise');
todo.add('lunch');
todo.add('study');
todo.clear();
console.log(todo.get(2));
module.exports = Todo;
