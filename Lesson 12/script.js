let obj_1 = {
	a: 10,
	b: 20,
	k: {
	 x: 100,
	 y: 200,
	 p: {
	  x: 300,
	 }
	}
   },
   obj_2 = {
	c: 30,
	d: 40,
	y: ['cat', 'dog']
   },
   obj_3 = {
	a: 50,
	f: 60,
	ee: function(){
	 console.log('here');
	}
   };

let mainObject = Object.assign(obj_1, obj_2, obj_3);
   



function convert(obj) {

	let finalObj = {};

	for(let key in obj) {
		if(typeof obj[key] === "object") {
			let res = convert(obj[key]);
			Object.assign(finalObj, res);
		} else {
			finalObj[key] = obj[key];
		}
	}

	return finalObj;
}
console.log(convert(mainObject));
