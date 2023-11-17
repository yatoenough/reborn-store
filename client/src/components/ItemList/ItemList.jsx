import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const retrieveProducts = async () => {
  const response = await axios.get('http://localhost:5555/api/products');
  return response.data;
};

const ItemList = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery('productsData', retrieveProducts);

  if (isLoading) return <div>Fetching products...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <img src={'/2daacfe012733764748706b7fc7517fd.jpg'} alt="img" />
          <h1>{product.name}</h1>
          <h2>{product.price} uah</h2>
        </div>
      ))}
    </>
  );
};

export default ItemList;
