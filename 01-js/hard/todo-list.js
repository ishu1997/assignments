/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
   this.tasks=[];
  }  

  add(todo){
    this.tasks.push(todo);
  }

  remove(indexOfTodo){

    this.tasks.splice(indexOfTodo, 1);

  }

  update(index, updatedTodo){

    if(index<=this.tasks.length-1)
    this.tasks.splice(index, 1,updatedTodo);

  }

  getAll(){
    return this.tasks;
  }

  get(indexOfTodo){

    if(indexOfTodo<=this.tasks.length-1){
      return this.tasks[indexOfTodo];
    }
    else{
      return null;
    }
   
  }

  clear(){
    this.tasks=[];
  }

}

module.exports = Todo;
