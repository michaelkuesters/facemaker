		function reset()
		{
			document.getElementById('Master').innerHTML="";
			document.getElementById('Master').appendChild(create_divtag({"name":"OuterDiv","id":1,"content":"","style":"ServiceBox"}));
			document.getElementById('OuterDiv'+1).appendChild(create_divtag({"name":"InnerDiv","id":1 ,"content":"","style":"serviceBoxSub"}));
			document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":1 ,"name":"Face","src":"images/shim.png", "style":"Face_Pos"}));
			document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":1 ,"name":"Eyes","src":"images/shim.png", "style":"Eyes_Pos"}));	  
			document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":1 ,"name":"Mouth","src":"images/shim.png", "style":"Mouth_Pos"}));	  
			document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":1 ,"name":"Brows","src":"images/shim.png", "style":"Brows_Pos"}));	  					
			document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":1 ,"name":"Beard","src":"images/shim.png", "style":"Beard_Pos"}));	  					
			document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":1 ,"name":"Hair","src":"images/shim.png", "style":"Hair_Pos"}));	  
			document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":1 ,"name":"Gadget","src":"images/shim.png", "style":"Gadget_Pos"}));	  					
			document.getElementById('InnerDiv1').appendChild(create_imagetag({"id":1 ,"name":"Headwear","src":"images/shim.png", "style":"Headwear_Pos"}));	  					
		}

		function create_imagetag(attribs)
		{
		var X=document.createElement("img"); 	
			X.id=""+attribs.name+attribs.id;
			X.className =attribs.style;
			X.src=attribs.src;
			return X;
		}

		function create_divtag(attribs)
		{
		var X=document.createElement("div"); 
			X.id=""+attribs.name+attribs.id;
			X.className=attribs.style;
			X.innerHTML=attribs.content;
			return X;
		}
			