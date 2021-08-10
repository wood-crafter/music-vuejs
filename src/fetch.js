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

export const getTopTrending = (amount) => {
  return fetch(`${API_ROOT}/songs/top/${amount}`)
    .then(res => {
      return res.json()
    })
}

export const getTopNews = (amount) => {
  return fetch(`${API_ROOT}/songs/news/${amount}`)
    .then(res => {
      return res.json()
    })
}

export const getTopArtist = (amount) => {
  return fetch(`${API_ROOT}/artists/top/${amount}`)
    .then(res => {
      return res.json()
    })
}

export const getArtistById = (id) => {
  return fetch(`${API_ROOT}/artists/${id}`)
    .then(res => {
      return res.json()
    })
}

export const getSongById = (id) => {
  return `${API_ROOT}/public/song/${id}`
}

export const getArtistAvatarURL = (id) => {
  return `${API_ROOT}/public/artist/${id}`
}

export const getSongsAvatarURL = (id) => {
  return `${API_ROOT}/public/songs_avatar/${id}`
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