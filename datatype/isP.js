const fun = (data) => {
  return ['number', 'string', 'boolean', 'undefined', 'symbol', 'bigint'].indexOf(typeof data) !== -1
}
export default  fun
