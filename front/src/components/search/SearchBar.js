import React, {Component} from 'react';
import axios from "axios";
import './SearchBar';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      servic:"",
     placeHolder: "Wath are you search ?",
     data: [],

   }
  }
  handleChange(event){
    //console.log(event);
    this.setState({servic:event.target.value});

  }
  getSupplierService(){
    axios.get('http://localhost:8080/services',{servic: this.state.service
    }).then((resultFromServer)=>{

      console.log(resultFromServer);
      this.setState({
        data: resultFromServer.data

      });
    })
  }

  filterArray = () => {
        var searchString = this.state.service;
        var responseData = this.state.data
        if(searchString.length > 0){
            // console.log(responseData[i].name);
            responseData = responseData.filter(l => {
                console.log( l.lastname.toLowerCase().match(searchString));
            })
        }
    }
  render(){
      return (

        <div>


          <input onChange = {this.handleChange.bind(this)} placeholder = {this.state.placeHolder}/>
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
