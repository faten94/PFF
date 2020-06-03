import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";


class AdminCRUDSupplierPage extends Component {
    constructor(props) {
        super(props);
        const url = window.location.href;
        const urlArray = url.split('/');
        const urlLength = urlArray.length-1
        const supplierId = urlArray[urlLength]
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
            service: "",
            supplierId: supplierId
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
        const headers = {'authorization': Cookies.get('token')}
        let data = {
            supplierId: this.state.supplierId,
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
        if (this.state.lastname === '') data.lastname = this.state.oldlastname
        if (this.state.firstname === '') data.firstname = this.state.oldfirstname
        if (this.state.email === '') data.email = this.state.oldemail
        if (this.state.password === '') data.password = this.state.oldpassword
        if (this.state.photo === '') data.photo = this.state.oldphoto
        if (this.state.typesupplier === '') data.typesupplier = this.state.oldtypesupplier
        if (this.state.siret === '') data.siret = this.state.oldsiret
        if (this.state.address === '') data.address = this.state.oldaddress
        if (this.state.zip === '') data.zip = this.state.oldzip
        if (this.state.city === '') data.city = this.state.oldcity
        if (this.state.phone === '') data.phone = this.state.oldphone
        if (this.state.expertise === '') data.expertise = this.state.oldexpertise
        if (this.state.date === '') data.date = this.state.olddate
        if (this.state.location === '') data.location = this.state.oldlocation
        if (this.state.service === '') data.service = this.state.oldservice

        axios.post('http://localhost:8080/admin/supplier/settings/:supplierId', data, {headers: headers})
        .then(res => {
            window.location.reload(false)
        })
    }
    
    componentDidMount() {
        const headers = {'authorization': Cookies.get('token')}
        const params = {supplierId : this.state.supplierId}
        axios.get('http://localhost:8080/admin/supplier/settings/'+this.state.supplierId, {headers: headers}, {params})
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
    
    render() {
        return (
            <div>
                 <Link to="/admin/suppliers">
                    <button>
                        Retour
                    </button>
                </Link>
            <h1 className="title">Compte</h1>
          
            <img class="photo" alt="user"/>
        
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
        placeholder="Ville"
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
        <button type="submit" value="Mettre à jour" onClick={this.handleSubmit}>
        <br></br>
        Valider les modifications
        </button>
        <br></br>
        </table>
        </form>
        <br></br>

            </div>
            );
        };



    }
    
    export default AdminCRUDSupplierPage;