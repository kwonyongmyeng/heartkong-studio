const header=document.querySelector('.site-header');const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('#main-nav');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>24));
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);document.body.style.overflow=open?'':'hidden'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');document.body.style.overflow=''}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.querySelector('.lightbox');document.querySelector('.sticker-preview').addEventListener('click',()=>lightbox.showModal());lightbox.querySelector('button').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
