const posts = [];
let lastActivityTime;

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}


createPost({ title: "POST1" })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log("All posts:", posts);
    console.log("Last activity time:", lastActivityTime);
    return deleteLastPost();
  })
  .then((deletedPost) => {
    console.log("Deleted post:", deletedPost);
    console.log("Remaining posts:", posts);
  })
  .catch((error) => console.log(error));
