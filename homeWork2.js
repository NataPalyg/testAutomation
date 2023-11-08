document.querySelectorAll('img')

document.querySelectorAll('a > img')

window.document.querySelectorAll('button')

document.querySelectorAll('input')

document.querySelector('a[href="#/places"]')

--------- Medium -----------

const imgs = Array.prototype.slice.call(document.querySelectorAll('img')).filter(i => i.height > 300);
imgs.forEach(el => console.log(el));
imgs.length;


const all_el = Array.prototype.slice.call(document.querySelectorAll('*'));
new Set(all_el.map(el => window.getComputedStyle(el ,null).getPropertyValue('color')));

const all_btn = document.querySelectorAll('button')
all_btn.length;

const all_input = Array.prototype.slice.call(document.querySelectorAll('input'));
all_input.map(el => el.type);

const all_soc = Array.prototype.slice.call(document.querySelectorAll('.footer_social-wrp > a > img'));
all_soc.map(el => el.alt + ": " + el.parentElement.href)

--------------- Hard ---------

['Current Day:',document.querySelector('button.calendar-grid-day.current-day.ng-star-inserted').innerText, document.querySelector('button.monthAndYear').innerText].join(' ')

var img = document.querySelector('img.arrow-next');
img ? window.open(img.src, '_blank') : "No next image"

var img = document.querySelector('img.arrow-previous');
img ? window.open(img.src, '_blank') : "No previous image"

Array.prototype.slice.call(document.querySelectorAll('button.days-name')).map(e => e.innerText)
