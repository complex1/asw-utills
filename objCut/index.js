import isP from '../datatype/isP'
import isArr from '../datatype/isArr'

const isSameObject = function (obj, key, value) {
  if (key in obj) {
    if (obj[key] === value) {
      return true
    }
  }
  return false
}
const deepCut = function (obj, key, value) {
  if (!isP(obj) && obj !== null) {
    if (!isArr(obj)) {
      if (isSameObject(obj, key, value)) {
        return obj
      } else {
        for (const i in obj) {
          const newObj = deepCut(obj[i], key, value)
          if (newObj !== null) {
            return newObj
          }
        }
      }
    } else {
      for (const i in obj) {
        const newObj = deepCut(obj[i], key, value)
        if (newObj !== null) {
          return newObj
        }
      }
    }
  }
  return null
}

export default deepCut