 //console.dir(document)
//console.log(document.domain)
//console.log(document.url)
//console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello'
//console.log(document.forms)
//console.log(document.links) 
//console.log(document.images)

//get elementbyid


//console.log(document.getElementById('header-title'))

//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle)
//headerTitle.textContent = 'Hello'
//headerTitle.innerText = 'Goodbye'
//console.log(headerTitle.innerText)
//headerTitle.innerHTML = '<h3>Hello</h3>'
//header.style.borderBottom = 'solid 3px #000';

//var items = document.getElementsByClassName('list-group-item')
//console.log(items)
//console.log(items[1])
//items[1].textContent = 'hello 2'
//items[1].style.backgroundColor = 'yellow'

//for(var i = 0; i < items.length; i++){

  //  items[i].style.backgroundColor= 'lightgrey'

//}

//var li = document.getElementsByTagName('li')
//console.log(li)
//console.log(li[1])
//li[1].textContent = 'hello 2'
//li[1].style.backgroundColor = 'yellow'

//for(var i = 0; i < li.length; i++){

//    li[i].style.backgroundColor= 'lightgrey';}


//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px grey'

//var input = document.querySelector('input')

//input.value = 'hello world'

//var submit = document.querySelector('input[type="submit"]')
//submit.value = 'send'

//var item = document.querySelector('.list-group-item')
//item.style.color = 'red'

//var lastitem = document.querySelector('.list-group-item:last-child')

//lastitem.style.color = 'blue'

//var itemList = document.querySelector('#items');
//console.log(itemList.parentNode)

//itemList.parentNode.style.backgroundColor= 'grey'

//console.log(itemList.parentNode.parentNode)


//var itemList = document.querySelector('#items');
//console.log(itemList.parentElement)

//itemList.parentElement.style.backgroundColor= 'grey'

//console.log(itemList.parentElement.parentElement)

//console.log(itemList.childNodes);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow'

//console.log(itemList.firstChild)

//console.log(itemList.lastElementChild.textContent = 'hello 4')

//console.log(itemList.nextSibling);

//console.log(itemList.nextElementSibling);

//console.log(itemList.previousElementSibling)

//var newDiv = document.createElement('div');
//newDiv.className= 'hello';

//newDiv.id = 'hello'
//newDiv.setAttribute('title', 'hello Div')

//var newDivText = document.createTextNode('Hello world')

//newDiv.appendChild(newDivText);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header .h1')
//console.log(newDiv)
//newDiv.style.fontSize= '30px'

//container.insertBefore(newDiv,h1)

//var button = document.getElementById('button').addEventListener
//('click', buttonClick);


//function buttonClick(e){



//document.getElementById('header-title').textContent='AYAN'
//document.querySelector('#main').style.backgroundColor= '#f4f4f4'

//console.log(e.target)
//console.log(e.target.classList)
//var output = document.getElementById('output');
//output.innerHTML='<h3>'+e.target.id+'</h3>'
//console.log(e.clientX)
//console.log(e.clientY)

//console.log(e.altKey)

//}

//var button = document.getElementById('button')
//var box = document.getElementById('box')

//box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]')
var form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent)

function runEvent(e){
console.log('EVENT TYPE: '+e.type)
console.log(e.target.value)
document.getElementById('output').innerHTML ='<h3>'+e.target.value
'</h3>'
//document.body.style.backgroundColor= "rgb("+e.offsetX+","+e.offsetY+",40)"


}