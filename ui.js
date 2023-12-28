const [todoList] = document.getElementsByClassName('list');
const input = document.getElementById('input')
const btnSave = document.getElementById('btnSave')
const item = document.querySelectorAll('.item')
const data = []
btnSave.addEventListener('click', () => data.push(input.value))
btnSave.addEventListener('click', Todo)

function Todo() {
  const text = input.value
  if (text.trim() !== '') {
    console.log(data)
    const html = ` ${text}
 <button   onclick="deleteLi(this)"> delete</button> `
    const li = document.createElement('li');
    li.innerHTML = html;
    li.classList = "item"
    todoList.appendChild(li)
    input.value = ''
    console.log(li)
  }
}

function gettingBtn() {
  item.map((li) => { li.childeren[0].addEventListener('click', (btn) => btn.parentElement.remove()) })
}
function deleteLi(btn) {
  btn.parentElement.remove()
  data = data.filter((a) => a !== btn.value)
}




