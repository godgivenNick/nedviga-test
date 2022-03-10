import common from './common'

export default [common]
  .map((obj) => {
    return Object.keys(obj.endpoints).map(key => ({
      [key]: `${obj.BASE_URL}${obj.endpoints[key]}`
    }))
  })
  .flat()
  .reduce((result, curr) => {
    for (const key in curr) {
      if (Object.prototype.hasOwnProperty.call(curr, key)) {
        result[key] = curr[key]
      }
    }
    return result
  }, {})
