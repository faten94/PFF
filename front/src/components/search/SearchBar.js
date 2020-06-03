import React, {Component} from 'react';
import axios from "axios";
//import './SearchBar';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      service:"",
     placeHolder: " ?",
     data: [],
   }
   this.DisplaySupplier = this.DisplaySupplier.bind(this)
  }

handleServiceChange = (e) => {
  console.log(e.target.value);
     this.setState({
       service: e.target.value
     })
   }
  getSupplierService = (e) =>  {
    axios.post('http://localhost:8080/service',{

      service: this.state.service
    })
    .then((resultFromServer)=>{
      console.log(resultFromServer);
      this.setState({
        data: resultFromServer.data

      });
    })
  }

  DisplaySupplier = (data) =>{
    
    if (!data.length) return null

    return data.map((supplier, index)=>(
      <div key={index} className='display'>
      <button>{supplier.lastname}</button>
      <h5> {supplier.city} </h5>
      </div>
    ))
  }


  render(){
      return (
        <div>
          <input value={this.state.service} onChange = {this.handleServiceChange}  placeholder = {this.state.placeHolder}/>

          <button  onClick={this.getSupplierService}> Search</button>
              <div>
                {this.DisplaySupplier(this.state.data)}
                </div>
        </div>
    )
  }
}



export default SearchBar;
