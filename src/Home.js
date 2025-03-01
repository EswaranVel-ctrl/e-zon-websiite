import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from "./new.jpg"
import shirt1 from './shirt1.jpg';
import shirt2 from './shirt2.jpg';
import shirt3 from './shirt3.jpg';
import axios from 'axios';
import back from './check.jpg';
import nike from './nikke.jpg';



const Home = () => {
  const [productData, setproductdata]=useState([]);
  async function dummy() {
    await axios.get("https://dummyjson.com/products").then((res) => {
      setproductdata(res.data.products);
    }); 
  }
dummy();
useEffect(() => {
  
  dummy();
},[]);
console.log(productData);
  return (
    <div className="main">
      <header>
        <h1 className="logo">E-zon</h1>
         <img src={logo} alt="logo"/>
         <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Product</li>
          <li>Contact</li>
        </ul>
      <button className="btn">MyCart</button>
      </header>
      <div className="products">
        <div className="product">
          <img src={shirt1} alt="Shirt" />
          <p>t-shirt</p>
          <p>fit</p>
           <div className="sizes">
            <span>36</span>
            <span>38</span>
            <span>40</span>
            <span>42</span>
          </div>
           <div className="colors"> 
            <div className="color color1"></div>
            <div className="color color2"></div>
            <div className="color color3"></div>
          </div>
         <h3>$60</h3>
        </div>
        <div className="product">
          <img src={nike} alt="Shirt" />
          <p>t-shirt</p>
          <p>fit</p>
           <div className="sizes">
            <span>36</span>
            <span>38</span>
            <span>40</span>
            <span>42</span>
          </div>
           <div className="colors"> 
            <div className="color color1"></div>
            <div className="color color2"></div>
            <div className="color color3"></div>
          </div>
         <h3>$45</h3>
         
        </div>
         <div className="product">
          <img src={shirt2} alt="Shirt" />
          <p>hoody</p>
          <p>fit</p>

          <div className="sizes">
            <span>36</span>
            <span>38</span>
            <span>40</span>
            <span>42</span>
          </div>
 <div className="colors">
            <div className="color color1"></div>
            <div className="color color2"></div>
            <div className="color color3"></div>
          </div>
         
          <h3>$70</h3>
        </div>
        <div className="product">
          <img src={shirt3} alt="Shirt" />
          <p>hoody</p>
          <p>fit</p>

          <div className="sizes">
            <span>36</span>
            <span>38</span>
            <span>40</span>
            <span>42</span>
          </div>
 <div className="colors">
            <div className="color color1"></div>
            <div className="color color2"></div>
            <div className="color color3"></div>
          </div>
         
          <h3>$32</h3>
          
        </div>
        
      </div>
    </div>
  );
};

export default Home;