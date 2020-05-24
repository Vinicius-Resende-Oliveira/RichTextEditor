const editorWindow = getIFrameDocument("editorWindow");

function load(){
	//carrega o Iframe desejado com o designMode On
	// editorWindow.designMode = "On";
	var editor = document.getElementById('editorWindow');

	editorDoc = editor.contentWindow.document;
	editorDoc1 = getElementById("editorWindow");
	var editorBody = editorDoc.body;

	if('spellcheck' in editorBody){//firefox
		editorBody.spellcheck = false;
	}
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
