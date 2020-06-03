import React, {Component} from 'react';
import axios from "axios";

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      service:"",
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


    return data.map((supplier, index)=>(
      <div key={index} className='display'>
      <p><a href= {"http://localhost:3000/accountsupplier/" + supplier._id }>{supplier.lastname} à {supplier.city} </a></p>
      </div>
    ))
  }


  render(){
      return (
        <div>
          <input value={this.state.service} onChange = {this.handleServiceChange}  placeholder = " Votre recherche" />
            <button  onClick={this.getSupplierService}> Search</button>
              <div>
                {this.DisplaySupplier(this.state.data)}
              </div>
        </div>
    )
  }
}



export default SearchBar;
