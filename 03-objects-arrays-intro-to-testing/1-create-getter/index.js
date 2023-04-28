/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(field) {
	return function getter(obj) {
		const fieldArray = field.split('.');
		for (const key of fieldArray) {
			if(obj[key]) {
                obj = obj[key];
            } else {
                return obj[key];
            }    
		}
		return obj;
	}	
}