let input = document.getElementById('comment_input');
let addButton = document.getElementById('add');

let editButton = document.querySelectorAll('edit');
let doneButton = document.querySelectorAll('done');
let deleteButton = document.querySelectorAll('delete');
let commentList = document.getElementById('comment_list');



//생성
addButton.addEventListener('click', addComment);
input.addEventListener('keyup', function(event){
  if(event.keyCode === 13){
    event.preventDefault();//기본동작방지
    addButton.click();
  }
});

// <!-- <div class="comment_unit">
// <input type="text"
//       class="text"
//       value="new Task"
//       readonly
// />
// <div class="actions">
//     <button class="edit"> <i class="fas fa-pen"></i> </button>
//     <button class="done">  <i class="fas fa-check"></i></button>
//     <button class="delete"> <i class="fas fa-trash"></i></button>
//     <br>
// </div>
// </div>     -->
function addComment() {
    let contents = input.value;
    console.log(contents);
    if(!contents){alert('뭐라도입력해');}
    else {makeCommentDOM(contents);}
}

function makeCommentDOM(contents) {
    let commentContainer =  document.createElement('div');
        commentContainer.classList.add('comment_unit');
    let commentContents = document.createElement('input');
        commentContents.classList.add('contents');
        commentContents.setAttribute('value',contents);
        commentContents.setAttribute('readonly','true');
    let commentButtons = document.createElement('div');
        commentButtons.classList.add('buttons');
    commentContainer.appendChild(commentContents);
    console.log(commentContainer);
    commentList.innerHTML += commentContainer.innerHTML;
    console.log("집어넣었더!");

}


//댓글수정

//댓글삭제

