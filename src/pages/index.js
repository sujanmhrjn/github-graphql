import UserLists from './users'
import SearchForm from '../components/search'

import { useState, useEffect, useContext } from 'react'
import { useLazyQuery } from '@apollo/client'
import { ALL_USERS } from '../graphql/queries'
import { AppContext } from '../context/appContext'

//token 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
const HomePage = () => {
  const {  dispatch } = useContext(AppContext)
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState(null)
  const [search, setSearch] = useState()
  const [executeSearch, { data }] = useLazyQuery(ALL_USERS)
  const onSearchChange = (value) => {
    setSearch(value)
  }
  useEffect(() => {
    executeSearch()
  }, [executeSearch])

  useEffect(() => {
    dispatch({ users: data?.organization?.membersWithRole?.nodes })
    setUsers(data?.organization?.membersWithRole?.nodes)
    setFilteredUsers(data?.organization?.membersWithRole?.nodes)
  }, [data, dispatch])

  useEffect(() => {
    if (search) {
      setFilteredUsers(
        users.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    } else {
      setFilteredUsers(users)
    }
  }, [search, users])
  return (
    <div className='py-16 font-rubik'>
      <div className='container px-16 mx-auto'>
        <SearchForm onSearch={onSearchChange} search={search} />
        {filteredUsers && <UserLists data={filteredUsers} />}
      </div>
    </div>
  )
}

export default HomePage
