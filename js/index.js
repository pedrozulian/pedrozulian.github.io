import { Repository } from "./items.js";

const ajax = new XMLHttpRequest();
const listCommits = [];
const gitUrl = "https://api.github.com/users/pedrozulian/events";

ajax.open('GET', gitUrl, true);
ajax.send();
ajax.responseType = "json";

ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        const data = ajax.response;
        
        this.listCommits = data.slice(0, 10);

        console.log(this.listCommits);
    }
}
