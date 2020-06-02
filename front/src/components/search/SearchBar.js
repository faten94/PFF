import React, {Component} from 'react';
import axios from "axios";
//import './SearchBar';



class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      service:"",
     placeHolder: "Wath are you search ?",
     data: [],



   }
  }

handleServiceChange = (e) => {
     this.setState({
       service: e.target.value
     })
   }


  getSupplierService = (e) =>  {
    axios.get('http://localhost:8080/service',{

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



          <input type="text" value={this.state.service} onChange = {this.handleServiceChange.bind(this)}  placeholder = {this.state.placeHolder}/>

          <button type='submit'onClick={this.getSupplierService.bind(this)}> Search</button>
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
