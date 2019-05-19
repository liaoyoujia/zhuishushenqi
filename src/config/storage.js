import { message } from 'antd'
export default class storage {
  setStorage(name, data) {
    let dataType = typeof data
    if (dataType === 'object') {
      window.localStorage.setItem(name, JSON.stringify(data))
    } else if (['number', 'string', 'boolean'].indexOf(dataType) > 0) {
      window.localStorage.setItem(name, data)
    } else {
      message.info('暂不支持此类存储!')
    }
  }
}
