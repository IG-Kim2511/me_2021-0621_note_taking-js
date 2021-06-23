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
const modalDetailNew = document.querySelector('#modal_detail_new');
const modalDetailContainer = document.querySelector('#modal_detail_container');


//🍀

/* 🍄Algorithm) 
2. submit- title, note - create
3. save local storage : so that I can use the data for detail div
4. click btn in created note  - detail, delete
6. click detail btn which is created- show whole note
8. click delete btn which is created- delete parent node
10. create delete btn in detail modal and hide the modal
12 clear all button
*/

//🍀 2. title, note - create
submitBtn.addEventListener('click',run);

function run(e){
    e.preventDefault();
       
    let note = document.createElement('div');
    note.classList.add('note_new_container');

    //🦄.substring();
    note.innerHTML=`    
        <h2 class="note_title">${titleInput.value.substring(0,20)}</h2> 
        <div class="note_content">${noteInput.value.substring(0,30)}</div>
        <button class="myButton2 detail">view detail</button>
        <button class="myButton2 delete">delete</button>    
    `
    noteNew.append(note);       

    //🍀3. save local storage : so that I can use the data for detail div

    titleInput.value="" ;
    noteInput.value="" ;    
}


//🍀note_new : event bubbling, find e.target button

noteNew.addEventListener('click',(e)=>{
   
    // 🍉js 8. click delete btn which is created- delete parent node
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();     
    }   
    if (e.target.classList.contains('detail')) {

        let noteTitle = e.target.closest('.note_title').textContent;

        let noteContent = e.target.closest('.note_content').textContent;
       activeModal(noteTitle,noteContent);
    }   

});

function activeModal(a,b) {

    document.querySelector('.modal_title').innerHTML(a);
    document.querySelector('.modal_content').innerHTML(b);
    
    modalDetailContainer.classList.add('opacity');


}

//🍀 🍉js 6. detail - modal
/* 
🍄알고리즘)

2. modal div 만들어둠

4. js로 css, html textcontent 넣으면 화면에 띄워짐  */


//🍀

//🍀

//🍀

//🍀

//🍀

//🍀12 reload

clearAllBtn.addEventListener('click',run_clearall);
function run_clearall() {
   window.location.reload();
}