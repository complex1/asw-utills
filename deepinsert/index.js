import isP from '../datatype/isP'
import isArr from '../datatype/isArr'

const deepInsert = (A = {}, B = {}, ignoreKeyList = []) => {
  if (isP(B)) {
    return B
  }
  if (!isArr(B)) {
    for (const i in B) {
      if (ignoreKeyList.indexOf(i) === -1) {
        A[i] = deepInsert(A[i] || '', B[i], ignoreKeyList)
      }
    }
    return A
  } else {
    const arr = []
    for (const i in B) {
      arr.push(deepInsert(
        A[i] || '',
        B[i],
        ignoreKeyList
      ))
      return arr
    }
  }
}
export default deepInsert
