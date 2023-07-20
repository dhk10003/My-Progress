// const name = 'Maria' // string => instance of a String object
// const number = 87.5263738129
// console.log(name.toUpperCase())
// console.log(number.toFixed(2))

function Post(title, body) {
  this.title = title
  this.body = body
  this.likes = 0
  this.publishedAt = new Date()
  //   this.likePost = function () {
  //     this.likes++
  //   }
}

Post.prototype.deletePost = function () {
  console.log('Post was deleted')
}

Post.prototype.likePost = function () {
  this.likes++
}

const posts = [
  new Post('PostA', 'post A body'),
  new Post('PostB', 'post B body'),
]

posts[1].likePost()
posts[1].likePost()
posts[0].deletePost()
console.log(posts)
