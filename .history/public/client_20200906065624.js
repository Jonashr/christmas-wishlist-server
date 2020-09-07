const santaForm = document.forms[0]

const childName = document.getElementsByName('userid')
const wish = document.getElementsByName('wish')

console.log('Log childs name', childName, wish)

santaForm.onsubmit = function (event) {
  event.preventDefault()
  console.log(childName[0].value)
  console.log(wish[0].value)
  // TODO: check the text isn't more than 100chars before submitting
  // event.preventDefault();
  document.location.href="http://localhost:3000/error.html"; 
}
