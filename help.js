var pageid="help";

var pf=navigator.platform;
var ua=navigator.userAgent;
var save=document.getElementById("save");
if(pf=="Win32" || pf == "Windows"){
  save.innerHTML="C:/users/<span langkey='username'>USERNAME</span>/Local Settings/Application Data/UNDERTALE";
}else if(pf=="Mac68K" || pf=="MacPPC" || pf=="MacInter" || pf=="Macintosh"){
  save.innerHTML="Find it by yourself";
}else if(ua.indexOf("Android")>-1){
  save.innerHTML="/data/user/0/com.mrpowergamerbr.UndertaleWrapper/files<span langkey='roottip'>(ROOT permission is required)</span>";
}else if(pf.indexOf("Linux")>-1){
  save.innerText="~/.config/UNDERTALE";
}else{
  save.innerText="<span langkey='systemtip'>UNDERTALE supports only Windows, Mac, Linux and Android.</span>";
}
beginChange();
