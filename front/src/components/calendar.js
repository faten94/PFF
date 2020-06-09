import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
//import {Redirect} from 'react-router-dom';
//import { localStorage } from 'react';

class Calendar extends Component {

  constructor(props){
    const url = window.location.href;
    const urlArray = url.split('/');
    const urlLength = urlArray.length - 1
    const supplierId = urlArray[urlLength]
    console.log(props);

    super(props)

    this.state={
      startdate: new Date(),
      content: [],
      supplierId: supplierId,
      user: "",
      x: false,

    }
      localStorage.setItem('supplierId', this.state.supplierId)
    this.handelStartdatechange = this.handelStartdatechange.bind(this);
    this.handelContentchange = this.handelContentchange.bind(this);
  }

  handelStartdatechange=(e) =>{
    console.log(e)
    this.setState({
      startdate: e
    })

  }
  handelContentchange=(e) =>{
    console.log(e)
    this.setState({
      content: e.target.value
    })
  }
  Devis = (e) =>{
    console.log("ligne47", this.state.supplierId)

    const headers = { 'authorization': Cookies.get('token') }
    axios.post("http://localhost:8080/devis" ,{
      supplierId: this.state.supplierId,
      content: this.state.content,
      startdate: this.state.startdate

    }
    , { headers: headers })
        .then((response) => {
            console.log("Success")
        })
        .catch((err) => {
            console.log("err")

        })

  }
  render(){
    /*return (
<Redirect to={{
  pathname: '/supplier/edit/',
  params: {supplierId: "Toto"}
}}/>
)*/

    if(Cookies.get('token')){

    return (
        <div>


        <DatePicker selected={this.state.startdate}

        onChange={this.handelStartdatechange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
        />

          <div>
          <input type="text" placeholder="rediger votre probleme" value={this.state.content} onChange={this.handelContentchange} />
          </div>
          <button onClick={this.Devis}>Demmande de devis</button>
        </div>
    );

  }
  else {
    return (
    <div>
    <Link to ="/registeruser">pour prendre un RDV ou passer votre demande vous devez devez vous inscrire  </Link>
<br/>

    sinon
    <br/>
    <Link to ="/loginUser">si vous avez deja un compte, veuillez vous connecter </Link>
    </div>
  );
}
}
}



export default Calendar
