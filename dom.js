function changeText(){
    let text=document.getElementById('jstext')
    console.log(typeof("text"));
    text.innerHTML="Text Changed"
    text.style.color="red"
    text.style.backgroundColor="pink"
}
function Submit(){
    document.getElementById("jstext1").innerHTML="dom"
}
 let container=document.getElementById("container")
 container.innerHTML="<h1>hello all</h1>"

 let container1=document.getElementById("container1")
 container1.textContent="<h1>hello all</h1>"

 function addnewpara(){
    let text=document.getElementById('text')
    text.innerHTML="add new para"
 }

 function addnewpara1(){
    let paracontainer= document.getElementById('para');
    let paragraphEle=document.createElement('p')
    paragraphEle.textContent="paragraph 4"
    paracontainer.appendChild(paragraphEle)
    
 }

//getElementId 
 let element= document.querySelectorAll("paraele");
console.log(element)
 for(let i=0; i<=element.length;i++){
     console.log(element[i].style.color="red")
     element[i].classList.add('paragraphstyles')
 }
