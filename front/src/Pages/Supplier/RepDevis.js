import React from 'react';
import axios from 'axios';
import DisplayDevis from '../../components/devis/Devis'

class RepDevis extends React.Component {

    constructor(props)
    {
        super(props)

       // this.DisplayDevis = this.DisplayDevis.bind(this)
        this.getDevisbyId =this.getDevisbyId.bind(this)
        this.Answer = this.Answer.bind(this)
        this.handleAnswerChange = this.handleAnswerChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)

        const url = window.location.href;
        const urlArray = url.split('/');
        const urlLength = urlArray.length - 1
        const devisId = urlArray[urlLength]


        this.state =
        {
            recupdata:'',
            data:'',
            content:'',
            date:null,
            devisId:devisId,
            answer:'',
            price:''
        }
    }

    getDevisbyId = async () =>
    {

        const params = {_id: this.state.devisId }

        await axios.post('http://localhost:8080/getdevisid/',{ params })
        .then((response)=>{

          this.setState(
            {
                 data: response.data
            });
            console.log(this.state.data)
        })
        return (this.state.data)
      }

      handleAnswerChange = (e) =>
      {
        console.log(e.target.value);
           this.setState({
             answer: e.target.value
           })
        }

         handlePriceChange = (e) => {
            console.log(e.target.value);
               this.setState({
                 price: e.target.value
               })
             }


      Answer = async(e) => {

        //console.log(this.state.devisId)
        await axios.post("http://localhost:8080/devisres",
        {
            price: this.state.price,
            answer: this.state.answer,
            _id: this.state.devisId

        })
        .then((response) => {
            console.log("reponse envoyé")
        })
        .catch((err) => {
            console.log("err")
        })
      }




    render() {
        return(
            <div>
                <button  onClick={this.getDevisbyId}> Afficher le detail du devis</button>
                <br/>
                <div> {this.state.data.content}  </div>
                <br/>
                <div> {this.state.data.daterdv}  </div>

                <input value={this.state.answer} onChange = {this.handleAnswerChange}  placeholder = " Taper la reponse " />
                <input value={this.state.price} onChange = {this.handlePriceChange}  placeholder = " entrez le prix " />
                <button  onClick={this.Answer}> Envoyer la reponse </button>

            </div>
        )

    }
}

export default RepDevis
