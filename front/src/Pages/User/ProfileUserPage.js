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
        }
        )
      }

      test = (devis) =>{

        if(devis.price){
            return(

          <div>
          <p>  la réponse est : { devis.answer }</p>
          <p> Votre Facture est de : {devis.price} €   </p>
          <PayPalButton
        amount={devis.price}
        currency={EUR}
        merchantID='PVPCLN53UJUGJ'
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
 
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
            <div> Votre devis est en attente de validation </div>
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