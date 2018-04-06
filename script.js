//Show attribute value of anchor 
function showAttributes(){
	var anchorElement= document.getElementById("google");
	var divElement= document.getElementsByTagName("div");
	var anchorAttr1 = anchorElement.attributes;
	//var anchorAttr2 = anchorElement.target;
	divElement[0].innerText = "Attributes value of anchor are " + anchorAttr1[0].value + "," +  anchorAttr1[1].value + "," + anchorAttr1[2].value;
}
//REmove attribute value of anchor 
function removeAttributes(){
	var divElement= document.getElementsByTagName("div");
	divElement[0].innerText= "";
}