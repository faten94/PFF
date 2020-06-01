import React, { Component } from "react";
import axios from "axios";
import Error404 from '../Error404Page';
import Cookies from 'js-cookie';
import Avatar from '../../images/avatar.png'
import { Link } from "react-router-dom";



class ProfileSupplier extends Component {
    constructor(props){
        super(props);
        this.state = {
            lastname:"",
            firstname:"",
            email:"",
            password:"",
            photo:"",
            typesupplier:"",
            siret:"",
            adress:"",
            zip:"",
            city:"",
            phone:"",
            expertise:"",
            date:"",
            location:"",
            service:"",
        }
    }
    
    componentDidMount() {
        const headers = {'authorization': Cookies.get('token')}
        axios.get('http://localhost:8080/settings/suppliers', {headers: headers})
        .then(res => {
            this.setState({
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                email: res.data.email,
                city: res.data.city,
                address: res.data.address,
                phone: res.data.phone,
                date: res.data.date,
            })
        })
        .catch(error => console.log(error));
    }
    
    
    render() {
        if(Cookies.get('token') == undefined){
            return <Error404/>
        }
        return (
            <div className="container">
                <h1>Profil de {this.state.lastname} {this.state.firstname}</h1>
                    <div>  
                        <img className ="card-img-top" src={Avatar} alt={this.state.photo} width="400"/>
                    </div>
                <div>
                    <div>
                        <p>Adresse : {this.state.address}</p>
                        <p>Ville : {this.state.city}</p>
                        <p>Email : {this.state.email}</p>
                        <p>Téléphone : {this.state.phone}</p>
                        <p>Date d'inscription : {this.state.date}</p>           
                    </div>             
                </div>  
                <Link to = {"/accountSupplier/edit/"} className="btn btn-raised btn-success mr-5">
                                Editer
                </Link>             
            </div>
                    
            )
            
        }
    }
    
    export default ProfileSupplier;