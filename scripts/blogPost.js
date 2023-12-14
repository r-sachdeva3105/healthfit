let comments = [];
listComments();

function listComments() {
    let listItems = '';
    for (let i = 0; i < comments.length; i++) {
        listItems += `<div class="commentBox">`;
        listItems += `<h3>${comments[i]}</h3>`;
        listItems += `<button type="button" onclick="deleteComment(${i})"><i class="fa-solid fa-trash"></i></button>`;
        listItems += `</div>`
    }
    document.getElementById('comments').innerHTML = listItems;
}
function addComment() {
    let comment = document.getElementsByName('comment')[0].value;
    let error = document.getElementById('error');
    if (comment) {
        error.innerText = "";
        comments.push(comment);
        listComments();
        document.getElementById('addComment').reset();
    } else {
        error.innerText = "Enter a comment!";
    }
}

function deleteComment(i) {
    comments.splice(i, 1);
    listComments();
}