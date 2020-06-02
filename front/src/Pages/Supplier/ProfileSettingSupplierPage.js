import React, { Component } from 'react';
import axios from "axios";
import Error404 from '../Error404Page'
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";


class ProfileSettingSupplierPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastname: "",
            firstname: "",
            email: "",
            password: "",
            photo: "",
            typesupplier: "",
            siret: "",
            adress: "",
            zip: "",
            city: "",
            phonne: "",
            expertise: "",
            date: "",
            location: "",
            service: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        var headers = {'authorization': Cookies.get('token')}
        var supplier = {
            email: this.state.oldemail,
            password: this.state.oldpassword
        };
        
        axios.post('http://localhost:8080/supplierLogin', {
        email: this.state.email,
        password: this.state.oldpassword
    })
    .then( (res, err) =>{
        if(res.status===200){
            let data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                photo:this.state.photo,
                typesupplier: this.state.typesupplier,
                siret: this.state.siret,
                address: this.state.address,
                zip: this.state.zip,
                city: this.state.city,
                phone: this.state.phone,
                expertise: this.state.expertise,
                date: this.state.date,
                location: this.state.location,
                service: this.state.service
                
            }
            if (this.state.password == '') data.password = this.state.oldpassword
            if (this.state.lastname == '') data.lastname = this.state.oldlastname
            if (this.state.firstname == '') data.firstname = this.state.oldfirstname
            if (this.state.email == '') data.email = this.state.oldemail
            if (this.state.address == '') data.address = this.state.oldaddress
            if (this.state.phone == '') data.phone = this.state.oldphone
            if (this.state.date == '') data.date = this.state.olddate
            axios.post('http://localhost:8080/settings/suppliers', data, {headers: headers})
            .then(res => {
                window.location.reload(false)
            })
        }
    })
    .catch(error => alert('Password confirmation failed, please input your current password.'));
}

componentDidMount() {
    const headers = {'authorization': Cookies.get('token')}
    axios.get('http://localhost:8080/settings/suppliers', {headers: headers})
    .then(res => {
        this.setState({
            firstname: res.data.firstname,
            oldfirstname: res.data.firstname,
            lastname: res.data.lastname,
            oldlastname: res.data.lastname,
            email: res.data.email,
            oldemail: res.data.email,
            photo: res.data.photo,
            oldphoto: res.data.oldphoto,
            typesupplier: res.data.typesupplier,
            oldtypesupplier: res.data.oldtypesupplier,
            siret: res.data.siret,
            oldsiret: res.data.oldsiret,
            address: res.data.address,
            oldaddress: res.data.address,
            zip: res.data.zip,
            oldzip: res.data.oldzip,
            city: res.data.city,
            oldcity: res.data.oldcity,
            phone: res.data.phone,
            oldphone: res.data.phone,
            expertise: res.data.expertise,
            oldexpertise: res.data.oldexpertise,
            date: res.data.date,
            olddate: res.data.date,
            location: res.data.location,
            oldlocation: res.data.oldlocation,
            service: res.data.service,
            oldservice: res.data.oldservice,
        })
    })
    .catch(error => console.log(error));
}
deleteAccount = () => {
    var headers = {'authorization': Cookies.get('token')}
    var user = {
        email: this.state.oldemail,
        password: this.state.oldpassword
    };
    
    axios.post('http://localhost:8080/supplierLogin', {
    email: this.state.email,
    password: this.state.oldpassword
})
.then( (res, err) =>{
    if(res.status===200){
        axios.delete('http://localhost:8080/settings/suppliers', {headers: headers})
        .then(res => {
            Cookies.remove('token');
            window.location.reload(false)
        })
    }
})
}


render() {
    if(Cookies.get('token') == undefined){
        return <Error404/>
    }
    return (
        <div>
        <h1 className="title">Editer</h1>
        
        <img class="photo"/>
        
        <br></br>
        
        <label for="photo">Telechargez une photo de profil : </label>
        <input type="file"
        id="photo" name="photo"
        accept="image/png, image/jpeg"></input>
        
        <br></br>
        <br></br>
        <form onSubmit={this.handleSubmit}>
        <table className="">
        <tr>
        <td>Nom</td>
        <td>{this.state.lastname}</td>
        <td>
        <input
        type="text"
        name="lastname"
        onChange={this.handleChange}
        id="lastname"
        placeholder="Nom"
        />
        </td>
        </tr>
        <tr>
        <td>Prenom</td>
        <td>{this.state.firstname}</td>
        <td><input
        type="text"
        name="firstname"
        onChange={this.handleChange}
        id="firstname"
        placeholder="Prenom"
        /></td>
        </tr>
        <tr>
        <td>Adresse email</td>
        <td>{this.state.email}</td>
        <td><input
        type="email"
        name="email"
        onChange={this.handleChange}
        id="email"
        placeholder="Email"
        /></td>
        </tr>
        <tr>
        <td>Mot de passe</td>
        <td>***********</td>
        <td><input
        type="password"
        name="password"
        onChange={this.handleChange}
        id="password"
        placeholder="password"
        /></td>
        </tr>
        <tr>
        <td>Type de fournisseur</td>
        <td>{this.state.typesupplier}</td>
        <td>
        <input type="radio" onChange={this.handleChange} id="particulier" name="typesupplier" value="particulier"/>
        <label for="particulier">Particulier</label>
        <br></br>
        <input type="radio" onChange={this.handleChange} id="professionel" name="typesupplier" value="professionel" />
        <label for="professionel">Professionel</label>
        </td>
        </tr>
        <tr>
        <td>Numero de siret</td>
        <td>{this.state.siret}</td>
        <td><input
        type="tel"
        name="siret"
        onChange={this.handleChange}
        id="siret"
        placeholder="Numero de siret"
        /></td>
        </tr>
        <tr>
        <td>Code postal</td>
        <td>{this.state.zip}</td>
        <td><input
        type="tel"
        name="zip"
        onChange={this.handleChange}
        id="zip"
        pattern="[0-9]{5}"
        placeholder="Code postal"
        /></td>
        </tr>
        <tr>
        <td>Adresse</td>
        <td>{this.state.address}</td>
        <td><input
        type="text"
        name="address"
        onChange={this.handleChange}
        id="address"
        placeholder="Adresse"
        /></td>
        </tr>
        <tr>
        <td>Ville</td>
        <td>{this.state.city}</td>
        <td><input
        type="text"
        onChange={this.handleChange}
        name="city"
        id="phone"
        placeholder="VIlle"
        /></td>
        
        </tr>
        <tr>
        <td>Numero de telephone</td>
        <td>{this.state.phone}</td>
        <td><input
        type="text"
        onChange={this.handleChange}
        name="phone"
        id="phone"
        placeholder="Numero de telephone"
        /></td>
        </tr>
        <tr>
        <td>Service</td>
        <td>{this.state.service}</td>
        <td>
        <label>
        <input list="service" name="service" onChange={this.handleChange}/>
        </label>
        <datalist id="service">
        <option value="Plomberie" />
        <option value="Menage" />
        <option value="Cuisine" />
        <option value="Jardinerie" />
        <option value="Baby-sitting" />
        <option value="Clown" />
        </datalist>
        </td>
        </tr>
        <td>Confirmation</td>
        <td><input type="password" onChange={this.handleChange} name="oldpassword" placeholder="Old password" required></input></td>  
        <button type="submit" value="Mettre à jour" onClick={this.handleSubmit}>
        <br></br>
        Valider les modifications
        </button>
        <br></br>
        <button value="Delete" onClick={this.deleteAccount} href="/Logout">
        Supprimer le profil
        </button>
        </table>
        </form>
        <br></br>
     
        <br></br>
        <Link to = {"/accountSupplier"} className="btn btn-raised btn-success mr-5">
        Retourner sur la page Profil
        </Link>-
        </div>
        );
    };
}

export default ProfileSettingSupplierPage;