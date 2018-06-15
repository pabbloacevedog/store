// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// User type
const CatType = new GraphQLObjectType({
  name: 'categoria',
  description: '...',

  fields: () => ({
    id_categoria: {type: GraphQLInt},
    nombre: {type: GraphQLString}
  })
})

export default CatType
