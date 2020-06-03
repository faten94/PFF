import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";


class AdminSuppliersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suppliers: [],
        };
    }

    getAllSuppliers = () => {
        const headers = { 'authorization': Cookies.get('token') }
        axios
            .get("http://localhost:8080/admin/suppliers", { headers: headers })
            .then((response) => {
                console.log("getAllusers response", response);
                console.log("getAllusers response.data", response.data);
                this.setState({ suppliers: response.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    displaySuppliers = (suppliers) => {
        const getAllSuppliers = suppliers;
        //  console.log("json", JSON.stringify(getAllUsers));
        const suppliersList = getAllSuppliers.map((supplier) => {
            return (
                <tr key={supplier.id}>
                    <td>{supplier.lastname}</td>
                    <td>{supplier.firstname}</td>
                    <td>{supplier.typesupplier}</td>
                    <td>{supplier.siret}</td>
                    <td>{supplier.address}</td>
                    <td>{supplier.zip}</td>
                    <td>{supplier.city}</td>
                    <td>{supplier.photol}</td>
                    <td>{supplier.phone}</td>
                    <td>{supplier.email}</td>
                    <td>{supplier.expertise}</td>
                    <td>{supplier.location}</td>
                    <td>{supplier.service}</td>
                    <td>{supplier.date}</td>


                    <td>
                        <Link to={"/admin/supplier/"+supplier._id}>
                            <button name={supplier._id} value={supplier._id}>{supplier._id}</button>
                        </Link>
                    </td>
                </tr>
            )
        });
        return (suppliersList);
    }

    async componentDidMount() {
        await this.getAllSuppliers();
    }

    render() {
        let suppliers = this.state.suppliers;
        return (
            <div>
                <Link to="/admin">
                    <button>
                        Retour
                    </button>
                </Link>
                <Link to="/admin/supplier/create">
                    <button>
                        Create Supplier
                    </button>
                </Link>
                <h1 className="title">Admin</h1>

                <h2 className="title">CRUD Fournisseurs</h2>

                <table id='users'>

                    <thead>
                        <tr>
                            <td>Nom</td>
                            <td>Prenom</td>
                            <td>Type de fournisseur</td>
                            <td>Siret</td>
                            <td>Adresse</td>
                            <td>Code postal</td>
                            <td>Ville</td>
                            <td>Photo</td>
                            <td>Telephone</td>
                            <td>Email</td>
                            <td>Expertise</td>
                            <td>Emplacement / Location</td>
                            <td>Prestation</td>
                            <td>Date d'inscription</td>
                            <td>id</td>    
                        </tr>
                    </thead>
                    <tbody>
                        {this.displaySuppliers(suppliers)}
                    </tbody>
                </table>
            </div>
        );
    };
}

export default AdminSuppliersPage;