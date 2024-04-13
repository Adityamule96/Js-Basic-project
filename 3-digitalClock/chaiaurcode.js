const clock= document.getElementById('clock');
setTimeout(function(){
  let date=new Date();
  //clock.innerHTML=date.toLocaleDateString();
  //clock.innerHTML=date.toISOString();
  clock.innerHTML=date.toLocaleTimeString();
 },2000)
