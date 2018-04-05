var help = {};
var pf=navigator.platform;
var ua=navigator.userAgent;
var save=document.getElementById("save");
if(pf=="Win32" || pf == "Windows"){
  save.innerHTML="C:/users/<span data-langable='username'>USERNAME</span>/Local Settings/Application Data/UNDERTALE";
}else if(pf=="Mac68K" || pf=="MacPPC" || pf=="MacInter" || pf=="Macintosh"){
  save.innerHTML="Unknown";
}else if(ua.indexOf("Android")>-1){
  save.innerHTML="/data/user/0/com.mrpowergamerbr.UndertaleWrapper/files<span data-langable='roottip'>(修改需要ROOT权限)</span>";
}else if(pf.indexOf("Linux")>-1){
  save.innerText="~/.config/UNDERTALE";
}else{
  save.innerText="Undertale目前只支持Windows,Mac,Linux和Android";
}
beginChange();
