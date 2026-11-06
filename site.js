// On disk, a browser opens folders as listings instead of serving index.html.
if(window.location.protocol==='file:'){
 for(const a of document.querySelectorAll('a[href]')){
  const href=a.getAttribute('href');
  if(!/^\.{1,2}\//.test(href))continue;
  const target=new URL(href,window.location.href);
  if(target.pathname.endsWith('/')){target.pathname+='index.html';a.href=target.href}
 }
}
const menu=document.querySelector('.menu'), nav=document.querySelector('#navigation');
const closeMenu=()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open')};
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
const floating=document.querySelector('.float-contact'), hero=document.querySelector('.hero');
if(floating&&hero){const refresh=()=>{floating.hidden=hero.getBoundingClientRect().bottom>0};window.addEventListener('scroll',refresh,{passive:true});window.addEventListener('resize',refresh);window.addEventListener('pageshow',refresh);refresh()}
const form=document.querySelector('#quote-form');
if(form){
 const requested=new URLSearchParams(window.location.search).get('service');
 if([...form.elements.service.options].some(o=>o.value===requested))form.elements.service.value=requested;
 form.addEventListener('submit',e=>{
   e.preventDefault();
   if(!form.reportValidity())return;
   const number=window.GBP_WHATSAPP;
   if(!/^44\d{10}$/.test(number))return;
   const d=new FormData(form);
   const labels={name:'Name',business:'Business',phone:'Phone',area:'Town / service area',profile:'Existing Google profile',service:'Service requested',notes:'Other details'};
   const message=['Hello, I’d like help with my Google Business Profile.','',...Object.entries(labels).map(([k,l])=>l+': '+(String(d.get(k)||'').trim()||'Not provided'))].join('\n');
   window.location.assign('https://wa.me/'+number+'?text='+encodeURIComponent(message));
 });
}
