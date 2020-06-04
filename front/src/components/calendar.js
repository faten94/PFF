import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class Calendar extends Component {

  constructor(props){
    super(props)
    this.state={
      startdate: new Date(),
      content: []
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
    axios.post("http://localhost:8080/devis",{
      content: this.state.content,
      startdate: this.state.startdate

    })
    .then((response)=>{
      console.log(response)

    })

  }
  render(){
    return (
        <div>

        <DatePicker selected={this.state.startdate}

        onChange={this.handelStartdatechange}/>

          <div>
          <input type="text" placeholder="rediger votre probleme" value={this.state.content} onChange={this.handelContentchange} />
          </div>
          <button onClick={this.Devis}>Demmande de devis</button>
        </div>
    );

  }
}
export default Calendar
