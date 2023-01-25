
const frontBeginners = [
  { name: 'Carlinhos da massa', age: 25, title: 'JR', test: 35 },
  { name: 'Joãzinho do pastel', age: 32, title: 'PL', test: 56 },
  { name: 'Harry do Potter', age: 80, title: 'SR', test: 90 },
  { name: 'Vitinho o pequeno', age: 50, title: 'JR', test: 55 },
  { name: 'Juvenal', age: 80, title: 'SR', test: 55 },
  { name: 'Torquato', age: 32, title: 'JR', test: 55 },
]

const values =  frontBeginners.filter((item) => item.age >= 50).map((item) => item.name)

console.log(values)