const editorWindow = getIFrameDocument("editorWindow");

function load(){
	//carrega o Iframe desejacom o designMode On
	editorWindow.designMode = "On";
}


function getIFrameDocument(aID){
	//Se o conteudo do documento exitir, (Mozzila)
	if(document.getElementById(aID).contentDocument){
		return document.getElementById(aID).contentDocument;
	}else{
	//Internet Explorer
		return document.frames[aID].document;		
	}
}

function doRichEditCommand(aName, aArg){
	editorWindow.execCommand(aName, false, aArg);
	document.getElementById("editorWindow").contentDocument.focus();
}
