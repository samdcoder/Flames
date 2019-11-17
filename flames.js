removeCommonChars = () => {
	//removing all common characters without respecting count
	for (let i = 97; i <= 122; i++) {
	    if(characterMap1[String.fromCharCode(i)] > 0 && characterMap2[String.fromCharCode(i)] > 0){
	    		delete characterMap1[String.fromCharCode(i)];
	    		delete characterMap2[String.fromCharCode(i)];
	    	} 
		}
}

remainingChars = () => {
	let cnt = 0;
	for (let i = 97; i <= 122; i++) {
	    if(characterMap1[String.fromCharCode(i)] > 0){
	    	cnt++;
	    }
	    if(characterMap2[String.fromCharCode(i)] > 0){
	    	cnt++;
	    } 
	}
	return cnt;

}

initializeMap = (m) => {
	for (let i = 97; i <= 122; i++) {
    m[String.fromCharCode(i)] = 0; 
	}
}

fillMap = (s, m) => {
	for(let i = 0; i < s.length; i++){
		m[[s[i]]]++;
	}
}

finalComputation = (count) => {
	while(flamesArr.length > 1){
		let size = flamesArr.length;
		let position = count % size;
		let index = position -= 1;
		flamesArr.splice(index,1);
		//console.log('arr: ', flamesArr);

	}
	return flamesMap[flamesArr[0]];
}

let flamesMap = {
	'F': 'Friends',
	'L': 'Love',
	'A': 'Attraction',
	'M': 'Married',
	'E': 'Enemies',
	'S': 'Sibling'
}

let name1 = process.argv[2];
let name2 = process.argv[3];
let characterMap1 = {};
let characterMap2 = {};
let flamesArr = ['F', 'L', 'A', 'M', 'E', 'S'];

initializeMap(characterMap1);
initializeMap(characterMap2);

fillMap(name1, characterMap1);
fillMap(name2, characterMap2);

removeCommonChars();

let remaningCount = remainingChars();

const ans = finalComputation(remaningCount);

//console.log('remaningCount:  ', remaningCount)
console.log(ans);
