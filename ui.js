const [todoList] = document.getElementsByClassName('list');


const Todo = (text) => {
  const html = `<li class='item'>${text}</li>`
  const li = document.createElement('li');
  li.innerHTML = html; 
  return li;
}
