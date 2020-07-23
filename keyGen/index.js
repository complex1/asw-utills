export const keyGen = (pre='', suf='') => {
  return pre + (pre === '' ? '' : '-') + (new Date().valueOf().toString(32)) + (suf === '' ? '' : '-') + suf
}
export default keyGen