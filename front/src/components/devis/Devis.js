import React, {Component} from 'react';
import axios from "axios";

class Devis extends Component{
  constructor(props){
    super(props);
    this.state = {
     data: [],
   }
   this.DisplaySupplier = this.DisplaySupplier.bind(this)
  }


  getSupplierService = () =>  {
    axios.get('http://localhost:8080/getdevis/')
    .then((resultFromServer)=>{
      const x = resultFromServer.data
      this.setState({
        data: x

      });
    })
  }

  DisplaySupplier = (data) =>{
    return data.map((devis, index)=>(
      <div key={index} className='display'>
      {data._id}
      </div>
    ))
  }


  render(){
      return (
        <div className="getdevis">

            <button  onClick={this.getSupplierService}> Afficher mes devis</button>
              <div>
                {this.DisplaySupplier(this.state.devis)}
              </div>
        </div>
    )
  }
}



export default Devis;
