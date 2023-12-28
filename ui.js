const [todoList] = document.getElementsByClassName('list');
const input = document.getElementById('input')
const btnSave = document.getElementById('btnSave')

let data = []
btnSave.addEventListener('click', () => data.push(input.value))
btnSave.addEventListener('click', Todo)

function Todo() {
  const text = input.value
  if (text.trim() !== '') {
    const html = ` ${text}
 <button> delete</button> `
    const li = document.createElement('li');
    li.innerHTML = html;
    li.classList = "item"
    todoList.appendChild(li)
    input.value = ''
    gettingBtn()

  }
}

function gettingBtn() {
  const item = document.querySelectorAll('.item')
  item.forEach((li) => {
    li.children[0].addEventListener('click', (btn) => {
      btn.currentTarget.parentElement.remove();
      data = data.filter((a) => a !== btn.currentTarget.parentElement.innerHTML.slice(0, -27))
    });
  });

}
function deleteLi(btn) {
  btn.parentElement.remove()

}




