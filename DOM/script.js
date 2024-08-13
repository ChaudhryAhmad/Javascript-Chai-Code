// console.log(document.querySelectorAll('li'));
// console.log(document.getElementsByClassName('hello'));

// const tempLiList=document.querySelectorAll('li');
// tempLiList[0].style.backgroundColor='green';

// const arr=Array.from(tempLiList);
// console.log(arr);

// const myH1=document.querySelectorAll('h1');
// tempLiList.forEach((l)=>{
//     l.style.color='purple';
// })

// ----------------------------1 HTML------------------------------------------------------------

// ----------------------------2 HTML-----------------------------------------------------------

const parent=document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

// for (let i=0;i<parent.children.length;i++){
//     console.log(parent.children[i].innerHTML);
// }

parent.children[1].style.color='orange';
console.log(parent.firstElementChild);

console.log("Nodes",parent.childNodes);