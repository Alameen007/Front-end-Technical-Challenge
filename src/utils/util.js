/**
 *  filters a list
 * @param list  list to be filtered
 * @param searchToken  search token
 * @param searchProperties  array of object properties to search in
 *
 * @return the filtered list
 */
const search = (list, searchToken, searchProperties = []) => {
  const filteredList = list.filter((org) => {
    for (const prop of searchProperties) {
      if (
        org[prop] &&
        String(org[prop])
          .toLowerCase()
          .includes(searchToken.toLowerCase())
      ) {
        return true
      }
    }
    return false
  })

  return filteredList
}

/**
 * Compares two strings, or numbers
 * @param a
 * @param b
 * @return {number}
 */
const compareFunction = (a, b) => {
  if (typeof a === 'string' && typeof b === 'string') {
    // ignore case
    a = a.toLowerCase()
    b = b.toLowerCase()
  }

  if (a > b) {
    return 1
  }

  if (a < b) {
    return -1
  }

  return 0
}

const titleCase = str =>
  str
    .toLowerCase()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-')

const upperCase = str => str.toUpperCase()
const removeFromArray = (arr, el) => {
  if (arr.indexOf(el) > -1) {
    return arr.splice(arr.indexOf(el), 1)
  }
}

export {
  search,
  titleCase,
  upperCase,
  removeFromArray,
  compareFunction,
}
