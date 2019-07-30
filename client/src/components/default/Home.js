import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
 render() { 
  return (  
   <div className="container-flex">
    <div className="row">
     <div className="col-sm">
     </div>
     <div className="col-sm ">
      <h1> Simple TODO app </h1>
      <button type="button" className="btn btn-dark"><h1><Link to='/items/'>TODO Items</Link></h1></button>
      <button type="button" className="btn btn-light"><h1><Link to='/categories/'>Categories</Link></h1></button>
     </div>
     <div className="col-sm">
     </div>
    </div>
   </div> 
  )
 }
}
 
export default Home;