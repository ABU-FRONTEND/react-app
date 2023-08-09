import { Component } from "react";
import './PostlistItem.css'
class PostlistItem extends Component{
   render(){
      let {img,title, popular, region, capital} = this.props
      return(
         <div className="cards">
            <img src={img} alt="" />
            <div className="country_info">
               <h4>{title}</h4>
               <p>Population: <span>{popular}</span></p>
               <p>Region: <span>{region}</span></p>
               <p>Capital: <span>{capital}</span></p>
            </div>
         </div>
      )
   }
}
export default PostlistItem