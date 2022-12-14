export const Authentication = {

  getUser() {
    return JSON.parse(localStorage.getItem('user'))
  },

  async signin(username: string, password: string) {
    // try {
    //   const res = await fetch(`http://soarvm2.ctio.noao.edu/gsp/api/token-auth/`, {
    //     method: 'POST',
    //     body: JSON.stringify({username: username, password: password}),
    //     headers: {
    //       'Accept': '*/*',
    //       'Content-Type': 'application/json'
    //     }
    //   })

    //   let data = await res.json()
    //   if (res.status === 201) {
    //     const res2 = await fetch(`http://soarvm2.ctio.noao.edu/gsp/api/auth/current_user/`, {
    //       headers: {
    //         'Accept': '*/*',
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${data.token}`
    //       }
    //     })

    //     if (res2.status === 200) {
    //       let userInfo = await res2.json()
    //       if (userInfo.is_staff) {
    //         localStorage.setItem("user", JSON.stringify(userInfo))
    //         return [userInfo, undefined]
    //       }
    //     }
    //   } else {
    //     return [null, data.non_field_errors.join("\n")]
    //   }

    //   return [null, undefined]
    // } catch (error) {
    //   if (error instanceof Error) {
    //     return [null, error.toString()]
    //   } else {
    //     return [null, "Unexpected error"]
    //   }
    // }
    let userInfo = { username: username, password: password }
    localStorage.setItem("user", JSON.stringify(userInfo))
    return [userInfo, undefined]
  },

  signout() {
    localStorage.removeItem("user")
  }
}