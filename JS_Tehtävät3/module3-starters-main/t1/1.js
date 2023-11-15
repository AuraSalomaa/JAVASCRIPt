const lista = document.querySelector('#target')
const bullet = '<li>First item</li>\n' +
    '<li>Second item</li>\n' +
    '<li>Third item</li>'

lista.innerHTML= bullet;

document.querySelector('#target').classList.add('my-list')