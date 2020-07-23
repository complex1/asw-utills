const clone = (data) => {
  if (typeof data === 'object') {
    return JSON.parse(JSON.stringify(data))
  } else {
    return data
  }
}
export default clone