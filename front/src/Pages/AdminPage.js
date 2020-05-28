import React, { Component } from 'react';


class AdminPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {

    };

    render() {
        return (
            <div>
                <h1 className="title">Admin</h1>

                <h2 className="title">CRUD User</h2>

                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Mot de passe</th>
                        <th>Adresse</th>
                        <th>Photo</th>
                        <th>Numero de telephone</th>
                        <th>Email</th>
                        <th>role</th>
                        <th>date d'inscription</th>
                        <th>supprimer</th>
                    </tr>
                    <tr>
                        <td>get ID info from db</td>
                        <td><input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Doe"
                        /></td>
                        <td><input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="John"
                        /></td>
                        <td><input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="point point point"
                        /></td>
                        <td><input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Adresse"
                        /></td>
                        <td> <img class="photo"
                            src="#"
                            alt="ID n*" />

                            <br></br>

                            <label for="photo">Telechargez une photo de profil:</label>

                            <input type="file"
                                id="photo" name="photo"
                                accept="image/png, image/jpeg"></input></td>
                        <td><input
                            type="tel"
                            name="phone"
                            id="phone"
                            pattern="[0]{1}-[0-9]{9}"
                            placeholder="Numero de telephone"
                        /></td>
                        <td><input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        /></td>
                        <td>get role info from db</td>
                        <td>get date info from db</td>
                        <td>X</td>
                    </tr>
                </table>


                <button>
                    cliquez ici pour valider la modification des profils
                    </button>
                <br></br>

                <h2 className="title">CRUD Fournisseurs</h2>

                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Mot de passe</th>
                        <th>Photo</th>
                        <th>Type de Fournisseurs</th>
                        <th>Numero de Siret</th>
                        <th>Code postal</th>
                        <th>Adresse</th>
                        <th>Ville</th>
                        <th>Numero de telephone</th>
                        <th>date d'inscription</th>
                        <th>expertise</th>
                        <th>supprimer</th>
                    </tr>
                    <tr>
                        <td>get ID info from db</td>
                        <td><input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Doe"
                        /></td>
                        <td><input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="John"
                        /></td>
                        <td><input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        /></td>
                        <td><input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="point point point"
                        /></td>
                        <td> <img class="photo"
                            src="#"
                            alt="ID n*" />

                            <br></br>

                            <label for="photo">Telechargez une photo de profil:</label>

                            <input type="file"
                                id="photo" name="photo"
                                accept="image/png, image/jpeg"></input></td>
                        <td><input
                            type="text"
                            name="typesupplier"
                            id="typesupplier"
                            placeholder="Type de fournisseur"
                        /></td>
                        <td><input
                            type="tel"
                            name="siret"
                            id="siret"
                            pattern="[0-9]{14}"
                            placeholder="Numero de siret"
                        /></td>
                        <td><input
                            type="tel"
                            name="zip"
                            id="zip"
                            pattern="[0-9]{5}"
                            placeholder="Code postal"
                        /></td>
                        <td><input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Adresse"
                        /></td>
                        <td><input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Ville"
                        /></td>
                        <td><input
                            type="tel"
                            name="phone"
                            id="phone"
                            pattern="[0]{1}-[0-9]{9}"
                            placeholder="Numero de telephone"
                        /></td>
                        <td>get date info from db</td>
                        <td>get expertise info from db</td>
                        <td>X</td>
                    </tr>
                </table>


                <button>
                    cliquez ici pour valider la modification des profils
    </button>
                <br></br>

                <h2 className="title">CRUD Devis</h2>

                <table>
                    <tr>
                        <th>ID</th>
                        <th>Contenu</th>
                        <th>Date</th>
                        <th>Photo</th>
                        <th>Statut</th>
                        <th>Date de RDV</th>
                        <th>ID payment</th>
                        <th>ID Supplier</th>
                        <th>ID Service</th>
                        <th>ID User</th>
                        <th>supprimer</th>
                    </tr>
                    <tr>
                        <td>get ID info from db</td>
                        <td><input
                            type="text"
                            name="content"
                            id="content"
                            placeholder="Contenu"
                        /></td>
                        <td>get Date from db</td>
                        <td> <img class="photo"
                            src="#"
                            alt="ID n*" />

                            <br></br>

                            <label for="photo">Telechargez une photo de profil:</label>

                            <input type="file"
                                id="photo" name="photo"
                                accept="image/png, image/jpeg"></input></td>
                        <td><input
                            type="text"
                            name="status"
                            id="status"
                            placeholder="status"
                        /></td>
                        <td>Date de rdv from db</td>
                        <td>get ID payment from db</td>
                        <td>get ID Supplier info from db</td>
                        <td>get ID User info from db</td>
                        <td>get IDService info from db</td>
                        <td>X</td>
                    </tr>
                </table>

                <button>
                    cliquez ici pour valider la modification des profils
    </button>
                <br></br>

            </div>
        );
    };
}

export default AdminPage;