function addClickSound(list){
  for(var i=0;i<list.length;i++){
    list[i].addEventListener("click",function(){
      if(!document.getElementById("mute").checked) {
        var audio = new Audio("res/menuselect.ogg");
        audio.play()
      }
    })
  }
}
function doAddClickSound(){
  addClickSound(document.getElementsByTagName("a"));
  addClickSound(document.getElementsByTagName("button"));
  addClickSound(document.getElementsByTagName("input"));
  addClickSound(document.getElementsByTagName("select"));
  if(typeof(main)!=="unedfined"){
    addClickSound([document.getElementById("floweyimg")]);
  }
}
document.addEventListener("DOMContentLoaded", doAddClickSound);
