'use strict';
/* 
🍀🍈🍓🎃 섹터 나눔 마크
🍉 js-6

🦄 point, 알아낸것
🚀 공식 (알고리즘 상위호환)
🍄Algorithm)  알고리즘 (코딩 순서, 소프트코딩)
📌⚡ 중요사항

🐞 bug
❓ question, bug

🌊 다음에 할거

⚽ (hard-coding) (soft-coding)
💊 way-1 way-2 way-3 
*/


//🍀
const titleInput = document.querySelector('.title_input');
const noteInput = document.querySelector('.note_input');
const submitBtn = document.querySelector('.submit');
const clearAllBtn = document.querySelector('.clear_all');

const noteNew = document.querySelector('#note_new');

//🍀

/* 🍄Algorithm) 
2. submit- title, note - create
3. clear all
4. click btn in created note  - detail, delete
6. detail btn - show whole note
8. create delete btn in detail note and give function
*/

//🍀 2. title, note - create
submitBtn.addEventListener('click',run);

function run(e){
    e.preventDefault();
       
    let note = document.createElement('div');
    note.classList.add('note_new_container');
    note.innerHTML=`    
        <h2>${titleInput.value}</h2>
        <div class="content">${noteInput.value}</div>
        <button class="myButton2 detail">view detail</button>
        <button class="myButton2 delete">delete</button>    
    `
    noteNew.append(note);   

    titleInput.value="" ;
    noteInput.value="" ;
}

//🍀3 reload

clearAllBtn.addEventListener('click',run_clearall);
function run_clearall() {
   window.location.reload();
}

//🍀

//🍀

//🍀

//🍀

//🍀

//🍀

//🍀

//🍀