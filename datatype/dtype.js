const dtype = (data) => {
  const t = typeof data
  if (t !== 'object') {
    return t
  } else {
    if (Array.isArray(data)) {
      return 'array'
    } else {
      return 'object'
    }
  }
}
export default dtype
