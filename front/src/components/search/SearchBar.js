import React, {Component} from 'react';
import axios from "axios";
import './SearchBar';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchSupplier:"",
     placeHolder: "Wath are you search ?",
     inputvalue: ""

   }
  }
  handleChange(event){
    //console.log(event);
    this.setState({searchSupplier:event.target.value});

  }
  componentWillMount(){
    axios.get('http://localhost:8080/service').then((resultFromServer)=>{
      console.log(resultFromServer);
      this.setState({
        searchSupplier: resultFromServer.data.value

      });
    })
  }
  render(){
      return (

        <div>


          <input onChange = {this.handleChange.bind(this)} placeholder = {this.state.placeHolder}/>



        </div>


    )
  }

}


export default SearchBar;
