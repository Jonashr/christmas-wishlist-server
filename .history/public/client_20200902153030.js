
// client-side js
// run by the browser each time your view template is loaded



// define variables that reference elements on our page
const santaForm = document.forms[0];

const childName = document.getElementsByClassName('userid')
const wish = document.getElementsByName('wish')

console.log('Log childs name', childName, wish)

// listen for the form to be submitted and add a new dream when it is
santaForm.onsubmit = function (event) {
  event.preventDefault()
  console.log('Submit form')
  console.log(childName[0].value)
  console.log(wish[0].value)
  // TODO: check the text isn't more than 100chars before submitting
  // event.preventDefault();
};
