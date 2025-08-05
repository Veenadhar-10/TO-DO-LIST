let m=document.querySelector('.ro');
let t = JSON.parse(localStorage.getItem("xx")) || 0;
let p = JSON.parse(localStorage.getItem("to")) || {};
let c=JSON.parse(localStorage.getItem("too"))||{};

  for(let i=0;i<t;++i)
  {
    if(p[i]!=undefined)
    {
      const a=document.createElement('article');
  a.innerHTML= `<section><input type=\"checkbox\" class=\"che\"><p class=\"wrap\">${p[i]}</p></section><span  class=\"inside\"><button class=\"del\">Delete</button><button class=\"read">Read more</button></span>`;
  document.querySelector('.main').appendChild(a);

  if(localStorage.getItem(p[i])=='1')
  {
    a.firstChild.classList.add('com');
    a.querySelector('input').checked=1;
  }
    }
  }
 

m.addEventListener('click',(e)=>{
if(e.target.classList.contains('del')==1){
  for(let i in p)
  {if(p[i]==e.target.parentElement.previousElementSibling.children[1].textContent && p[i]!=null)
    {
      if(e.target.parentElement.previousElementSibling.classList.contains('com')){
      delete p[i];localStorage.setItem("to", JSON.stringify(p));  e.target.parentElement.parentElement.classList.add('van');e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);break;}
      else{
        alert('Please finish you task before you delete it');break;
      }
    }
  
  }
}
if(e.target.type=='checkbox'){e.target.parentElement.classList.toggle('com');
  if(e.target.parentElement.classList.contains('com'))
  {
    localStorage.setItem((e.target.parentElement.children[1].textContent),1);
  }
  else{
    localStorage.setItem((e.target.parentElement.children[1].textContent),0);
  }
 
  e.stopPropagation();}

if (e.target.classList.contains('read')) {
  const p = e.target.parentElement.previousElementSibling.querySelector('p');
  
  if (e.target.textContent === "Read more") {
    e.target.textContent = "Read less";  
  } else {
    e.target.textContent = "Read more";
  }p.classList.toggle("wrap");
    p.classList.toggle("unwrapped");
}
if(e.target.classList.contains("add")){let r=true;
  let a=document.querySelectorAll('section');
  for(let i=0;i<a.length;++i)
  {
    if(e.target.previousElementSibling.value==a[i].children[1].textContent){r=false;e.target.previousElementSibling.value="";alert('TASK ALREADY EXISTS');}
  }
if(r===true){
  if(e.target.previousElementSibling.value==""){alert('please enter a valid task');}else{
  const a=document.createElement('article');
  a.innerHTML= `<section><input type=\"checkbox\" class=\"che\"  id=\"x\"><p class=\"wrap\"  id=\"x\">${e.target.previousElementSibling.value}</p></section><span  class=\"inside\"><button class=\"del\"  id=\"x\">Delete</button><button class=\"read">Read more</button></span>`;


  document.querySelector('.main').appendChild(a);
  p[t++]=`${e.target.previousElementSibling.value}`;
   e.target.previousElementSibling.value=""; 
   localStorage.setItem("to", JSON.stringify(p));
localStorage.setItem("xx", JSON.stringify(t));
}}
}
})

