const isObj = (data) => {
  if (typeof data === 'object' && !Array.isArray(data)) {
    return true
  }
  return false
}
export default isObj
