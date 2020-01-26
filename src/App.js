import React, { Component } from 'react';
import SongList from "./components/songlist/songlist";
import  Songdetails from "./components/songdetails/songdetails";



class App extends Component
{
  render()
  {
    return(
      <div className="container">
        <div className="row">
         <div className="col-md-6">
           <SongList/>
         </div>
         {/* <div className="col-md-6">      <Songdetails/></div> */}
         <div className="col-md-6">
           <Songdetails/>
</div>   
        </div>
      </div>

    
    )
  }
}

export default App;
