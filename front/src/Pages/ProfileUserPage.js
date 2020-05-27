import React, { Component } from 'react';


class ProfileUserPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {

    };

    render() {
        return (
            <div>
                <h1 className="title">Compte</h1>

                <img class="photo"
                    src="#"
                    alt="ID n*" />

                <br></br>

                <label for="photo">Telechargez une photo de profil:</label>

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