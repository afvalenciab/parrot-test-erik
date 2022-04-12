import axios from "axios"

export const getApiUrl = (path: string = ""): string => {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_URL)
  return url.href
}

export async function insecureFetchFromAPI(path: string) {
  const parseJSON = (resp: any) => (resp.json ? resp.json() : resp)

  const checkStatus = (resp: any) => {
    if (resp.status >= 200 && resp.status < 300) {
      return parseJSON(resp)
    } else {
      throw new Error(resp)
    }
  }

  const requestURL = getApiUrl(path)
  return await axios
    .get(requestURL, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(checkStatus)
    .catch((error: any) => error)
}

export async function fetchFromAPI(token: string, path: string) {
  const parseJSON = (resp: any) => (resp.json ? resp.json() : resp)

  const checkStatus = (resp: any) => {
    if (resp.status >= 200 && resp.status < 300) {
      return parseJSON(resp)
    } else {
      throw new Error(resp)
    }
  }
  const requestURL = getApiUrl(path)
  return await axios
    .get(requestURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then(checkStatus)
    .catch((error: any) => error)
}

export async function insecurePostToAPI(path: string, data: any) {
  const parseJSON = (resp: any) => (resp.json ? resp.json() : resp)

  const checkStatus = (resp: any) => {
    if (resp.status >= 200 && resp.status < 300) {
      return parseJSON(resp)
    } else {
      throw new Error(resp)
    }
  }

  const requestURL = getApiUrl(path)
  return await axios
    .post(requestURL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(checkStatus)
    .catch((error: any) => error)
}

export async function postToAPI(token: string, path: string, data: any) {
  const parseJSON = (resp: any) => (resp.json ? resp.json() : resp)
  const checkStatus = (resp: any) => {
    if (resp.status >= 200 && resp.status < 300) {
      return parseJSON(resp)
    } else {
      throw new Error(resp)
    }
  }

  const requestURL = getApiUrl(path)
  return await axios
    .post(requestURL, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then(checkStatus)
    .catch((error: any) => error)
}
export async function putToAPI(token: string, path: string, data: any) {
  const parseJSON = (resp: any) => (resp.json ? resp.json() : resp)
  const checkStatus = (resp: any) => {
    if (resp.status >= 200 && resp.status < 300) {
      return parseJSON(resp)
    } else {
      throw new Error(resp)
    }
  }

  const requestURL = getApiUrl(path)
  return await axios
    .put(requestURL, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then(checkStatus)
    .catch((error: any) => error)
}
