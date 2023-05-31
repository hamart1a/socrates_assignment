let input = document.getElementById('comment_input');
let addButton = document.getElementById('add');
let commentList = document.getElementById('comment_list');
//let cIndex = 0;



//add function
addButton.addEventListener('click', addComment);
input.addEventListener('keyup', function(event){
  if(event.keyCode === 13){
    event.preventDefault();//기본동작방지
    addButton.click();
  }
});

function addComment() {
    let contents = input.value;
    if(!contents){alert('뭐라도입력해');}
    else {
        makeCommentDOM(contents);
        input.value='';    
    }
}

function makeCommentDOM(contents) {
    //cIndex = document.querySelectorAll('.comment_unit').length+1;
    let commentContainer = makeCommentContainer();
    let commentContents = makeCommentContents(contents);
    let commentBtn = makeCommentBtn();
    commentContainer.appendChild(commentContents);
    commentContainer.appendChild(commentBtn);
    commentList.appendChild(commentContainer);
    applyCommentContainerEvent(commentContainer);
}

function makeCommentContainer(){
    let commentContainer =  document.createElement('div');
        commentContainer.classList.add('comment_unit');
        //commentContainer.setAttribute('index',cIndex);
    return commentContainer;
};
function makeCommentContents(contents){
    let commentContents = document.createElement('input');
        commentContents.classList.add('contents');
        commentContents.setAttribute('value',contents);
        commentContents.setAttribute('readonly','true');
    return commentContents;
};
function makeCommentBtn(){
    let commentButtons = document.createElement('div');
        commentButtons.classList.add('buttons');
    let editButton = document.createElement('button');
        editButton.className = 'edit';
        let editIcon = document.createElement('i');
        editIcon.className='fas fa-pen';
        editButton.appendChild(editIcon);
    let doneButton = document.createElement('button');
        doneButton.className = 'done';
        let doneIcon = document.createElement('i');
        doneIcon.className='fas fa-check';
        doneButton.appendChild(doneIcon);
    let deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        //deleteButton.setAttribute("onclick","deleteComment(this)");
        let deleteIcon = document.createElement('i');
        deleteIcon.className='fas fa-trash';
        deleteButton.appendChild(deleteIcon);
    commentButtons.append(editButton,doneButton,deleteButton);
    return commentButtons;
};

function applyCommentContainerEvent(commentContainer){
    const deleteButton = commentContainer.querySelector(".delete");
    const doneButton = commentContainer.querySelector(".done");
    const editButton = commentContainer.querySelector(".edit");

    deleteButton.addEventListener("click", () => {
        commentList.removeChild(commentContainer)
    });
}

//댓글삭제
// function deleteComment(t){
//     let index = t.getAttribute("index");
//     let comments = document.querySelectorAll('.comment_unit');
//     comments.forEach(comment => {
//         if(index == comment.getAttribute("index")){
//             comment.remove();
//         }
//     });
// };



