import gql from 'graphql-tag'

export const GET_USER_QUERY = gql`
    query{
      users{
        id_user,
        name,
        email
      }
    }
`
export const LOGIN_QUERY = gql`
    query userLogin($email: String!, $password: String!){
        userLogin(email: $email, password: $password){
          token: token
        }
      }
`
export const CATEGORIAS_QUERY = gql`
    query{
      categorias{
        id_categoria,
        nombre
      }
    }
`
