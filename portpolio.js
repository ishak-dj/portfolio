if(window.screen.width <= 600){
  document.getElementById('por').remove();
}
//============================SCROLL======================================================================= //	
window.onscroll = function(){
  if(scrollY >= 400){
    document.getElementById('arrow').style.display = 'block';
    document.getElementById('nav-bar').style.top = '-10%';
  }else{
    document.getElementById('arrow').style.display = 'none';
    document.getElementById('nav-bar').style.top = '0';
  }
  if(scrollY >= 50){
    document.getElementById('nav-bar').style.top = '-10%';
  }else{
    document.getElementById('nav-bar').style.top = '0';
  }
}
document.getElementById('arrow').onclick = function(){
  scroll(0,0);
}
/*===========================reload===================================================================*/
let intro = document.getElementById('intro');
let me = document.getElementById('me');
let work = document.getElementById('working-exp');

intro.style.left = '-500px';
me.style.right = '-500px';
work.style.top = '-500px';

window.onload = ()=>{
  intro.style.left = '0';
  me.style.right = '0';
  work.style.top = '0';
  if(window.screen.width <= 600){
    work.style.top = '-200px';
  }
}