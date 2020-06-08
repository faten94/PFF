import React, {Component} from 'react';
import axios from "axios";

class Devis extends Component{
  constructor(props){
    super(props);
    this.state = {
     data: []
   }
   this.getDevis =this.getDevis.bind(this)
   this.DisplayDevis = this.DisplayDevis.bind(this)
  }


  getDevis = () =>  {
    axios.get('http://localhost:8080/getdevis/')
    .then((resultFromServer)=>{
      const x = resultFromServer.data
      this.setState({
        data: x
      });
    })
  }

  DisplayDevis = (data) =>{
    if (!data.length) return null
    return data.map((devis, index)=>(
      <div key={index} className='display'>
      <div>
        {devis._id}
        {devis.content}
      </div>
      </div>
    ))
  }


  render(){
      return (
        <div className="getdevis">

            <button  onClick={this.getDevis}> Afficher mes devis</button>
              <div>
              
                {this.DisplayDevis(this.state.data)}
              </div>
        </div>
    )
  }
}



export default Devis;
