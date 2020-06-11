import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import Pictures from '../../components/pictures';
import fs from 'fs';

class ProfileUserPage extends Component {
    constructor(props) {
        super(props);
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
            photo: "",
            oldphoto: "",
            date: "",
            olddate: "",
            oldpassword: "",
            password: "",
            file: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleChangePicture = async (e) => {
        await this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();
        var headers = {'authorization': Cookies.get('token')}
        var user = {
            email: this.state.oldemail,
            password: this.state.oldpassword
        };
        console.log(user)
        console.log(this.state.oldpassword)

        // const file_buffer = fs.readFileSync('tempImg.jpg')

        await Pictures.convertImage(this.state.file)
            .then(result => {console.log('result '+result)
            { this.setState({photo : result})}
        })
        
        axios.post('http://localhost:8080/login', {
        email: this.state.email,
        password: this.state.oldpassword
    })
    .then( (res, err) =>{
        console.log(res)
        if(res.status===200){

        let data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            address: this.state.address,
            phone: this.state.phone,
            photo: this.state.photo,
            date: this.state.date,
            password: this.state.password
        }
        if (this.state.password === '') data.password = this.state.oldpassword
        if (this.state.lastname === '') data.lastname = this.state.oldlastname
        if (this.state.firstname === '') data.firstname = this.state.oldfirstname
        if (this.state.email === '') data.email = this.state.oldemail
        if (this.state.address === '') data.address = this.state.oldaddress
        if (this.state.phone === '') data.phone = this.state.oldphone
        if (this.state.file === null) data.photo = this.state.oldphoto
        if (this.state.date === '') data.date = this.state.olddate
        // console.log('file '+this.state.file)
        // console.log('photo '+this.state.photo)
        return
        axios.post('http://localhost:8080/settings', data, {headers: headers})
        .then(res => {
            console.log(res)
            window.location.reload(false)
        })
        .catch(error => alert('Upload failed'));
    }
})
// .catch(error => console.log(error), alert('Password confirmation failed, please input your current password.'));
}

deleteAccount = () => {
    var headers = {'authorization': Cookies.get('token')}
    // var user = {
    //     email: this.state.oldemail,
    //     password: this.state.oldpassword
    // };
    
    axios.post('http://localhost:8080/login', {
    email: this.state.email,
    password: this.state.oldpassword
})
.then( (res, err) =>{
    if(res.status===200){
        axios.delete('http://localhost:8080/settings', {headers: headers})
        .then(res => {
            Cookies.remove('token');
            window.location.reload(false)
        })
    }
})
}

componentDidMount() {
    const headers = {'authorization': Cookies.get('token')}
    axios.get('http://localhost:8080/settings', {headers: headers})
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
            photo: res.data.photo,
            oldphoto: res.data.photo,
            date: res.data.date,
            olddate: res.data.date
        })
        console.log(this.state.oldphoto)
    })
    .catch(error => console.log(error));
}

render() {
    
    return (
        <div className="container">
        <h1 className="title">Compte</h1>
        
        <img className="photo" name="oldphoto"
        src={this.state.oldphoto}/>
        
        <br></br>
        
        <label htmlFor="photo">Telechargez une photo de profil:</label>
        
        <br></br>
        <br></br>
        
        <form onSubmit={this.handleSubmit}>
        <input type="file"
        id="photo" name="photo"
        onChange={this.handleChangePicture}
        accept="image/png, image/jpeg"></input>
        <table className="hoverTable">
        
        <thead></thead>
        
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
        <div><input name="address" onChange={this.handleChange} type="text" placeholder="new address"/></div>
        </tr>
        <tr>
        <td>Numero de telephone</td>
        <td>{this.state.oldphone}</td>
        <div><input name="phone" onChange={this.handleChange} type="text" placeholder="new phone numner"/></div>
        </tr>
        <tr>
        <td>Adresse email</td>
        <td>{this.state.oldemail}</td>
        <div><input name="email" onChange={this.handleChange} type="text" placeholder="new email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onInvalid="this.setCustomValidity('Invalid email')" onInput="this.setCustomValidity('')"/></div>
        </tr>
        <tr>
        <td>Mot de passe</td>
        <td>**********</td>
        <div><input name="password" onChange={this.handleChange} type="password" oninput="this.setCustomValidity(this.validity.patternMismatch ? 'Invalid password' : ''); if(this.checkValidity()) form.password_confirmation.pattern = this.value;"  placeholder="New password"></input></div>
        </tr>
        <tr>
        <td>Date d'enregistrement</td>
        <td>{this.state.olddate}</td>
        <td><input type="submit" value="Mettre à jour" /></td>
        {/* <div><input type="password" name="password_confirmation" oninput="this.setCustomValidity(this.validity.patternMismatch ? 'Invalid password' : '');"  pattern="^\S{8,20}$" placeholder="Verify Password"></input></div> */}
        </tr>
        <tr>
        <td>Confirmation</td>
        <div><input type="password" onChange={this.handleChange} name="oldpassword" placeholder="Old password" required></input></div>
        
        <td><button value="Delete" onClick={this.deleteAccount} href="/Logout">Supprimer le compte</button></td>
        
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

export default ProfileUserPage;
