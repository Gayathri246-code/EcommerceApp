// import { useEffect, useState } from "react";
// import axios from "axios";
// import Spinner from "./spinner";
// import Mycards from "./cards";

// function Display() {
//   const [Products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(
//         "https://dummyjson.com/products"
//       );
//       console.log(response.data)
//       setProducts(response.data.products);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h2>Products</h2>

//       {Products.length>0?<div style={{display:"flex",justifyContent:"space-evenly",rowGap:"5px",flexWrap:"wrap"}}>
//                 {Products.map((pro, index) => {
//         return <Mycards key={index} title={pro.title} description={pro.category} src={pro.thumbnail} rating={pro.rating} price={pro.price} />
//       })}
//             </div>:<Spinner/>} 
//     </div>
//   );
// }

// export default Display;
