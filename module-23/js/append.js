const placesList = document.getElementById('places-list');
console.log(placesList);
const li = document.createElement('li');
li.innerText = 'pahartoli bon'



// where to add 
const mainContainer = document.getElementById('main-container');
// what to be added 
const section = document.createElement('section')
const h1 = document.createElement('h1');
h1.innerText = 'my food list'
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'biriani'
ul.appendChild(li1);
const li2 = document.createElement('li')
li2.innerText = 'borhani'
ul.appendChild(li2);
const li3 = document.createElement('li')
li3.innerText = 'salad'
ul.appendChild(li3);


section.appendChild(ul)

mainContainer.appendChild(section)

// set innner html directly 
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> my dresses section </h1>
<ul> 
<li> t-shirt </li>
</ul>

`
mainContainer.appendChild(sectionDress);