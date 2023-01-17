fetch('https://reqres.in/api/users/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Tiago',
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))