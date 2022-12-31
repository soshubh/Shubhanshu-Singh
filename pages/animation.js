
  let path=document.querySelector('path');
  let pathlength= path.getTotalLength();
  path.style.strokeDasharray=pathlength+' '+pathlength;
  path.style.strokeDashoffset=pathlength;

  window.addEventListener('scroll',()=>{
    var scrollpercent=(document.body.scrollTop+document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);
    var draw=pathlength*scrollpercent;
    path.style.strokeDashoffset=pathlength-draw;
  })