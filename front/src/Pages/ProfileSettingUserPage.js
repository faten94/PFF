import React, { Component } from 'react';


class ProfileSettingUserPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {

    };

    render() {
        return (
            <div>
                <h1 className="title">Modification du compte</h1>

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

                <table className="">
                    <tr>
                        <td>Nom</td>
                        <td>    
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Doe"
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>Prenom</td>
                        <td><input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="John"
                        /></td>
                    </tr>
                    <tr>
                        <td>Mot de passe</td>
                        <td><input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="point point point"
                        /></td>
                    </tr>
                    <tr>
                        <td>Adresse</td>
                        <td><input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Adresse"
                        /></td>
                    </tr>
                    <tr>
                        <td>Numero de telephone</td>
                        <td><input
                            type="tel"
                            name="phone"
                            id="phone"
                            pattern="[0]{1}-[0-9]{9}"
                            placeholder="Numero de telephone"
                        /></td>
                    </tr>
                    <tr>
                        <td>Adresse email</td>
                        <td><input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        /></td>
                    </tr>
                </table>
                <br></br>
                    <button>
                        cliquez ici pour valider la modification du profil
                    </button>
                    <br></br>
                    <br></br>
                    <button>
                        cliquez ici pour supprimer le profil definitivement
                    </button>
                </div>
        );
    };
}

export default ProfileSettingUserPage;