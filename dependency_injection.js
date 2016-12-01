export function get(url, httpRequest = new XMLHttpRequest()) {
  return new Promise((resolve, reject) => {
    httpRequest.onload = onHttpResponse(resolve, reject, httpRequest)
    httpRequest.onerror = onHttpError(reject)

    httpRequest.open('GET', url)
    httpRequest.send()
  })
}

export const onHttpResponse = (resolve, reject, httpRequest) => (event) => {
  if (httpRequest.status !== 200) {
    return reject(new Error(`Status code was ${httpRequest.status}, not 200`))
  }
  
  resolve(httpRequest.responseText)
}

export const onHttpError = (reject) => (event) => {
  return reject(new Error('Oops'))
}