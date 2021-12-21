import {gql} from '@apollo/client'
const ALL_USERS = gql`
    query{
        organization(login: "github") {
            membersWithRole(first: 50) {
              nodes {
                id,
                name,
                url,
                avatarUrl
              }
            }
        }
    }`

// Fetching Repositories as per username
const FETCH_REPOSITORIES = gql`
query($login: String!, $after: String, $before: String, $first: Int, $last: Int, $isFork: Boolean, $ownerAffiliations: [RepositoryAffiliation!]) {
  user(login: $login) {
    repositories(first: $first, last: $last, isFork: $isFork , ownerAffiliations: $ownerAffiliations, after: $after, before:$before) {
      edges{
        node {
          id
          name
          nameWithOwner
          url
          stargazerCount
          watchers {
            totalCount
          }
          issues(first:10){
            edges{
              node{
                id,
                title
              }
            }
          }
        }
      }
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
}
`

// Fetching Issues as per repository
const FETCH_ISSUES = gql`
query($owner: String!, $name: String!, $after: String, $before: String, $first: Int, $last: Int, $states: [IssueState!]) {
  repository(owner: $owner, name: $name) {
    issues(first: $first, last: $last,  after: $after, before:$before, states: $states) {
      edges {
        node {
          id
          number
          url
          title,
          createdAt,
          author {
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
}
`

    export {ALL_USERS, FETCH_REPOSITORIES, FETCH_ISSUES}