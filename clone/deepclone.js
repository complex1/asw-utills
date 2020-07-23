import isP from '../datatype/isP'
import isArr from '../datatype/isArr'
const deepClone = (data) => {
  if (isP(data)) { return data }
  if (typeof data === 'object') {
    if (isArr(data)) {
      const arr = []
      data.forEach(element => {
        arr.push(deepClone(element))
      })
      return arr
    } else {
      const obj = {}
      for (const i in data) {
        obj[i] = deepClone(data[i])
      }
      return obj
    }
  }
} 
export default deepClone
