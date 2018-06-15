// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as user from './users/fields/query'
import * as login from './login/fields/query'
import * as categoria from './categorias/fields/query'

// Querys
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...user,
    ...login,
    ...categoria
  })
})

export default query
