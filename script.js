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

const modalDetailContainer = document.querySelector('.modal_detail_container');
const modalTitle = document.querySelector('.modal_title');
const modalContent = document.querySelector('.modal_content');
const modalDelete = document.querySelector('.modal_delete');


//🍀

/* 🍄Algorithm) 
1. class , 
2. submit- title,
2-2. note - create
3. save local storage : so that I can use the data for detail div
4. click btn in created note  - detail, delete
6. click detail btn which is created- show whole note
8. click delete btn which is created- delete parent node
10. create delete btn in detail modal and hide the modal
12 clear all button
*/



//🍀 🦄js 1 class , 🍄알고리즘, class이용해서 밖으로 데이터 빼서,  object생성
// 🦄 Math.floor(Math.random()*1000);

class Note {
    constructor(a,b){
        this.title = a;
        this.body = b;
        this.id = Math.floor(Math.random()*1000);
        console.log(this.id);
    }
}


//🍀 2. title, note - create
submitBtn.addEventListener('click',run);

function run(e){
    e.preventDefault();

    // 🦄js 1
    let newNote = new Note(titleInput.value,noteInput.value);
    console.log(newNote)
       
    addNoteToList(newNote);    

    //🍀3. save local storage : so that I can use the data for detail div  ....🌊

    titleInput.value="" ;
    noteInput.value="" ;    
}

//🌱js 2-2. note - create, innerHTML
function addNoteToList(newNote) {
    
    let note = document.createElement('div');
    note.classList.add('note_new_container');    
    noteNew.append(note);   

    //🦄.substring();
    note.innerHTML=`    
        <h2 class="note_title">${newNote.title.substring(0,20)}</h2> 
        <div class="note_content">${newNote.body.substring(0,30)}</div>
        <button class="myButton2 detail">view detail</button>
        <button class="myButton2 delete">delete</button>    
    `;    



//🍀note_new : event bubbling, find e.target button


console.log(newNote);

noteNew.addEventListener('click',(e)=>{

    // 🍉js 8. click delete btn which is created- delete parent node
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();     
        modalDetailContainer.classList.remove('modal_show'); 
    }   

    // 🍉js 6. detail - modal
    //🦄.textContent; / .closest
    if (e.target.classList.contains('detail')) {

        activeModal(newNote);
        modalDetailContainer.classList.add('modal_show');
        }  
    }); 
}

// 🐞when click each btn,  modal show formal modal  content

// 🍉js 6
function activeModal(a) {    
    document.querySelector('.modal_title').innerHTML= `${a.title}`;
    document.querySelector('.modal_content').innerHTML = `${a.body}`;
 }


// 🍀js10
modalDelete.addEventListener('click',()=>{
    modalDetailContainer.classList.remove('modal_show');
    modalTitle.innerHTML ="";
    modalContent.innerHTML ="";
});

/* 
🍄알고리즘)

2. modal div 만들어둠

4. js로 css, html textcontent 넣으면 화면에 띄워짐  */



//🍀12 reload

clearAllBtn.addEventListener('click',run_clearall);
function run_clearall() {
   window.location.reload();
}


