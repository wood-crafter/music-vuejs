import { color } from "./constants";

export const API_ROOT = "http://localhost:8080";

export const changeTheme = (code) => {
  document.querySelector(':root').style.setProperty('--back-color', color[code].backcolor)
  document.querySelector(':root').style.setProperty('--button', color[code].button)
  document.querySelector(':root').style.setProperty('--container', color[code].container)
  document.querySelector(':root').style.setProperty('--text-color', color[code].textcolor)
  document.querySelector(':root').style.setProperty('--menu', color[code].menu)
  document.querySelector(':root').style.setProperty('--box-shadow', color[code].boxshadow)
}

export const signin = (username, password) => {
  return fetch(`${API_ROOT}/signin`, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    }
  })
}

export const getTopFiveTrending = () => {
  return fetch(`${API_ROOT}/songs/top/5`)
    .then(res => {
      return res.json()
    })
}

export const getTopFiveNews = () => {
  return fetch(`${API_ROOT}/songs/news/5`)
    .then(res => {
      return res.json()
    })
}

export const getSongById = (id) => {
  return `${API_ROOT}/public/${id}`
}

export const signup = (username, password) => {
  return fetch(`${API_ROOT}/signup`, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    }
  })
}