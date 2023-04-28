/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    if(!arr) {
        return [];
    }
	let result = [];
	for(const elem of arr) {
		if(result.indexOf(elem) === -1) {
			result.push(elem);
		}
	}
	return result;
}