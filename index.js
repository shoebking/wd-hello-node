// const http = require("http");
// const fs = require("fs");
// fs.readFile("home.html", (err, home) => {
//   console.log(home.toString());
// });
// fs.readFile("home.html", (err, home) => {
//   if (err) {
//     throw err;
//   }
//   http
//     .createServer((request, response) => {
//       response.writeHeader(200, { "Content-Type": "text/html" });
//       response.write(home);
//       response.end();
//     })
//     .listen(3000);
// });

const http = require("http");
const fs = require("fs");
const args = require('minimist')(process.argv.slice(2));

let homeContent = "";
let projectContent = "";
let reg="";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  reg = registration;
});

http
  .createServer((request, response) => {
    let url = request.url;
    // response.writeHeader(200, { "Content-Type": "text/html" });
    // console.log(url);
    if(url=="/registration"){
      response.write(reg);
      response.end();
    }else if(url=="/project"){
      response.write(projectContent);
      response.end();
    }else{
      response.write(homeContent);
      response.end();
    }
    // switch (url) {
    //   case "/project":
    //     response.write(projectContent);
    //     response.end();
    //     break;
    //   case "/registration":
    //     response.write(reg);
    //     response.end();
    //     break;
    //   default:
    //     response.write(homeContent);
    //     response.end();
    //     break;
    // }
  })
  .listen(args.port);



// fs.readFile("registration.html", (err, registration) => {
//   console.log(registration.toString());
// });