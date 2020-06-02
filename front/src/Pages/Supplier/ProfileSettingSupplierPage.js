import React, { Component } from 'react';


class ProfileSettingSupplierPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {

    };

    getExpertise = () => {
        console.log("a mettre dans le rendu a la place de la liste deroulante expertise en brut")
        {this.state.data.map((item, key) =>
            <option key={key} value={item.displayValue} />
        )}
    }

    render() {
        return (
            <div>
                <h1 className="title">Modification du compte pro</h1>

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
                        <td>Adresse email</td>
                        <td><input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
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
                        <td>Type de fournisseur</td>
                        <td>
                            <input type="radio" id="particulier" name="typesupplier" value="particulier"
                                checked />
                            <label for="particulier">Particulier</label>
                            <br></br>
                            <input type="radio" id="professionel" name="typesupplier" value="professionel" />
                            <label for="professionel">Professionel</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Numero de siret</td>
                        <td><input
                            type="tel"
                            name="siret"
                            id="siret"
                            pattern="[0-9]{14}"
                            placeholder="Numero de siret"
                        /></td>
                    </tr>
                    <tr>
                        <td>Code postal</td>
                        <td><input
                            type="tel"
                            name="zip"
                            id="zip"
                            pattern="[0-9]{5}"
                            placeholder="Code postal"
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
                        <td>Ville</td>
                        <td>input from la table city</td>
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
                        <td>Expertise</td>
                        <td>
                            <label>
                                input from la table service
                                (liste deroulante):
                            <input list="expertise" name="expertise" />
                            </label>
                            <datalist id="expertise">
                                <option value="Plomberie" />
                                <option value="Menage" />
                                <option value="Cuisine" />
                                <option value="Jardinerie" />
                                <option value="Baby-sitting" />
                                <option value="Clown" />
                            </datalist>
                        </td>
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

export default ProfileSettingSupplierPage;