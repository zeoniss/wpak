console.log(localStorage)
localStorage.setItem('name', JSON.stringify({ name: 'Mango', age: 2 }))

const savedData = localStorage.getItem('name')
console.log('savedData', savedData)
const parsedData = JSON.parse(savedData)
console.log('parsedData', parsedData)
