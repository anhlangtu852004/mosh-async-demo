console.log("Before");
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });
console.log("After");

//promise approach
// getUser(1)
//   .then((user) => getRepositories(user))
//   .then((repo) => getCommits(repo))
//   .then((commit) => console.log(commit))
//   .catch((error) => console.log(error.message));
//async await approach
async function displayCommit() {
  try {
    const user = await getUser(1);
    const repo = await getRepositories(user);
    const commit = await getCommits(repo);
    console.log(commit);
  } catch (error) {
    console.log(error.message);
  }
}
displayCommit();
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      // resolve(["repo1", "repo2", "repo3"]);
      reject(new Error("k lay dc repo"));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
