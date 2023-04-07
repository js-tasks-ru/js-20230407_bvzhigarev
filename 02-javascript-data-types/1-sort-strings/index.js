/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let result = [...arr];
    function compare(a, b) {
		return a.localeCompare(b, "ru", { caseFirst: 'upper' });	
	}	

    if(param == 'asc') {
      return result.sort(compare);
    } else {
      return result.sort(compare).reverse();
	} 
}
