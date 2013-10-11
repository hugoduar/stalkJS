/* 	
*StalkJS, framework to make easy Event-Server
*Created by @hugoduar
*/

	/*
		*Selector
		*
		*/
	function Selector(){}
	Selector.prototype = {
		stringSelect: "",
		constructorSelector:function(_strSelect){
			this.stringSelect = _strSelect;
			return this;
		},
		/*Return text before '#'
		'#myId' = 'myId'
		'#myId anything' = 'myId'
		'#myId.anything' = 'myId'
		*/
		getId: function() {
			var arrayStringSelect = this.stringSelect.split(''),
			lenASS = arrayStringSelect.length, //ASS = arrayStringSelect
			pointOutBound = true,
			pointChar = "",
			_id = "",
			j = 0;
			for (var i = 0; i<lenASS; i++) {
				if (arrayStringSelect[i]=="#"){
					j = i+1;
					while(pointOutBound){
						pointChar = arrayStringSelect[j];
						if(pointChar!=" " &&  pointChar!="."){
							_id+=pointChar;
						}else{
							pointOutBound = false;
							break;
						}
						if (j>=lenASS-1) {
							pointOutBound=false;
							break;
						}else{
							j++;
						}
					}
				}
				break;
			}
			return _id;
		}, 
	}
	Selector.createSelector = function(_strSelect){
		var sel = new Selector();
		return sel.constructorSelector(_strSelect);
	}

	var selector = Selector.createSelector;
	console.log(selector('#asdd').getId());

	function StalkElement(){}
	StalkElement.prototype = {
		id: "",
		setId: function(_id){
			this.id = _id;
			return this;
		},
		sendEventDescription:function(eventDesc){
			console.log(this.id);
		},
	}
	StalkElement.createStalkElement = function(_elementId) {
		var SE = new StalkElement();
		return SE.setId(_elementId);
	}

