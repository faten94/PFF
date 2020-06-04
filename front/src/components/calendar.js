import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Cookies from 'js-cookie';

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
      user: ""
    }
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
            console.log(err)
        })

  }
  render(){
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
}
export default Calendar
