require('dotenv').config()
const fs = require('fs')
const { Octokit } = require('@octokit/rest')

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

const fetchSuitableRepos = async () => {
  const { data: { items } } = await octokit.search.repos({
    q: 'user:cedmax topic:dsgn',
    per_page: 100,
    sort: 'updated',
    order: 'asc'
  })

  return items.filter(({ homepage }) => homepage)
}

const format = (data) => `export default ${JSON.stringify(
  data.map(({ homepage, description }) => ({
    homepage,
    description
  })),
  null,
  4
)}`

;(async () => {
  const repos = await fetchSuitableRepos()
  fs.writeFileSync(
    './src/projects.js',
    format(repos),
    'utf8'
  )
})()
