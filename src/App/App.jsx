import { Component } from "react";
import './App.css'
import Header from "../Header/Header";
import Search from "../Search/Search";
import Postlist from "../Postlist/Postlist";
class App extends Component{
   render(){
      return(
         <>
         <Header />
         <main>
            <Search />
            <Postlist />
         </main>
         </>
      )
   }
}
export default App