/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    if(!obj) {
        return obj;
    }
	let result = {};
	const entries = Object.entries(obj);
	for(let i = 0; i < entries.length; i++) {
		result[entries[i][1]] = entries[i][0];
	}
	return result;
}
