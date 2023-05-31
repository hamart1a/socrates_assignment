let input = document.getElementById('comment_input');
let addButton = document.getElementById('add');
let commentList = document.getElementById('comment_list');

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
    let saveButton = document.createElement('button');
        saveButton.className = 'save';
        let saveIcon = document.createElement('i');
        saveIcon.className='fas fa-check';
        saveButton.appendChild(saveIcon);
    let deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        let deleteIcon = document.createElement('i');
        deleteIcon.className='fas fa-trash';
        deleteButton.appendChild(deleteIcon);
    commentButtons.append(editButton,saveButton,deleteButton);
    return commentButtons;
};

function applyCommentContainerEvent(commentContainer){
    const deleteButton = commentContainer.querySelector(".delete");
    const saveButton = commentContainer.querySelector(".save");
    const editButton = commentContainer.querySelector(".edit");
    let contents = commentContainer.firstChild

    deleteButton.addEventListener("click", () => {
        commentList.removeChild(commentContainer)
    });

    editButton.addEventListener('click', () => {
            contents.removeAttribute('readOnly');
            contents.focus();
    });

    saveButton.addEventListener('click', () => {
        contents.setAttribute('readOnly', 'readOnly');
    });
}



