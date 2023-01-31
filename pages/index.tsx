
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

////////////////////////////////////////////////

const fetch = require('node-fetch');

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// function GetTodos(target: any, name: string) {
//   const hiddenInstanceKey = "_$$" + name + "$$_";
//   const init = () => {
//     return fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json()); 
//   };

//   Object.defineProperty(target, name, {
//     get: function() {
//       return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
//     }
//   });
// }

// class TodoService {
//   @GetTodos
//   todos: Promise<ITodo[]>;
// }

function Get(url: string) {
  return function(target: any, name: string) {
    const hiddenInstanceKey = "_$$" + name + "$$_";
    const init = () => {
      return fetch(url)
        .then(response => response.json()); 
    };

    Object.defineProperty(target, name, {
      get: function() {
        return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
      },
      configurable: true
    });
  }
}  

function First() {
  return function(target: any, name: string) {
    const hiddenInstanceKey = "_$$" + name + "$$_";
    const prevInit = Object.getOwnPropertyDescriptor(target, name).get;
    const init = () => {
      return prevInit()
        .then(response => response[0]); 
    };

    Object.defineProperty(target, name, {
      get: function() {
        return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
      },
      configurable: true
    });
  }
}
  
class TodoService {
  @First()
  @Get('https://jsonplaceholder.typicode.com/todos')
  todos: Promise<ITodo[]>;
}

const todoService = new TodoService();
todoService.todos.then(todos => {
  console.log(todos);
})
todoService.todos.then(todos => {
  console.log(todos);
})
todoService.todos.then(todos => {
  console.log(todos);
})