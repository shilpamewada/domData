let string=" ";
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListner('click',(e)=>{
console.log(e.target)
    })
})
