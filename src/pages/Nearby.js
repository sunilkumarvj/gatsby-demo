import React from "react";
import './index.css';
import {  graphql, Link } from "gatsby";


export default class About extends React.Component{
 


    render(){
        return(
<div className="bodyCont">
    
    <h1 align="center" className="beer">Beer Store</h1>
    <div className="header">
      <div className="logo"><Link to="/"><img className="i" src="https://media.glassdoor.com/sqll/152333/the-beer-store-squarelogo-1573434493086.png"></img></Link></div>
      
      <div className="ytube"><Link to="/Products">Beer Products</Link></div>
      <div className="home"><Link to="/Blovers">Beer Lovers</Link></div>
      <div className="quot"><a href="https://en.wikipedia.org/wiki/The_Beer_Store">About Us</a></div>
      <div className="gif"><img src="https://i.imgur.com/OOsfinU.jpg"></img></div>
    </div>
   
</div>
            
                 )
        }
    }