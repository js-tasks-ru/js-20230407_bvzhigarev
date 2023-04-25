/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    if(!arr) {
        return new Array(0);
    }
	let result = [];
	for(let elem of arr) {
		if(result.indexOf(elem) == -1) {
			result.push(elem);
		}
	}
	return result;
}