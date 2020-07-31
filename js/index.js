import { Repository } from "./items.js";

const ajax = new XMLHttpRequest();
const listCommits = [];
const myUser = "pedrozulian";
const urlApiGithub = "https://api.github.com/users";

const url = formatUrlApiGithub(urlApiGithub, myUser);

ajax.open('GET', url, true);
ajax.send();
ajax.responseType = "json";


ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        const data = ajax.response;
        
        this.listCommits = data.slice(0, 10);

        console.log(this.listCommits);
    }
}

function formatUrlApiGithub(urlApiGithub, myUser) {
    return urlApiGithub+"/"+myUser+"/"+"events"
}