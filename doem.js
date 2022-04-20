// 表格資料
let users = [
  { id:uuidv4(), name: '小王', englishName: 'fewfwefw', gender: '女', phone: 09090909099,email:'234@gmail.com'},
  { id:uuidv4(), name: '小王', englishName: 'fewfwefw', gender: '女', phone: 09090909099,email:'234@gmail.com'},
  { id:uuidv4(), name: '小王', englishName: 'fewfwefw', gender: '女', phone: 09090909099,email:'234@gmail.com'},
  { id:uuidv4(), name: '小王', englishName: 'fewfwefw', gender: '女', phone: 09090909099,email:'234@gmail.com'},
  
];

// 節點
const data = document.querySelector("#data");
const removeButton = document.querySelector(".remove-button");
const formBtn = document.querySelector(".form-btn");
const inputName = document.querySelector(".input-name");
const inputEnglishName = document.querySelector(".input-english-name");
const inputGender = document.querySelector(".input-gender");
const inputPhone = document.querySelector(".input-phone");
const inputEmail = document.querySelector(".input-email");

// 渲染表格資料
function displayUserList(users) {
  let dataUserHTML = "";
  // 資料驅動畫面
  users.forEach((user) => {
    dataUserHTML += `
      <tr data-id='${user.id}'>
        <td><span data-toggle="tooltip" data-placement="right" title="[${user.gender}]${user.name}(${user.englishName})">${user.name}</span></td>
        <td>${user.englishName}</td>
        <td>${user.gender}</td>
        <td><span data-toggle="tooltip" data-placement="right" title="聯絡方式：${user.phone}">${user.phone}</span></td>
        <td>${user.email}</td>
        <td>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-secondary">修改</button>
        </td>
        <td>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn btn-danger">刪除</button>
        </td>
      </tr>
  `;
  });

  data.innerHTML = dataUserHTML;
}
displayUserList(users);

let removeElement = ''
data.addEventListener("click", (event) => {
  // 不是按鈕就跳出
  if (event.target.tagName !== 'BUTTON') {
    console.log('click')
    return
  }
  // 判斷修改
  if (event.target.classList.contains('btn-secondary')) {
    // console.log(event.target.classList)
    console.log(event.target.parentElement.parentElement.dataset.id)
  }
  
  // 判斷刪除
  if (event.target.classList.contains('btn-danger')) {
    // console.log(event.target.parentElement.parentElement)
    removeElement = event.target.parentElement.parentElement
  }
})

removeButton.addEventListener('click', event => {
  console.log('click')
  removeElement.remove()
})

formBtn.addEventListener('click',event => {
  event.preventDefault()
  console.log('click')
  console.log(inputName.value)
  console.log(inputEmail.value)

  users.push(
    { id:uuidv4(), name: inputName.value, englishName: inputEmail.value, gender: inputGender.value, phone: inputPhone.value,email:inputEmail.value},
  )

  console.log(users)
  displayUserList(users);
})


data.addEventListener('mouseover',event => {
  console.log('mouseover')
  // console.log(event.target)
  // console.log(event.target.classList)
})
