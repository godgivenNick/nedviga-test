import endpoints from '@/helpers/endpoints/index'

export default function ({ $axios, $siteConfig, store }, inject) {
  const methods = ['delete', 'get', 'post', 'put', 'patch']

  const api = (endpoint, payload = {}) => {
    const method = methods.find(e => endpoint.includes(e))
    let uri = endpoints[endpoint]

    uri = payload.id ? uri.replace(':id', payload.id) : uri

    return $axios[`$${method}`](uri, { data: payload.data, params: payload.params })
  }

  inject('api', api)
}
