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
        this.listCommits = getCommitsFromGithub(this.listCommits);
    }
}

function formatUrlApiGithub(urlApiGithub, myUser) {
    return urlApiGithub+"/"+myUser+"/"+"events";
}

function getCommitsFromGithub(data) {
    return data.map((row) => {
        const repository = row.repo.name;
        const message = row.payload.commits.map((row) => { return row.message });
        const sha = row.payload.commits.map((row) => { return row.sha });
        return {
            repository: repository,
            message: message[0],
            sha: sha[0],
            url: "https://github.com/"+repository+"/commit/"+sha
        }
    });
}