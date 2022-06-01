const textareaEle=document.getElementById('textarea')
const tags=document.getElementById('tags')
textareaEle.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key==='Enter'){
        setTimeout(()=>{
            textareaEle.value=''
        },10)
        randomSelect()
    } 
})

function randomSelect(){
    const times=30;
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag() 
        highlightTag(randomTag)
        setTimeout(()=>{
         unHighlightTag(randomTag)
        },100)
    },100)
    setTimeout(()=>{
     clearInterval(interval)
     setTimeout(()=>{
         const finalRandomTag=pickRandomTag();
         highlightTag(finalRandomTag)
     },100)
    },100*times)
}

function createTags(input){
   const tagsArr=input.split(',').filter(tag=>tag.trim()!== '').map(tag=>tag.trim())
   tags.innerHTML='';
   tagsArr.forEach(element => {
       const spanEle=document.createElement('span')
       spanEle.classList.add('tag')
       spanEle.innerText=element
       tags.appendChild(spanEle)
   });
}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)];
}

function highlightTag(ele){
  ele.classList.add('highlight')
}

function unHighlightTag(ele){
  ele.classList.remove('highlight')
}
