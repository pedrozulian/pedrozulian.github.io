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

        this.listCommits.forEach((commit) => {
            const divTarget = document.getElementById("commits"); // <li> with id="commits"

            const divCommit = document.createElement("li");
            divCommit.classList.add("commit", "commit-timeline");

            // element of message
            const message = document.createElement("span");
            message.classList.add("message", "mt-3");
            message.innerHTML = commit.message;

            // element of committed (with link of commit on github)
            const committed = document.createElement("span");
            const committed_link = document.createElement("a");
            committed.classList.add("committed");
            committed_link.innerHTML = "committed";
            committed_link.setAttribute("href", commit.url);
            committed_link.classList.add("committed-text");
            committed.appendChild(committed_link);

            // element with name of repository
            const repository = document.createElement("span");
            repository.innerHTML = "on repository " + commit.repository;


            divCommit.appendChild(message);
            divCommit.appendChild(committed);
            divCommit.appendChild(repository);
            divTarget.appendChild(divCommit);
        });

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