import React, { Component } from "react";
import axios from "axios";
import Avatar from '../../images/avatar.png'
import {DisplayMapClass} from '../../components/DisplayMapClass';
import Calendar from '../../components/calendar'
import CommentSupplier from '../../components/commentsupplier/commentSupplier'


class ProfileSupplierPage extends Component {
    constructor(props){
        const url = window.location.href;
        const urlArray = url.split('/');
        const urlLength = urlArray.length-1
        const supplierId = urlArray[urlLength]
        super(props);
        this.state = {
            lastname:"",
            firstname:"",
            email:"",
            password:"",
            photo:"",
            typesupplier:"",
            siret:"",
            address:"",
            zip:"",
            city:"",
            phone:"",
            expertise:"",
            date:"",
            location:"",
            service:"",
            supplierId: supplierId
        }
    }
    
    componentDidMount() {
        const params = {supplierId : this.state.supplierId}
        
        axios.get('http://localhost:8080/settings/suppliers/'+this.state.supplierId, {params})
        .then(res => {
            this.setState({
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                email: res.data.email,
                photo: res.data.photo,
                typesupplier: res.data.typesupplier,
                siret : res.data.siret,
                zip: res.data.zip,
                city: res.data.city,
                address: res.data.address,
                phone: res.data.phone,
                expertise: res.data.expertise,
                service: res.data.service,
                location: res.data.location,
                date: res.data.date,
            })
        })
        .catch(error => console.log(error));
    }
    
    
    render() {

        return (
            <div className="container">
                <h1>Profil de {this.state.lastname} {this.state.firstname}</h1>
                    {/* <div> <DisplayMapClass/></div> */}
                    <div>  
                        <img className ="card-img-top" src={Avatar} alt={this.state.photo} width="400"/>
                    </div>
                <div>
                    <div>
                        <p>Adresse : {this.state.address}</p>
                        <p>Ville : {this.state.city}</p>
                        <p>Code postal : {this.state.zip}</p> 
                        <p>Email : {this.state.email}</p>
                        <p>Téléphone : {this.state.phone}</p>
                        <p>Date d'inscription : {this.state.date}</p>           
                        <p>Type de fournisseur : {this.state.typesupplier}</p>
                        <p>Siret : {this.state.siret} </p>
                        <p>Service: {this.state.service}</p>
                    </div>             
                    <div> <Calendar/> </div>
                </div>             
           <CommentSupplier/>
            </div>
                    
            )
            
        }
    }
    
    export default ProfileSupplierPage;