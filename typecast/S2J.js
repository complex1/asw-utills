const S2J = (data) => {
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}
export default S2J