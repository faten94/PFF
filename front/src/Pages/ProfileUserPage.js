import React, { Component } from 'react';
import axios from "axios";
import { isAuthenticated } from "../auth/auth"
import { read } from "./apiUser"

class ProfileUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
        }
    }

    // init = () => {
    //     const token = isAuthenticated().token;
    //     read(token)

    //     .then(data => {
    //         if(data.error) {
    //             this.setState({redirect : true});
    //         }
    //         else {
    //             this.setState({ userInfo: data });
    //             console.log(data);
    //         }
    //     });
    // }

    // getUser = () => {
    //     axios
    //       .get("http://localhost:8080/settings/")
    //       .then((response) => {
    //         console.log("response",response);
    //         const data = response.data;
    //         console.log("data",data);
    //         this.setState({ userInfo: data });
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       })
    // }

    componentDidMount() {
        //  axios.defaults.withCredentials = true;
        // axios.get('http://localhost:8080/settings', {'withCredentials': true})
        // .then(res => {
        //     console.log(res);
        // console.log(this.state);
        // this.setState({name: res.data.firstname, email: res.data.email})
        // })
        // .catch(error => console.log(error));
        fetch('http://localhost:8080/settings', {
                method: 'POST',
            credentials: "same-origin"
        })
            .then((res) =>
                console.log("on est dans le component didmount", res)
            ).catch(
                error => console.log(error)
            );
    }

    // displayUser = (res) => {
    //     
    //  }


    render() {
        return (
            <div>
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

                <table className="hoverTable">
                    <tr>
                        <td>Nom</td>
                        <td>info from db</td>
                    </tr>
                    <tr>
                        <td>Prenom</td>
                        <td>info from db</td>
                    </tr>
                    <tr>
                        <td>Mot de passe</td>
                        <td>dot dot dot</td>
                    </tr>
                    <tr>
                        <td>Adresse</td>
                        <td>info from db</td>
                    </tr>
                    <tr>
                        <td>Numero de telephone</td>
                        <td>info from db</td>
                    </tr>
                    <tr>
                        <td>Adresse email</td>
                        <td>info from db</td>
                    </tr>
                    <tr>
                        <td>Date d'inscription</td>
                        <td>info from db</td>
                    </tr>
                </table>
                <br></br>
                <div>Cliquez sur un element du tableau pour le modifier.
                        <br></br>
                    <br></br>
                    <button>
                        cliquez ici pour modifier le profil completement</button></div>
            </div>
        );
    };
}

export default ProfileUserPage;