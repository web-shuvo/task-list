"use strict";

let taskInput = document.querySelector('#push input');
let taskAddBtn = document.querySelector('#push button');
let taskList = document.querySelector('#list');
let taskSearch = document.querySelector('#result input');
let taskSearchBtn = document.querySelector('#result button');
let taskResetBtn = document.querySelector('#result input[type="reset"]');



function createLi(val) {
    let li = document.createElement('li');
    li.innerHTML = `${val}  <a href="javascript:void(0);">&#9746;</a>`;
    taskList.appendChild(li);
    let text = li.innerText;
}


taskList.addEventListener('click', function (e) {
    if (e.target.matches('a')) {
        e.target.parentElement.remove();

    }

})


taskSearch.addEventListener('keyup', function (e) {

    if (taskList.hasChildNodes()) {

        let listItem = [...taskList.children];
        listItem.forEach((val) => {

            if (val.innerText.includes(e.target.value)) {
                val.style.display = 'block';
            } else {
                val.style.display = 'none';
            }


        })

    }

    taskSearch.addEventListener('blur', function (e) {
        e.target.value = ''
    })

})


taskResetBtn.addEventListener('click', function () {
    taskList.innerHTML = '';
    // while (taskList.hasChildNodes()) {
    //     taskList.firstChild.remove()

    // }
})


taskInput.addEventListener('keyup', function (e) {

    let value = e.target.value;
    if (e.key == 'Enter' && value != "") {
        createLi(value);
        storeLs(value)
        e.target.value = '';
    }
})


taskAddBtn.addEventListener('click', function () {

    if (taskInput.value != "") {
        createLi(taskInput.value);
        storeLs(taskInput.value)

    }
    taskInput.value = '';
})



function storeLs(listVal) {
    let tasks;

    if (localStorage.getItem('list') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('list'))

    }

    tasks.push(listVal);
    localStorage.setItem('list', JSON.stringify(tasks));
    
}

