// const editorWindow = getIFrameDocument("editorWindow");
//Para pegar o conteudo do frame basta usar editorDoc.Body.innerHTML
function load(){
	//carrega o Iframe desejado para a habilitar a edição
	var editor = document.getElementById('editorWindow');
	editorDoc = editor.contentWindow.document;
	editorDoc1 = editor.contentDocument;
	var editorBody = editorDoc.body;

	if('spellcheck' in editorBody){ //firefox
		editorBody.spellcheck = false;
	}

	if('contentEditable' in editorBody){
		//alow contentEditable
		editorBody.contentEditable = true;
		editorDoc1.designMode = "on";

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
	editorDoc1.execCommand(aName, false, aArg);
	document.getElementById("editorWindow").contentDocument.focus;
}
function printText(){
	console.log(editorDoc1.body.innerHTML);
}