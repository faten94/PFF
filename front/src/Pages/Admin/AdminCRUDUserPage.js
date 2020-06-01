import React, { Component } from 'react';
import axios from "axios";
import { isAuthenticated } from "../../auth/auth"
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

class AdminCRUDUserPage extends Component {
    constructor(props) {
        super(props);
        const url = window.location.href;
        const urlArray = url.split('/');
        const urlLength = urlArray.length-1
        const userId = urlArray[urlLength]
        this.state = {
            firstname: "",
            oldfirstname: "",
            lastname: "",
            oldlastname: "",
            email: "",
            oldemail: "",
            address: "",
            oldaddress: "",
            phone: "",
            oldphone: "",
            date: "",
            olddate: "",
            oldpassword: "",
            password: "",
            userId: userId
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
            userId: this.state.userId,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            address: this.state.address,
            phone: this.state.phone,
            date: this.state.date,
            password: this.state.password
        }
        if (this.state.password == '') data.password = this.state.oldpassword
        if (this.state.lastname == '') data.lastname = this.state.oldlastname
        if (this.state.firstname == '') data.firstname = this.state.oldfirstname
        if (this.state.email == '') data.email = this.state.oldemail
        if (this.state.address == '') data.address = this.state.oldaddress
        if (this.state.phone == '') data.phone = this.state.oldphone
        if (this.state.date == '') data.date = this.state.olddate
        axios.post('http://localhost:8080/admin/users/settings/:userId', data, {headers: headers})
        .then(res => {
            window.location.reload(false)
        })
    }
    
    componentDidMount() {
        const headers = {'authorization': Cookies.get('token')}
        const params = {userId : this.state.userId}
        axios.get('http://localhost:8080/admin/users/settings/'+this.state.userId, {headers: headers}, {params})
        .then(res => {
            this.setState({
                firstname: res.data.firstname,
                oldfirstname: res.data.firstname,
                lastname: res.data.lastname,
                oldlastname: res.data.lastname,
                email: res.data.email,
                oldemail: res.data.email,
                address: res.data.address,
                oldaddress: res.data.address,
                phone: res.data.phone,
                oldphone: res.data.phone,
                date: res.data.date,
                olddate: res.data.date
            })
        })
        .catch(error => console.log(error));
    }
    
    render() {
        return (
            <div>
                 <Link to="/admin/users">
                    <button>
                        Retour
                    </button>
                </Link>
            <h1 className="title">Compte</h1>
            
            <img className="photo"
            src="#"
            alt="ID n*" />
            
            <br></br>
            
            <label htmlFor="photo">Telechargez une photo de profil:</label>
            
            <input type="file"
            id="photo" name="photo"
            accept="image/png, image/jpeg"></input>
            
            <br></br>
            <br></br>
            
            <form onSubmit={this.handleSubmit}>
            <table className="hoverTable">
            <theard></theard>
            <tbody>
            <tr>
            <td>Nom</td>
            <td>{this.state.oldfirstname}</td>
            <input name="firstname" onChange={this.handleChange} type="text" pattern="^\S{3,20}$" placeholder="New username"></input>
            </tr>
            <tr>
            <td>Prenom</td>
            <td>{this.state.oldlastname}</td>
            <input name="lastname" onChange={this.handleChange} type="text" pattern="^\S{3,20}$" placeholder="New username"></input>
            </tr>
            <tr>
            <td>Adresse</td>
            <td>{this.state.oldaddress}</td>
            <div><input name="adress" onChange={this.handleChange} type="text" placeholder="new address"/></div>
            </tr>
            <tr>
            <td>Numero de telephone</td>
            <td>{this.state.oldphone}</td>
            <div><input name="email" onChange={this.handleChange} type="text" placeholder="new phone numner"/></div>
            </tr>
            <tr>
            <td>Adresse email</td>
            <td>{this.state.oldemail}</td>
            <div><input name="email" onChange={this.handleChange} type="text" placeholder="new email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" oninvalid="this.setCustomValidity('Invalid email')" oninput="this.setCustomValidity('')"/></div>
            </tr>
            <tr>
            <td>Mot de passe</td>
            <td>**********</td>
            <div><input name="password" onChange={this.handleChange} type="password" oninput="this.setCustomValidity(this.validity.patternMismatch ? 'Invalid password' : ''); if(this.checkValidity()) form.password_confirmation.pattern = this.value;"  placeholder="New password"></input></div>
            </tr>
            <tr>
            <td>Date d'enregistrement</td>
            <td>{this.state.olddate}</td>
            <td><input type="submit" value="Submit" /></td>
            {/* <div><input type="password" name="password_confirmation" oninput="this.setCustomValidity(this.validity.patternMismatch ? 'Invalid password' : '');"  pattern="^\S{8,20}$" placeholder="Verify Password"></input></div> */}
            </tr>
            </tbody>
            </table>
            </form>
            <br></br>
            <div>Changez une ou plusieurs informations de votre profil.
            <br></br>
            
            </div>
            </div>
            );
        };
    }
    
    export default AdminCRUDUserPage;