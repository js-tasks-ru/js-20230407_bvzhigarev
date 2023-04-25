/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    if(!obj) {
        return undefined;
    }
	let result = new Object();
	const keys = Object.keys(obj);
	const values = Object.values(obj);
	for(let i = 0; i < keys.length; i++) {
		result[values[i]] = keys[i];
	}
	return result;
}
