var defaultLang="en_US"
var availableLangs=[
  "zh_CN"
]
var translaters={
  zh_CN:{name:"su226",website:[
    {type:"GitHub",link:"https://github.com/su226"},
    {type:"Website",link:"https://su226.github.io"}
  ]}
}

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
    var loader=document.getElementById("lang");
    loader.src="langs/"+lang+".js";
    loader.addEventListener("load",doChange);
  }else{
    console.info("Using default language",defaultLang);
    doChange();
  }
  function doChange(){
    if(lang!=="" && typeof(pageid)!=="undefined"){
      if(pageid in translates)
        ModifyHTML(translates[pageid]);
      if(pageid==="main")
        ModifyObject();
    }
    if(typeof(callback)==="function"){
      callback();
    }
  }
}

function ModifyHTML(allTranslate){
  function _modify(node,text,itemname) {
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
  for (var translate in allTranslate) {
    var text=allTranslate[translate];
    var data=document.querySelectorAll("[langkey='"+translate+"']");
    var id=document.querySelector("#"+translate);
    var HTMLClass=document.querySelectorAll("."+translate);
    var changed=0;
    if(data.length>0){
      changed+=data.length;
      for (var i in data) {
        if (data.hasOwnProperty(i)){
          _modify(data[i],text,translate);
        }
      }
    }
    if(id!==null && id.getAttribute("nolang")===null){
      changed+=1
      _modify(id,text,translate);
    }
    if(HTMLClass.length>0){
      for (var i in HTMLClass) {
        if(HTMLClass[i].getAttribute("")===null){
          changed+=1;
          _modify(HTMLClass[i],text,translate);
        }
      }
    }
    if(changed===0){
      console.warn("Stray translate item:"+translate);
    }
  }
}

function ModifyObject(){
  function _modify(originvalue,newvalue,name){
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
  items=_modify(items,newItems,"newItems");
  cellOpts=_modify(cellOpts,newCellOpts,"newCellOpts");
  rooms=_modify(rooms,newRooms,"newRooms");
  floweyStates=_modify(floweyStates,newFloweyStates,"newFloweyStates");
  torielPrefer=_modify(torielPrefer,newTorielPrefer,"newTorielPrefer");
  torielStates=_modify(torielStates,newTorielStates,"newTorielStates");
  comedianStates=_modify(comedianStates,newComedianStates,"newComedianStates");
  doggoStates=_modify(doggoStates,newDoggoStates,"newDoggoStates");
  dogamyDogaressaStates=_modify(dogamyDogaressaStates,newDogamyDogaressaStates,"newDogamyDogaressaStates");
  greaterDogStates=_modify(greaterDogStates,newGreaterDogStates,"newGreaterDogStates");
  papyrusStates=_modify(papyrusStates,newPapyrusStates,"newPapyrusStates");
  plotValues=_modify(plotValues,newPlotValues,"newPlotValues");
  trainingDummyStates=_modify(trainingDummyStates,newTrainingDummyStates,"newTrainingDummyStates");
  shyrenStates=_modify(shyrenStates,newShyrenStates,"newShyrenStates");
  madDummyStates=_modify(madDummyStates,newMadDummyStates,"newMadDummyStates");
  undyneStates1=_modify(undyneStates1,newUndyneStates1,"newUndyneStates1");
  undyneStates2=_modify(undyneStates2,newUndyneStates2,"newUndyneStates2");
  broGuardsStates=_modify(broGuardsStates,newBroGuardsStates,"newBroGuardsStates");
  mettatonStates=_modify(mettatonStates,newMettatonStates,"newMettatonStates");
  muffetStates=_modify(muffetStates,newMuffetStates,"newMuffetStates");
  iniErrors=_modify(iniErrors,newIniErrors,"newIniErrors");
  alertText=_modify(alertText,newAlertText,"newAlertText");
}
