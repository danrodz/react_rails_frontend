const readFile = e => {
  e.preventDefault();
  const data = new FormData(e.target);
  // const token = ''
  fetch('https://danrodz.herokuapp.com/api/v1/users', {
    // fetch('http://localhost:3005/api/v1/users', {
    // fetch('http://localhost:3005/api/v1/profile', {
    // fetch('http://localhost:3005/api/v1/login', {
    method: 'POST',
    // method: 'GET',
    // headers: {
    // 'Content-Type': 'application/json',
    // Accept: 'application/json'
    // Authorization: `Bearer ${token}`
    // },
    body: data
    // body: JSON.stringify({
    //   username: 'user',
    //   password: 'password'
    // })
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    });
  console.log(e);
  // {
  // id: 1,
  // image_url: "link",
  // username: "user"
  // }
};

// <form onSubmit={this.readFile}>
// <input type="text" name="username" />
// <input type="text" name="password" />
// <input type="file" name="image" />
// <input type="submit" value="Submit" />
// </form>
