var pageid="about";

var ul=document.getElementById("translaters");
for (var i in availableLangs){
  var li=document.createElement("li");
  var lang=availableLangs[i];
  li. innerHTML+=lang+": ";
  if(typeof(translaters[lang])!=="undefined"){
    if(typeof(translaters[lang].name)!=="undefined"){
      li. innerHTML+=translaters[lang].name;
    }else{
      li. innerHTML+="Unknown ";
    }
    if(typeof(translaters[lang].website)!=="undefined"){
      for (var i in translaters[lang].website){
        li. innerHTML+=" [";
        li.innerHTML+="<a href='"+translaters[lang].website[i].link+"'>"+translaters[lang].website[i].type+"</a>";
        li. innerHTML+="]";
      }
    }
  }else{
    li. innerHTML+="Unknown";
  }
  ul.appendChild(li);
}
if(ul.innerText===""){
  document.getElementById("translateauthor").innerText="";
}
beginChange();
