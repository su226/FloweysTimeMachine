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
function doMiscChange(){
  var message=document.querySelectorAll("[data-message]");
  for (var i in message) {
    if (message.hasOwnProperty(i)) {
      message[i].addEventListener("click",function(){
        window.alert(this.getAttribute("title"));
      })
    }
  }
  addClickSound(document.querySelectorAll("[data-message]"));
  addClickSound(document.getElementsByTagName("a"));
  addClickSound(document.getElementsByTagName("button"));
  addClickSound(document.getElementsByTagName("input"));
  addClickSound(document.getElementsByTagName("select"));
  if(typeof(main)!=="undefined"){
    addClickSound([document.getElementById("floweyimg")]);
  }
}
document.addEventListener("DOMContentLoaded", doMiscChange);
