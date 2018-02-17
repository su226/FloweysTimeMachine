var defaultLang="en_US"
var availableLangs=[]
var translaters={}
var translates={};
var translatesHelp={};
var translatesAbout={};
var newItems = [];
var newCellOpts = {};
var newRooms = {};
var newFloweyStates = {};
var newTorielPrefer={};
var newTorielStates = {};
var newComedianStates = {};
var newDoggoStates = {};
var newDogamyDogaressaStates = {};
var newGreaterDogStates = {};
var newPapyrusStates = {};
var newPlotValues = {};
var newTrainingDummyStates = {};
var newShyrenStates = {};
var newMadDummyStates = {};
var newUndyneStates1 = {};
var newUndyneStates2 = {};
var newBroGuardsStates = {};
var newMettatonStates = {};
var newMuffetStates = {};
var newIniErrors = {};
var newAlertText = {};

function changeLanguage(){
  for(;;){
    var lang=window.prompt("Enter new language code(such as 'zh_CN')\nFor list please enter 'list'");
    if (lang===null){
      return;
    }else if(lang==="list"){
      var langs=availableLangs.toString();
      if(langs!==""){
        langs+=","
      }
      window.alert("Available languages:\n"+langs+defaultLang);
      continue;
    }else if(lang===defaultLang){
      localStorage.setItem("language","");
      window.alert("Language set to "+defaultLang+"\nRefresh to use new language");
    }else{
      for(var i in availableLangs){
        if(availableLangs[i]===lang){
          localStorage.setItem("language",lang);
          window.alert("Language set to "+lang+"\nRefresh to use new language");
          return;
        }
      }
      window.alert("Language is NOT available!");
      continue;
    }
    return;
  }
}

function beginChange(callback){
  var lang=localStorage.getItem("language");
  if(lang===null){
    localStorage.setItem("language","");
    lang="";
  }
  if(lang!==""){
    var langAvailable=false;
    for(var i in availableLangs){
      if(availableLangs[i]===lang){
        localStorage.setItem("language",lang);
        langAvailable=true;
        break;
      }
    }
    if(!langAvailable){
      localStorage.setItem("language","");
      lang="";
      window.alert("Language "+lang+" is NOT available! Changed to "+defaultLang+"\nPlease Refresh\n");
      console.warn("Language",lang,"is NOT available! Changed to",defaultLang);
      console.info("Please Refresh");
    }
    console.info("Using language",lang);
    var langloader=document.getElementById("langloader");
    langloader.src="langs/"+lang+".js";
    langloader.addEventListener("load",doChange);
  }else{
    console.info("Using default language",defaultLang);
    doChange();
  }
  function doChange(){
    if(lang!==""){
      if(typeof(main)!=="undefined"){
        doHTMLchange(translates);
        doMainObjectChange();
      }else if(typeof(help)!=="undefined"){
        doHTMLchange(translatesHelp);
      }else if(typeof(about)!=="undefined"){
        doHTMLchange(translatesAbout);
      }else{
        window.alert("Invaild Page");
      }
    }
    var langChanger=document.getElementById("currentlang")
    langChanger.innerText=lang;
    if(langChanger.innerText===""){
      langChanger.innerText=defaultLang;
    }
    langChanger.title="Change Language";
    langChanger.addEventListener("click",changeLanguage);
    if(typeof(callback)==="function"){
      callback();
    }
  }
}

function changeHTML(node,text,itemname) {
  if(text!=="" && text!==null && text!==undefined){
    if(node.localName==="select"){
      //Can't change text for <select>s,use array or object in lang file instead
      console.warn("Can't change text for",node, ", reason: Can't change text for <select>s,use array or object in lang file instead");
      return;
    }else if(node.localName==="input" && node.type!=="button"){
      //Can't change text for non-button <input>s
      console.warn("Can't change text for",node,", reason: Can't change text for non-button <input>s");
      return;
    }else if(node.localName==="input" && node.type==="button"){
      node.value=text;
    }else if(node.localName==="img"){
      node.alt=text;
    }else if(node.getAttribute("data-message")!==null){
      node.title=text;
    }else{
      node.innerText=text;
    }
  }else{
    console.warn("Not accepted value",text,"in",itemname);
  }
}
function doHTMLchange(allTranslate){
  for (var translate in allTranslate) {
    var text=allTranslate[translate];
    var data=document.querySelectorAll("[data-langable='"+translate+"']");
    var id=document.querySelector("#"+translate);
    var HTMLClass=document.querySelectorAll("."+translate);
    var changed=0;
    if(data.length>0){
      changed+=data.length;
      for (var i in data) {
        if (data.hasOwnProperty(i)){
          changeHTML(data[i],text,translate);
        }
      }
    }
    if(id!==null && id.getAttribute("data-langless")===null){
      changed+=1
      changeHTML(id,text,translate);
    }
    if(HTMLClass.length>0){
      for (var i in HTMLClass) {
        if(HTMLClass[i].getAttribute("data-langless")===null){
          changed+=1;
          changeHTML(HTMLClass[i],text,translate);
        }
      }
    }
    if(changed===0){
      console.warn("Stray translate item:"+translate);
    }
  }
}

function changeObject(originvalue,newvalue,name){
  var newobject=originvalue;
  for (var value in newvalue) {
    var nvalue=newvalue[value];
    var ovalue=originvalue[value];
    if (nvalue!==undefined && nvalue!==null && nvalue!=="") {
      if(ovalue!==undefined && ovalue!==null && ovalue!==""){
        newobject[value]=nvalue;
      }else{
        console.warn("Stray translate item",name+"["+value+"]");
      }
    }else{
      console.warn("Not accepted value",nvalue,"in",name+"["+value+"]");
    }
  }
  return newobject;
}
function doMainObjectChange(){
  items=changeObject(items,newItems,"newItems");
  cellOpts=changeObject(cellOpts,newCellOpts,"newCellOpts");
  rooms=changeObject(rooms,newRooms,"newRooms");
  floweyStates=changeObject(floweyStates,newFloweyStates,"newFloweyStates");
  torielPrefer=changeObject(torielPrefer,newTorielPrefer,"newTorielPrefer");
  torielStates=changeObject(torielStates,newTorielStates,"newTorielStates");
  comedianStates=changeObject(comedianStates,newComedianStates,"newComedianStates");
  doggoStates=changeObject(doggoStates,newDoggoStates,"newDoggoStates");
  dogamyDogaressaStates=changeObject(dogamyDogaressaStates,newDogamyDogaressaStates,"newDogamyDogaressaStates");
  greaterDogStates=changeObject(greaterDogStates,newGreaterDogStates,"newGreaterDogStates");
  papyrusStates=changeObject(papyrusStates,newPapyrusStates,"newPapyrusStates");
  plotValues=changeObject(plotValues,newPlotValues,"newPlotValues");
  trainingDummyStates=changeObject(trainingDummyStates,newTrainingDummyStates,"newTrainingDummyStates");
  shyrenStates=changeObject(shyrenStates,newShyrenStates,"newShyrenStates");
  madDummyStates=changeObject(madDummyStates,newMadDummyStates,"newMadDummyStates");
  undyneStates1=changeObject(undyneStates1,newUndyneStates1,"newUndyneStates1");
  undyneStates2=changeObject(undyneStates2,newUndyneStates2,"newUndyneStates2");
  broGuardsStates=changeObject(broGuardsStates,newBroGuardsStates,"newBroGuardsStates");
  mettatonStates=changeObject(mettatonStates,newMettatonStates,"newMettatonStates");
  muffetStates=changeObject(muffetStates,newMuffetStates,"newMuffetStates");
  iniErrors=changeObject(iniErrors,newIniErrors,"newIniErrors");
  alertText=changeObject(alertText,newAlertText,"newAlertText");
}
