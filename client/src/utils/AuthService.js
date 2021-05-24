const FC_USER_KEY = 'fc_user';

class AuthService {

  static loginUser = (user) => {
    localStorage.setItem(FC_USER_KEY, JSON.stringify(user))
  }

  static logout = () => {
    localStorage.removeItem(FC_USER_KEY)
  }

  static isLoggedIn = () => {
    return this.authedAcct() !== null
  }

  static acctToken = () => {
    const user = localStorage.getItem(FC_USER_KEY) || {}
    if (!user.apiKey) {
      return
    }
    return user.apiKey.value
  }

  static authedAcct = () => {
    try {
      return JSON.parse(localStorage.getItem(FC_USER_KEY))
    } catch {}
  }

}

export default AuthService;
