let todos= [{name:'launch',done:false},
{name:'dinner',done:false},
{name:'breakfast',done:false}
];

let name1 = 'dinner';

// todos.find(item => {
//     if(name1==item.name){
//         console.log(item.name)
//         item.done = !item.done
//         console.log(item);
//     }
// })

const newTodos =todos.map((todo)=>todo.name===name1?({...todo,done:!todo.done}) :todo);
console.log(newTodos)

