import axios from 'axios'
import { settings } from '../config'

export const signup = async (FirstName, LastName, email, password) => {
  const url = settings.server + '/user/signup'
  let result
  try {
    result = await axios.post(url, {
      FirstName,
      LastName,
      email,
      password,
    })
    result = result.data
  } catch (ex) {
    result = ex
  }

  return result
}

export const signin = async (email, password) => {
  const url = settings.server + '/user/signin'

  let result
  try {
    result = await axios.post(url, {
      email,
      password,
    })
    result = result.data
  } catch (ex) {
    console.log(ex)
  }

  return result
}
