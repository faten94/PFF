import React, { Component } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { PayPalButton } from "react-paypal-button-v2";

class ProfileUserPage extends Component {
    constructor(props){
        super(props)
       
        this.state = {
            data:[],
            price:true
            
        
        } 
        this.getMyDevis = this.getMyDevis.bind(this)
        this.DisplayDevis = this.DisplayDevis.bind(this)
        this.test = this.test.bind(this)
    }

    getMyDevis = async() => 
    {
        const headers = { 'authorization': Cookies.get('token') }
       
        const params = ''
        await axios.post('http://localhost:8080/getDevisUser/',{}, {headers:headers})
        .then((response)=>
        {
            this.setState(
                {
                     data: response.data
                });

                console.log(this.state.data)
                return (this.state.data)
        })
    }

    DisplayDevis = (data) =>{
    
        if (!data.length) return null
        console.log(data)
        return data.map((devis, index)=>{
            return(
               <div key={index} > {this.test(devis)} </div> 
                )
        })
      }

      test = (devis) =>{

        if(devis.price)
        {
            return(

          <div>
          <h3>  Paiement en attente de validation </h3>
          <p> Contenu de la Reponse : { devis.answer }</p>
          <p> Votre Facture est de : {devis.price} €   </p>
          <PayPalButton
        options={{clientId: "AYr0M7mpx_IGEBPiDzqhR395tlT5lkTUTJ55yHILg-5dfjnMbqDWEf5_faWUutBNdp3aNTfsRLpkT8h2", currency: "EUR"}}
        amount={devis.price}
        
        onSuccess={(details, data) => {
          alert("Transaction réussie !!");
 
          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
          </div>
            )
        }
        else
        return(
            <div>
            <h3>  Devis en attente  </h3>
             Votre devis " {devis.title} " est en cours de validation </div>
        )   
      }
    
    
    render(){
       
            return(
            <div>
                <button onClick={this.getMyDevis} >  Mes devis </button>
                <div> {this.DisplayDevis(this.state.data) } </div>
            
            </div>
            )
        
       
    }
}

export default ProfileUserPage  