var click = document.querySelector('#add')


function add() {

    if (document.querySelector('#newtask #title').value.trim().length === 0) {
        alert("Enter Title")
    }
    else if (document.querySelector('#newtask #description').value.length == 0) {
        alert("Enter Description")
    }
    else {
        document.querySelector('#task').innerHTML +=
            `<div class='task' id="result">
        <span id="date">
            ${document.getElementById('date').innerHTML += new Date().toLocaleDateString("en-GB")}
        </span><br>
        <span >
            Title: ${document.querySelector('#newtask #title').value}
        </span><br>
        <span >
            Description: ${document.querySelector('#newtask #description').value}
        </span><br>
            <button id='delete' onClick="deleteBtn()">Completed</button>
        </div>`
        document.querySelector('#newtask #title').value = ' '
        document.querySelector('#newtask #description').value = ' '

        var del = document.querySelectorAll('#delete')
        for (var index = 0; index < del.length; index++) {
            del[index].onclick = function () {
                this.parentNode.remove();
            }
        }

    }
}


