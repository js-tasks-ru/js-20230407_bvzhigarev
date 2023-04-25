/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(str, limit) {
	let result = [];
	let symbolToCheck = -1;
	let cursor = -1;
	for(let i = 0; i < str.length; i++) {
		let checked = str.charAt(i);
		if(symbolToCheck == checked) {
			result[cursor] += checked;
		} else {
			cursor += 1;
			result[cursor] = checked; 
		}
		symbolToCheck = checked;
	}
	return result.map(elem => elem.substring(0, limit)).join('');
}   