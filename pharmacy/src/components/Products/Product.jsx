import Card from "./Card";
import SearchBar from "../../components/SearchBar/Search";
import Fuse from "fuse.js";
import "./Product.css";
import React, { useEffect, useState } from "react";
import {useQuery} from 'react-query'
import {getProductAction} from '../../actions/products'
import emptycart from './emptycart.svg';

function Product() {
  const data = useQuery("getProducts", async () => await getProductAction());
  const [products, setProducts] = useState([])
  const [search, finshsearch] = useState(false)

  useEffect(()=>{
    if (!data.isLoading && data.isSuccess)
      {
        if (!search){
          setProducts(data.data.data)
          setResult(products)
        }
      }
  }, [data])

  const [results, setResult] = useState([]);

  const searchData = (pattern) => {
    if (!pattern) {
      setResult(products);
      finshsearch(false);
      return;
    }

    const fuse = new Fuse(results, {
      keys: ["name", "brandname", "composition"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    
    if (!result.length) {
      setResult([]);
      
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
       
      setResult(matches);
       
    }
    
  };

  return (
    <div className="page">
      <SearchBar
        placeholder="search"
        onChange={(e) => {finshsearch(true); searchData(e.target.value)}}
      />
      <div className="Container">
        {(results)?results.map((item) => {
          return (
          <Card
            id = {item.id}
            image={item.url}
            medname={item.name}
            medcomposition={item.composition}
            brandname={item.brandname}
            price={item.price}
          />
        )}): 
        <img style={{height:'400px', width:'400px', justifyContent:'center', display:'block', marginLeft: 'auto',
        marginRight: 'auto'}} src={emptycart}></img>
        }
      </div>
    </div>
  );
}

export default Product;
