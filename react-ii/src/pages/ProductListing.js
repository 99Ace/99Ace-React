import React, {useContext} from "react";
import ProductContext from "./ProductContext";

export default function ProductListing() {
    // set up to use the context
  let context = useContext(ProductContext);
  console.log( context.products()[0].product_name )
  return (
    <React.Fragment>
      <ul>
        {context.products().map(p => (
          <li>{p.product_name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}