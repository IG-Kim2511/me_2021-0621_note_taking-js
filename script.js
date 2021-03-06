'use strict';

//๐
const titleInput = document.querySelector('.title_input');
const noteInput = document.querySelector('.note_input');
const noteAlert = document.querySelector('.note_alert');

const submitBtn = document.querySelector('.submit');
const clearAllBtn = document.querySelector('.clear_all');

const noteNew = document.querySelector('#note_new');
const modalDetailNew = document.querySelector('#modal_detail_new');

const modalDetailContainer = document.querySelector('.modal_detail_container');
const modalTitle = document.querySelector('.modal_title');
const modalContent = document.querySelector('.modal_content');
const modalDelete = document.querySelector('.modal_delete');


//๐

/* ๐Algorithm) 
0. class , 
1. DOMContentLoaded, focus
2. submit- title,
2-2. note - create
3. save local storage : so that I can use the data for detail div
4. click btn in created note  - detail, delete
6. click detail btn which is created- show whole note
8. click delete btn which is created- delete parent node
10. create delete btn in detail modal and hide the modal
12 clear all button
*/



/*๐ ๐ฆjs 1 DOMContentLoaded
load โ DOM ํธ๋ฆฌ๋ฅผ ๋ง๋๋ ๊ฒ ์์ฑ+ ์ด๋ฏธ์ง๋ฑ๋ฑ ๋ชจ๋ ๋ถ๋ฌ์ค๋ ๊ฒ์ด ๋๋ฌ์ ๋ ๋ฐ์
DOMContentLoaded โ ๋ธ๋ผ์ฐ์ ๊ฐ HTML์ ์ ๋ถ ์ฝ๊ณ  DOM ํธ๋ฆฌ๋ฅผ ์์ฑํ๋ ์ฆ์ ๋ฐ์
unload / beforeunload  โ ์ฌ์ฉ์๊ฐ ํ์ด์ง๋ฅผ ๋ ๋  ๋ ๋ฐ์
 */

//๐ฆjs 1-2 .focus() : openํ์๋ input์ ์ปค์๊ฐ ๊น๋นก์ด๋ฉด์ ์ด๋ฏธ ํ์ดํํ  ์ค๋น๊ฐ ๋์ด์์

document.addEventListener("DOMContentLoaded", ()=>{
    titleInput.focus();
});

//๐ 2. title, note - create
submitBtn.addEventListener('click',run_first);


// length check , noteAlert
function run_first(e) {
    e.preventDefault();

    noteAlert.innerHTML='';

    /*๐ฆ way 2 :  if (titleInput.value && noteInput.value)  : value๊ฐ ์กด์ฌํด์ true */
    if(titleInput.value.length > 0 && noteInput.value.length > 0 ){
        run();
    }else{
        noteAlert.innerHTML='fill the title or note please';
    }
}


// run 
function run(e){  
    titleInput.focus();

    // ๐ฆjs 0
    let newNote = new Note(titleInput.value,noteInput.value);
    console.log(newNote)
       
    addNoteToList(newNote);     ////๐js 2-2.
 
    titleInput.value="" ;
    noteInput.value="" ;       
}


/* ๐ ๐ฆjs 0 class , ๐์๊ณ ๋ฆฌ์ฆ, class์ด์ฉํด์ ๋ฐ์ผ๋ก ๋ฐ์ดํฐ ๋นผ์,  object์์ฑ
๐ฆ Math.floor(Math.random()*1000);
...๐ class object..์๋ก ๋์ฒด์๋๊ณ , id๊ฐ ๋ถ์ฌํด์ ์๋ก ์ถ๊ฐ๋๊ฒ ํ๊ธฐ */
class Note {
    constructor(p_a,p_b){
        this.title = p_a;
        this.body = p_b;
        this.id = Math.floor(Math.random()*1000);
        console.log(this.id);
    }
}


//๐js 2-2. note - create, innerHTML
function addNoteToList(a_newNote) {
    
    let note = document.createElement('div');
    note.classList.add('note_new_container');    
    noteNew.append(note);   

    //๐ฆ.substring();
    note.innerHTML=`    
        <span hidden >${a_newNote.id}</span>
        <h2 class="note_title">${a_newNote.title.substring(0,20)}</h2> 
        <div class="note_content">${a_newNote.body.substring(0,30)}</div>
        <button class="myButton2 detail">view detail</button>
        <button class="myButton2 delete">delete</button>    
    `;    

    //๐note_new : event bubbling, find e.target button

    console.log(a_newNote);

    noteNew.addEventListener('click',(e)=>{

    // ๐js 8. click delete btn which is created- delete parent node
    /*  ๐์๊ณ ๋ฆฌ์ฆ)
    2. modal div ๋ง๋ค์ด๋ 
    4. js๋ก innerHTML, css - modal_show ๋ฃ์ผ๋ฉด ํ๋ฉด์ ๋์์ง  */

    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();     
        modalDetailContainer.classList.remove('modal_show'); 
    }   

    // ๐js 6. detail - modal
    //๐ฆ.textContent; / .closest
    if (e.target.classList.contains('detail')) {

        activeModal(a_newNote);
        modalDetailContainer.classList.add('modal_show');
        }  
    }); 
}

/*  .........๐
30.  click detail, show modal above the e.target detail btn
(20. ๐when click each btn,  modal show formal modal  content)
(make different class object for each content or button which I clicked)
40. click detail btn, delete data of formal detail btn
*/


// ๐js 6. detail - modal create
function activeModal(a_newNote) {    
    document.querySelector('.modal_title').innerHTML= `${a_newNote.title}`;
    document.querySelector('.modal_content').innerHTML = `${a_newNote.body}`;
 }


// ๐js 10
modalDelete.addEventListener('click',()=>{
    modalDetailContainer.classList.remove('modal_show');
    modalTitle.innerHTML ="";
    modalContent.innerHTML ="";
});


//๐12 reload

clearAllBtn.addEventListener('click',run_clearall);
function run_clearall() {
   window.location.reload();
}

// 



