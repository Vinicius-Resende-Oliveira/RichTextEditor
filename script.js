const editorWindow = getIFrameDocument("editorWindow");

function load(){
	//carrega o Iframe desejado com o designMode On
	// editorWindow.designMode = "On";
	var editor = document.getElementById('editorWindow');

	editorDoc = editor.contentWindow.document;
	editorDoc1 = document.getElementById("editorWindow");
	var editorBody = editorDoc.body;

	if('spellcheck' in editorBody){//firefox
		editorBody.spellcheck = false;
	}

	if('contentEditable' in editorBody){
		//alow contentEditable
		editorBody.contentEditable = true;
		editorDoc1.dedsignMode = "on";
	} else {
		//Caso o contentEditable não for compativel com o navegador
		if('designMode' in editorDoc1){
			editorDoc1.designMode = "on";
		}
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
	document.getElementById("editorWindow").contentDocument.focus;
}
