import isP from '../datatype/isP'
import deepCut from '../objCut'
const J2S = (data) => {
  if (isP(data)) {
    return data
  }
  try {
    return JSON.stringify(data)
  } catch (e) {
    console.error(e)
    return ''
  }
}
export default J2S