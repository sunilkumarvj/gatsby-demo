import React from "react"
import './index.css'
import {  graphql, Link } from "gatsby" //pulling graphql

// import 'C:/Users/sunilkumara.v.j/Desktop/Gatsby-Beer-Suni/gatsby-site/public/main.css';



export const query = graphql`
{
  allSanityBeerProducts {
    edges {
      node {
        _id
        price
        title
        description
        image {
          asset {
            url
          }
        }
        slug {
          current
        }
      }
    }
  }
}


`//we pull grapql from gatsby and we need fragment reference(image)

const ProdPage = ({data}) => (   //here we are going to get data
  <div className="bodyCont">
    
    <h1 align="center" className="beer">Beer Store</h1>
    <div className="header">
      <div className="logo"><Link to="/"><img className="i" src="https://media.glassdoor.com/sqll/152333/the-beer-store-squarelogo-1573434493086.png"></img></Link></div>
      
      <div className="ytube"><Link to="/Products">Beer Products</Link></div>
      <div className="home"><Link to="/Blovers">Beer Lovers</Link></div>
      <div className="quot"><a href="https://en.wikipedia.org/wiki/The_Beer_Store">About Us</a></div>
      <div className="gif"><img src="https://i.imgur.com/OOsfinU.jpg"></img></div>
    </div>
   <img className="page2img" src="https://storage.googleapis.com/zagat-article-ss/FermentationLab-fb-sf.jpg"></img>
  <div className="enemi">
    <h2 className="h31">Drink Beer..Want More??</h2>
   <p>Whoever drinks beer, he is quick to sleep; whoever sleeps long, does not sin; whoever does not sin, enters Heaven! Thus, let us drink beer!</p>
   <p>“A man who lies about beer makes enemies”</p>
   <h2 className="Buy"> Buy your Products... Please say Cheers!!!</h2>
    </div> 
    
  <div className="mainprodp">
    
      {data.allSanityBeerProducts.edges.map(({node: project}) => (
        
        <div className="s1" key={project.slug.current}>
          
           <img className="imgbeers" src={project.image.asset.url} alt={project.title}></img>
           <div className="bttn"> <button  className="buy-button snipcart-add-item" data-item-id={project._id} 
                                   data-item-price={project.price} 
                                   onClick={()=>alert("added to the cart")}
                                   data-item-name={project.title} 
                                   data-item-image={project.image.asset.url}
                                   data-item-description={project.description}
                                   data-item-custom1-name="Quantity"
                                   data-item-custom1-options="60ml|90ml[+100.00]|Full[+300.00]"
                                   ><span>Add Item</span></button><br /></div>
              <div className="desc">
                  <div className="title"><b>Title:</b> {project.title}</div>
                  <div className="price"><b>Price:</b> &#8377; {project.price}</div>
                  <div className="description"><b>Description:</b> {project.description}</div>

                                   
            </div>

      </div>
  
  
    
          
      ))
      
      }
 
  
</div>
</div>
)

export default ProdPage