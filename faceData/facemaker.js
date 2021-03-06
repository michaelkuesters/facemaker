   var i=0;
   range=3;

   var limits=
   {
   		max:
   		{
   		Haircolor:4,
   		Beardcolor:4,
         Hair:9,
   		Beard:12,
         Headwear:23,
   		Gadget:2,
   		Brows:3,
   		Eyes:4,
   		Mouth:5,
   		Face:8
   		},
   		min:
   		{
   		Haircolor:0,
   		Beardcolor:0,
   		Hair:0,
         Beard:0,
         Headwear:0,
   		Gadget:0,
   		Brows:1,
   		Eyes:1,
   		Mouth:1,
   		Face:1
   		},

    }

   var Colorlist=
   {
   	Beard:new Array("black","brown","red","gray","white"),
   	Hair:new Array("black","brown","red","redbrown","white","yellow"),
	}

	var face={};
 	function reset_face()
  	{
   		for ( prop in limits.min ) {
  // make sure the object has this value, and not its prototype
            if ( limits.min.hasOwnProperty( prop ) ) {
               face[prop] = limits.min[ prop ];
         }
      }
  	}

   reset_face();

   function faceitem_next(itemType)
   {
   	face[itemType] = face[itemType]+1;
   	if (face[itemType] > limits.max[itemType]) face[itemType]=limits.min[itemType];
   	var element_text=face[itemType]
   	if (itemType =="Haircolor")
   		{element_text=Colorlist.Hair[face.Haircolor]};
   	if (itemType =="Beardcolor")
   		{element_text=Colorlist.Beard[face.Beardcolor]};

   	document.getElementById("lbl_"+itemType).innerHTML=element_text;

   	console.debug(face);
   }

   function update_faceitem(itemType)
   {
      faceitem_next(itemType);
      render_face();
   }

   function prepare_face() {

   var basicShim="images/shim.png";
	var imageObject =
      {
         Face:basicShim,
         Hair:basicShim,
         Gadget:basicShim,
         Headwear:basicShim,
         Beard:basicShim
      };

	imageObject.Face = 'images/basic-face/basic-face-' + face.Face + '.png';

   if (face.Headwear > 0)
      {
         imageObject.Headwear = "images/headwear/headwear-" + face.Headwear+ ".png";
      }

	if (face.Hair > 0)
		{
			imageObject.Hair = "images/hairstyle/hair-" + Colorlist.Hair[face.Haircolor] +"-"+ face.Hair+ ".png";
		}

	if (face.Gadget > 0)
		{
			imageObject.Gadget = 'images/gadget/gadget-' + face.Gadget+ '.png';
		}

	if (face.Beard > 0)
		{
			imageObject.Beard = "images/beards/beard-" + Colorlist.Beard[face.Beardcolor] +"-"+ face.Beard+ ".png";
		}

	imageObject.Eyes = "images/eyes/eyes-" + face.Eyes+ ".png";

	imageObject.Mouth ="images/mouth/mouth-" + face.Mouth+ ".png";
		
   return imageObject;
	
   }


   function read_jsonface()
   {
      face=JSON.parse(document.getElementById("box_json").value);
      render_face();
   }

   function render_face()
   {
      imageObject=prepare_face();
      display_face(imageObject);
      document.getElementById("box_json").value=JSON.stringify(face);
   }

   function display_face(imageObject)
   {

   document.getElementById("Face1").src = imageObject.Face;
   document.getElementById("Eyes1").src = "images/eyes/eyes-" + face.Eyes+ ".png";
   document.getElementById("Brows1").src = "images/brows/brows-" + face.Brows+ ".png";
   document.getElementById("Mouth1").src = "images/mouth/mouth-" + face.Mouth+ ".png";
   document.getElementById("Gadget1").src = imageObject.Gadget;
   document.getElementById("Hair1").src = imageObject.Hair;
   document.getElementById("Beard1").src = imageObject.Beard;
   document.getElementById("Headwear1").src = imageObject.Headwear;

   }

/*     function nextPage() {
      var printSize=range*range;
      document.getElementById("pageid").innerHTML= "Current Page: " +(1+ Math.round(i / printSize, 0));
      var Counter=0;
      for (Counter = 0; Counter < printSize; Counter++) {   
      	writeStuff({"Box_ID":Counter,"stuff":myTagVals[i]}); 	
        }
      }
*/