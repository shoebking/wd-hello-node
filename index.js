// // const http = require("http");
// // const fs = require("fs");
// // fs.readFile("home.html", (err, home) => {
// //   console.log(home.toString());
// // });
// // fs.readFile("home.html", (err, home) => {
// //   if (err) {
// //     throw err;
// //   }
// //   http
// //     .createServer((request, response) => {
// //       response.writeHeader(200, { "Content-Type": "text/html" });
// //       response.write(home);
// //       response.end();
// //     })
// //     .listen(3000);
// // });

// const http = require("http");
// const fs = require("fs");
// const args = require('minimist')(process.argv.slice(2));

// let homeContent = "";
// let projectContent = "";
// let reg="";

// fs.readFile("home.html", (err, home) => {
//   if (err) {
//     throw err;
//   }
//   homeContent = home;
// });

// fs.readFile("project.html", (err, project) => {
//   if (err) {
//     throw err;
//   }
//   projectContent = project;
// });

// fs.readFile("registration.html", (err, registration) => {
//   if (err) {
//     throw err;
//   }
//   reg = registration;
// });

// http
//   .createServer((request, response) => {
//     let url = request.url;
//     // response.writeHeader(200, { "Content-Type": "text/html" });
//     // console.log(url);
//     if(url=="/registration"){
//       response.write(reg);
//       response.end();
//     }else if(url=="/project"){
//       response.write(projectContent);
//       response.end();
//     }else{
//       response.write(homeContent);
//       response.end();
//     }
//     // switch (url) {
//     //   case "/project":
//     //     response.write(projectContent);
//     //     response.end();
//     //     break;
//     //   case "/registration":
//     //     response.write(reg);
//     //     response.end();
//     //     break;
//     //   default:
//     //     response.write(homeContent);
//     //     response.end();
//     //     break;
//     // }
//   })
//   .listen(args.port);



// // fs.readFile("registration.html", (err, registration) => {
// //   console.log(registration.toString());
// // });

// const http = require('http');
// const fs = require('fs');
// const args = require('minimist')(process.argv.slice(2));

// let homePage;
// let projectPage;
// let registrationPage;
// // let registrationScript;

// fs.readFile("home.html", (err, data) => {
//     if (err) throw err;
//     homePage = data.toString();
// })

// fs.readFile("project.html", (err, data) => {
//     if (err) throw err;
//     projectPage = data.toString();
// })

// fs.readFile("registration.html", (err, data) => {
//     if (err) throw err;
//     registrationPage = data.toString();
// })

// // fs.readFile("registration.js", (err, data) => {
// //     if (err) throw err;
// //     registrationScript = data.toString();
// // })

// http.createServer((request, response) => {
//     let url = request.url;
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     switch (url) {
//         case "/project":
//             response.write(projectPage);
//             response.end();
//             break;
//         case "/registration":
//             response.write(registrationPage);
//             response.end();
//             break;
//         // case "/registration.js":
//         //     response.write(registrationScript);
//         //     response.end();
//         //     break;
//         default:
//             response.write(homePage);
//             response.end();
//             break;
//     }
// }).listen(args.port);



const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
    
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      // let currentDate = new Date().toJSON().slice(0, 10);
      // for(let i=0;i<all.length;i++){
      // if(all[i].completed==false && all[i].dueDate<currentDate){
      //       return (all[i].title+" "+all[i].dueDate);
      // }
      // }
      return all.filter((todo) => todo.dueDate < today);
      
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      // let currentDate = new Date().toJSON().slice(0, 10);
      // for(let i=0;i<all.length;i++){
      // if(all[i].completed==false && all[i].dueDate==currentDate){
      //       return all[i].title;
      // }
      // }
      return all.filter((todo) => todo.dueDate == today);
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      // let currentDate = new Date().toJSON().slice(0, 10);
      // for(let i=0;i<all.length;i++){
      //   if(all[i].completed==false && all[i].dueDate>currentDate){
      //       return (all[i].title+" "+all[i].dueDate);
      //   }
      // }
      return all.filter((todo) => todo.dueDate > today);
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // return list.map(item => `${item.completed ? '[x]':'[ ]'} ${item.title} ${item.title} ${item.dueDate===new Date().toLocaleDateString("en-CA")}`)
      return list
      .map(
        (todo) =>
          `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${
            todo.dueDate == today ? "" : todo.dueDate
          }`
      )
      .join("\n");
      // return OUTPUT_STRING
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  console.log(overdues);
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
//   console.log(itemsDueToday)
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
//   console.log(itemsDueLater);
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")
//   console.log(all);
// console.log(todoList());