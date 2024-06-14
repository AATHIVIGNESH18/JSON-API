//get,post
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        userId:22,
        id:456,
        title:'test',
        completed:false
    })
})
      .then(response => response.json())
      .then(json => console.log(json))