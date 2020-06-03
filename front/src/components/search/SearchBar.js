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
   this.handleServiceChange = this.handleServiceChange.bind(this);

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


  render(){
      return (
        <div>
          <input value={this.state.service} onChange = {this.handleServiceChange}  placeholder = {this.state.placeHolder}/>

          <button  onClick={this.getSupplierService.bind(this)}> Search</button>
              <div>

                    {
                        this.state.data.map((i) =>
                            <p>{i.lastname}</p>
                        )
                    }
                </div>

        </div>
    )
  }
}



export default SearchBar;
