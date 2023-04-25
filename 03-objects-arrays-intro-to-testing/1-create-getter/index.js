/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(field) {
	return function getter(obj) {
		for (let key of field.split('.')) {
			if(obj[key]) {
                obj = obj[key];
            } else {
                return undefined;
            }    
		}
		return obj;
	}	
}