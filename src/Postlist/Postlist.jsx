import { Component } from "react";
import PostlistItem from "../PostlistItem/PostlistItem";
import './Postlist.css'
import germany from '../assets/img/1280px-Flag_of_Germany.svg.png'
import united from '../assets/img/united-state.png'
import brasile from '../assets/img/brasile.png'
import iceland from '../assets/img/iceland.png'
import afganistan from '../assets/img/afganistan.png'
import islands from '../assets/img/islands.png'
import albania from '../assets/img/albania.png'
import algeria from '../assets/img/algeria.png'
const countryData = [
   {
      img: germany,
      title: 'Germany',
      population: '81, 770, 900',
      region: 'Europe',
      capital: 'Berlin'
   },
   {
      img: united,
      title: 'Americas',
      population: '323,947,000',
      region: 'Americas',
      capital: 'Washington, D.C.'
   },
   {
      img: brasile,
      title: 'Brazil',
      population: '206,135,893',
      region: 'Americas',
      capital: 'Brasília'
   },
   {
      img: iceland,
      title: 'Iceland',
      population: '334,300',
      region: 'Europe',
      capital: 'Reykjavík'
   },
   {
      img: afganistan,
      title: 'Afghanistan',
      population: '27,657,145',
      region: 'Asia',
      capital: 'Kabul'
   },
   {
      img: islands,
      title: 'Åland Islands',
      population: '28,875',
      region: 'Europe',
      capital: 'Mariehamn'
   },
   {
      img: albania,
      title: 'Albania',
      population: '2,886,026',
      region: 'Europe',
      capital: 'Tirana'
   },
   {
      img: algeria,
      title: 'Algeria',
      population: '40,400,000',
      region: 'Africa',
      capital: 'Algiers'
   },

]
class Postlist extends Component{
   render(){
      let counttry = countryData.map((item) => {
         let { img, title, population, region, capital } = item
         return <PostlistItem img={img} title={title} popular={population} region={region} capital={capital} />
      })
      return(

         <div className="countrys">
            {counttry}
         </div>
      )
   }
}
export default Postlist