import React from "react"

import {  graphql, Link } from "gatsby" //pulling graphql

// import 'C:/Users/sunilkumara.v.j/Desktop/Gatsby-Beer-Suni/gatsby-site/public/main.css';
import './Blovers.css';
const Blovers = () => ( 
    <div className="bodyCont">
    
    <h1 align="center" className="beer">Beer Store</h1>
    <div className="header">
      <div className="logo"><Link to="/"><img className="i" src="https://media.glassdoor.com/sqll/152333/the-beer-store-squarelogo-1573434493086.png"></img></Link></div>
      
      <div className="ytube"><Link to="/Products">Beer Products</Link></div>
      <div className="home"><Link to="/Blovers">Beer Lovers</Link></div>
      <div className="quot"><a href="https://en.wikipedia.org/wiki/The_Beer_Store">About Us</a></div>
      <div className="gif"><img src="https://i.imgur.com/OOsfinU.jpg"></img></div>
    </div>
    <div>
        <img className="kmainimg" src="https://townsquare.media/site/48/files/2018/03/SamplesBeer.jpg?w=980&q=75"></img>
        <p className="text1"><h1>For Beer Lovers</h1><br />So, you want to know more about beer… well, pour yourself a cold one and get <br />comfortable because there’s a whole lot of great stuff to learn <br />about your favourite beverage.</p>
    </div>
   <h1 className="center" align="center">Beer &amp; Food Pairing</h1>

    <div className="mainwhole">
    
        <div className="mine">
            
          <img src="https://www.thebeerstore.ca/wp-content/uploads/2019/12/food-pairing-archive.jpg"></img>
                <div><strong>Beer&Food Pairings</strong></div>
                <div className="content1"><p>Just as you choose certain wines to go with certain foods...</p></div>
                <div><a href="https://www.thebeerstore.ca/articles/beer-food-pairings/"><b className="black">Learn More..</b></a></div>
        </div>

        <div className="mine">
          <img src="https://www.thebeerstore.ca/wp-content/uploads/2019/12/Antipasto.png"></img>
                <div><strong>Antipasto</strong></div>
                <div className="content1"><p >The always popular and equally delicious bruschetta is best paired...</p></div>
                <div><a href="https://www.thebeerstore.ca/articles/antipasto/"><b className="black">Learn More..</b></a></div>
        </div>

        <div className="mine">
          <img src="https://www.thebeerstore.ca/wp-content/uploads/2019/12/Brunch-archive.jpg"></img>
                <div><strong>Brunch</strong></div>
                <div className="content1"><p>Depending on your choice of brunch, the choice of beer...</p></div>
                <div><a href="https://www.thebeerstore.ca/articles/brunch/"><b className="black">Learn More..</b></a></div>
        </div>

        <div className="mine">
          <img src="https://www.thebeerstore.ca/wp-content/uploads/2019/12/cheese-archive.jpg"></img>
                <div><strong>Cheese</strong></div>
                <div className="content1"><p>Fresh, soft cheeses such as cottage cheese, cream cheese, and...</p></div>
                <div><a href="https://www.thebeerstore.ca/articles/cheese/"><b className="black">Learn More..</b></a></div>
        </div>

        <div className="mine">
          <img src="https://www.thebeerstore.ca/wp-content/uploads/2019/12/festive-treats.png"></img>
                <div><strong>Festive treats</strong></div>
                <div className="content1"><p>The smell and taste of ginger is often associated with...</p></div>
                <div><a href="https://www.thebeerstore.ca/articles/festive-treats/"><b className="black">Learn More..</b></a></div>
        </div>

        <div className="mine">
          <img src="https://www.thebeerstore.ca/wp-content/uploads/2019/12/lobster.png"></img>
                <div><strong>Fish&Sea Food</strong></div>
                <div className="content1"><p>Fish tacos are not only delicious but they are extremely...</p></div>
                <div><a href="https://www.thebeerstore.ca/articles/fish-seafood/"><b className="black">Learn More..</b></a></div>
        </div>

        
        <div className="mine">
          <img src="https://www.thebeerstore.ca/wp-content/uploads/2019/12/harvest.png"></img>
                <div><strong>Harvest Food</strong></div>
                <div className="content1"><p>Traditionally, pumpkin pies combine the distinct pumpkin flavour...</p></div>
                <div><a href="https://www.thebeerstore.ca/articles/harvest-food/"><b className="black">Learn More..</b></a></div>
        </div>

        
        <div className="mine">
          <img src="https://www.thebeerstore.ca/wp-content/uploads/2019/12/heartly-meal.png"></img>
                <div><strong>Hearty Meals Pairings</strong></div>
                <div className="content1"><p>Caramelized onions soaking in rich broth while cheese seeps...</p></div>
                <div><a href="https://www.thebeerstore.ca/articles/hearty-meals-pairings/"><b className="black">Learn More..</b></a></div>
        </div>
    </div>
                        
</div>

      
  
  
    
          

      
      
 
  

)
export default Blovers