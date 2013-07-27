//var xmlDoc = new XML();
//xmlDoc.onLoad = isLoaded;

function isLoaded(success) {
  if (!success) {
		return(0);
	}
	
	objArray = new Array();
	var fChildNodes = success.childNodes[0].childNodes;
	
	i = 0;
	while (i < fChildNodes.length) {
		attributes = new Object();
		for (var attr, e=0, attrs=fChildNodes[e].attributes, l=attrs.length; e<l; e++){
			attr = attrs.item(e)
			attributes[ attr.nodeName ] = attr.nodeValue;
		}
		var node_ = fChildNodes[i];
		obj_ = new Object();
		obj_.link = attributes['link'];
		obj_.target = attributes["target-frame"];
		obj_.fontFace = attributes["font-face"];
		obj_.htmlText =  $.trim(node_.textContent).replace('.................','');;
		obj_.higlight_color = attributes["higlight-color"];
		obj_.color = attributes["font-color"];
		objArray.push(obj_);
		i++;
	}
	texts_count = fChildNodes.length;
	
	return objArray;
}
function LoadData() {
	link = "http://www.jamstockex.com/ticker-xml/test.xml?ini=" + Math.random();
	XML(link);
	//_tf_.text = _tf_.text + ("" + length(link__));
}


link = "stock.php";
	
// load xml file
if (window.XMLHttpRequest) {
   xhttp = new XMLHttpRequest();
} else {    // IE 5/6
   xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xhttp.open("GET", link, false);
xhttp.send();
xmlDoc = xhttp.responseXML; 

var objects = isLoaded(xmlDoc);

$(document).ready( function(){
	var stock = $(".stock");
	var count = 0;
	tr = $("<tr>");
	$.each(objects, function(index, value) {
	  if(count > 1 && count < 7)
	  {		
		if(value.htmlText && value.htmlText != '|')
		{
			tr.append('<td>'+value.htmlText+'</td>');
		}
		
		stock.append(tr);
	  }
	  if(count == 0)
	  {
		if(value.htmlText && value.htmlText != '|')
		{
			$(".sumary").append('<div>'+value.htmlText+'</div>');
		}
	  }
	  if(value.htmlText == "|")
	  {
		tr = $("<tr>");
		count++;
	  }
	});
});
