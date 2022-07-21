console.log("before");
getUser(1, (user) => {
  console.log(user);
});
console.log("after");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Readdding database in server ....");
    callback({ id: id, gitHubUserName: "mosh" });
  }, 2000);
}
