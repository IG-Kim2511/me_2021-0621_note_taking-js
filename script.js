'use strict';

//🍀
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


//🍀

/* 🍄Algorithm) 
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



/*🍀 🦄js 1 DOMContentLoaded
load – DOM 트리를 만드는 게 완성+ 이미지등등 모두 불러오는 것이 끝났을 때 발생
DOMContentLoaded – 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생
unload / beforeunload  – 사용자가 페이지를 떠날 때 발생
 */

//🦄js 1-2 .focus() : open했을때 input에 커서가 깜빡이면서 이미 타이핑할 준비가 되어있음

document.addEventListener("DOMContentLoaded", ()=>{
    titleInput.focus();
});

//🍀 2. title, note - create
submitBtn.addEventListener('click',run_first);


// length check , noteAlert
function run_first(e) {
    e.preventDefault();

    noteAlert.innerHTML='';

    /*🦄 way 2 :  if (titleInput.value && noteInput.value)  : value가 존재해서 true */
    if(titleInput.value.length > 0 && noteInput.value.length > 0 ){
        run();
    }else{
        noteAlert.innerHTML='fill the title or note please';
    }
}


// run 
function run(e){  
    titleInput.focus();

    // 🦄js 0
    let newNote = new Note(titleInput.value,noteInput.value);
    console.log(newNote)
       
    addNoteToList(newNote);     ////🍉js 2-2.
 
    titleInput.value="" ;
    noteInput.value="" ;       
}


/* 🍀 🦄js 0 class , 🍄알고리즘, class이용해서 밖으로 데이터 빼서,  object생성
🦄 Math.floor(Math.random()*1000);
...🌊 class object..새로 대체안되고, id값 부여해서 새로 추가되게 하기 */
class Note {
    constructor(p_a,p_b){
        this.title = p_a;
        this.body = p_b;
        this.id = Math.floor(Math.random()*1000);
        console.log(this.id);
    }
}


//🍉js 2-2. note - create, innerHTML
function addNoteToList(a_newNote) {
    
    let note = document.createElement('div');
    note.classList.add('note_new_container');    
    noteNew.append(note);   

    //🦄.substring();
    note.innerHTML=`    
        <span hidden >${a_newNote.id}</span>
        <h2 class="note_title">${a_newNote.title.substring(0,20)}</h2> 
        <div class="note_content">${a_newNote.body.substring(0,30)}</div>
        <button class="myButton2 detail">view detail</button>
        <button class="myButton2 delete">delete</button>    
    `;    

    //🍀note_new : event bubbling, find e.target button

    console.log(a_newNote);

    noteNew.addEventListener('click',(e)=>{

    // 🍉js 8. click delete btn which is created- delete parent node
    /*  🍄알고리즘)
    2. modal div 만들어둠
    4. js로 innerHTML, css - modal_show 넣으면 화면에 띄워짐  */

    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();     
        modalDetailContainer.classList.remove('modal_show'); 
    }   

    // 🍉js 6. detail - modal
    //🦄.textContent; / .closest
    if (e.target.classList.contains('detail')) {

        activeModal(a_newNote);
        modalDetailContainer.classList.add('modal_show');
        }  
    }); 
}

/*  .........🌊
30.  click detail, show modal above the e.target detail btn
(20. 🐞when click each btn,  modal show formal modal  content)
(make different class object for each content or button which I clicked)
40. click detail btn, delete data of formal detail btn
*/


// 🍉js 6. detail - modal create
function activeModal(a_newNote) {    
    document.querySelector('.modal_title').innerHTML= `${a_newNote.title}`;
    document.querySelector('.modal_content').innerHTML = `${a_newNote.body}`;
 }


// 🍀js 10
modalDelete.addEventListener('click',()=>{
    modalDetailContainer.classList.remove('modal_show');
    modalTitle.innerHTML ="";
    modalContent.innerHTML ="";
});


//🍀12 reload

clearAllBtn.addEventListener('click',run_clearall);
function run_clearall() {
   window.location.reload();
}

// 



