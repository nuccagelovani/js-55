let navbarLinks = document.getElementById('navigation');

let toggleButton = document.getElementById('divider');

toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('toggle');
})

// input

let button = document.querySelector('.button');

let input = document.querySelector('.input-form');

let ul = document.querySelector('.ul-list');


button.addEventListener('click', function(){
    let value = input.value;
    let li = document.createElement('li');

    let btnDelete = document.createElement('button');
    btnDelete.textContent = '🗙';
    btnDelete.addEventListener('click', function(){
        li.remove();
    })
    li.textContent = value;
    li.appendChild(btnDelete)
    ul.appendChild(li);
    input.value = '';
})

document.querySelector('.clearlist').addEventListener('click', function(){
    ul.innerHTML = '';
})