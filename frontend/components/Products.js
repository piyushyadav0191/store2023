import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

const ALL_PRODUCTS_QUERY = gql`
query ALL_PRODUCTS_QUERY {
  allProducts {
    id
   	name
    price
    description
    photo {
      image{
        publicUrlTransformed
      }
    }
  }
}
`


const Products = () => {
 const {data, error, loading} =  useQuery(ALL_PRODUCTS_QUERY);
 console.log(data, error, loading)
  return (
    <div>
        <h1>Products </h1>
    </div>
  )
}


export default Products