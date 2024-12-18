let inputBox = document.getElementById('inputBox')
let listContainer = document.getElementById('list_container')

document.getElementById('addBtn').addEventListener("click", (e)=>{
   if (inputBox.value == '') {
      alert('This field is empty')
   } else {
      let li = document.createElement('li')
      li.innerHTML = `
         <div id='list'>
            ${inputBox.value}
         </div>
         <div id='btns'>
            <button id="editBtn" type="submit" onclick='editFunc(this)'>Edit</button>
            <button id="dltBtn" type="submit" onclick='deleteFunc(this)'>Delete</button>
         </div>
      `
      listContainer.appendChild(li)
      inputBox.value = ''
   }
})

function deleteFunc(e){
   let bap = e.parentElement
   bap.parentElement.remove()
}

function editFunc(e){
   let li = e.parentElement
   let dltBtn = li.lastElementChild
   let pLi = li.parentElement
   let cLi = pLi.firstElementChild
   let liValue = cLi.innerText
   
   if (e.innerText === 'Update') {
      dltBtn.removeAttribute('style')
      e.innerText = 'Edit'
      
      let list = document.createElement('div')
      list.innerText = cLi.value
      list.id = 'list'
      pLi.replaceChild(list, cLi)
   } else{
      let editInput = document.createElement('input')
      editInput.type = 'text'
      editInput.id = 'editInput'
      editInput.placeholder = 'Edit your task'
      editInput.value = liValue
      pLi.replaceChild(editInput, cLi)
      
      dltBtn.setAttribute('style', 'display: none', true)
      e.innerText = 'Update'
   }
}
