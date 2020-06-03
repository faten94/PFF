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
      this.setState({
        data: resultFromServer.data

      });
    })
  }

  DisplaySupplier = (data) =>{

    if (!data.length) return null

    console.log(data)
    return data.map((supplier, index)=>(
      <div key={index} className='display'>
      <p><a href= "http://localhost:3000/registeruser">{supplier.lastname}</a></p>
      //<p><a href= "http://localhost:3000/accountsupplier/{supplier._id}"  >{supplier.lastname}</a></p>
      <h5> {supplier._id} </h5>
      </div>
    ))
  }


  render(){
      return (
        <div>
          <input value={this.state.service} onChange = {this.handleServiceChange}  placeholder = {this.state.placeHolder}/>

          <button  onClick={this.getSupplierService.bind(this)}> Search</button>
              <div>
                {this.DisplaySupplier(this.state.data)}
                </div>

        </div>
    )
  }
}



export default SearchBar;
