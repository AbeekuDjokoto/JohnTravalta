import { Octokit, App } from "https://cdn.skypack.dev/octokit";

let username = document.getElementById("username");
let Button = document.getElementById("btn");
let name = document.getElementById('title')
let location = document.getElementById('location')
let company = document.getElementById('company')
// const { Octokit } = require("octokit");


const octokit = new Octokit();

Button.addEventListener("click", (e) => {
  e.preventDefault();
  octokit.rest.users
    .getByUsername({
      username: username.value,
    })
    .then((info) => {
      name.innerHTML = info.data.name
      location.innerHTML = info.data.location
      company.innerHTML = info.data.company
      console.log(info)
    })
});


  