document.addEventListener('DOMContentLoaded', () => {
//functions
const createNewTask = (e) => {
  e.preventDefault();
  //grab the input
  const newTaskDescription = document.getElementById('new-task-description')
  console.log(newTaskDescription.value)
  //create lis
  const newLi = document.createElement('li')
  console.log(newLi)
  //create a button
  let bttn = document.createElement('button')
  console.log(bttn)
  bttn.textContent = 'x'
  //print the input in the li
  newLi.textContent = newTaskDescription.value
  //append bttn and li
  const ul = document.querySelector('#tasks')
  console.log(ul)
  ul.appendChild(newLi)
  newLi.appendChild('bttn')
  //clear out form
  e.target.reset();
}

// grab stuff
const form = document.getElementById('create-task-form')

// event listeners
form.addEventListener('submit', createNewTask)
bttn.addEventListener('click', handleDelete)
})