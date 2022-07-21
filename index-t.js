console.log("before");

getUser(1, (user) => {
  console.log(user);
  getRepositories(user.gitHubUserName, (repo) => {
    console.log("repo", repo);
  });
});
console.log("after");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Readdding database in server ....");
    callback({ id: id, gitHubUserName: "mosh" });
  }, 2000);
}

function getRepositories(userName, callback) {
  setTimeout(() => {
    console.log("taking repo from git .....");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
