const splitChar = ';;'
const logType = ['info', 'success', 'warning', 'error']

export const  setLog = (log) => {
  const type = log.type || 'info'
  const msg = log.msg || log
  const ts = new Date().valueOf()

  let logStr = sessionStorage.getItem(type)
  logStr = (logStr ? logStr + splitChar : '') + type + ':' + msg + ':' + ts.toString()
  sessionStorage.setItem(type,logStr)
}

export const  setInfoLog = (msg) => {
  SetLog({
    type: 'info',
    msg: msg.msg || msg
  })
}

export const  setSuccessLog = (msg) => {
  SetLog({
    type: 'success',
    msg: msg.msg || msg
  })
}

export const  setWarningLog = (msg) => {
  SetLog({
    type: 'warning',
    msg: msg.msg || msg
  })
}

export const setErrorLog = (msg) => {
  SetLog({
    type: 'error',
    msg: msg.msg || msg
  })
}

const LogDM = (logArray = [], type = 'info') => {
  const logList = sessionStorage.getItem(type) ? sessionStorage.getItem(type).split(splitChar) : []
  for (const i in logList) {
    local = logList[i].split(':')
    logArray.push({
      type: local[0],
      msg: local[1],
      time: parseInt(local[2])
    })
  }
  return logArray
}

export const getLog = (type = 'info', order = 1 ,from = new Date().valueOf(), to = 0, ) => {
  var logArray = []
  if (Array.isArray(type)) {
    for(let i in type) {
      logArray = LogDM(logArray, type[i])
    }
  } else if (type === 'all') {
    for(let i in logType) {
      logArray = LogDM(logArray, logType[i])
    }
  } else {
    logArray = LogDM(logArray, type)
  }
  logArray = logArray.filter(e => e.time > to && e.time < from).sort((a, b) => { return order < 0 ? (a.time < b.time): (a.time > b.time) })
  return logArray
}

export default {
  setLog,
  setInfoLog,
  setSuccessLog,
  setWarningLog,
  setErrorLog,
  getLog
}