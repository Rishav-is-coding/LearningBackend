require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "Rishav-is-coding",
  "id": 138382043,
  "node_id": "U_kgDOCD-K2w",
  "avatar_url": "https://avatars.githubusercontent.com/u/138382043?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Rishav-is-coding",
  "html_url": "https://github.com/Rishav-is-coding",
  "followers_url": "https://api.github.com/users/Rishav-is-coding/followers",
  "following_url": "https://api.github.com/users/Rishav-is-coding/following{/other_user}",
  "gists_url": "https://api.github.com/users/Rishav-is-coding/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Rishav-is-coding/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Rishav-is-coding/subscriptions",
  "organizations_url": "https://api.github.com/users/Rishav-is-coding/orgs",
  "repos_url": "https://api.github.com/users/Rishav-is-coding/repos",
  "events_url": "https://api.github.com/users/Rishav-is-coding/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Rishav-is-coding/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rishav Raj",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2023-07-02T14:25:35Z",
  "updated_at": "2025-06-26T04:27:27Z"
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/insta', (req, res) => {
  res.send('_.rishav007')
})
app.get('/github', (req, res) => {
  res.send('Rishav-is-coding')
})

app.get('/githubData' , (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})