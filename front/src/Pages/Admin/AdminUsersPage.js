import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";


class AdminUsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    getAllUsers = () => {
        const headers = { 'authorization': Cookies.get('token') }
        axios
            .get("http://localhost:8080/admin/users", { headers: headers })
            .then((response) => {
                console.log("getAllusers response", response);
                console.log("getAllusers response.data", response.data);
                this.setState({ users: response.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    displayUsers = (users) => {
        const getAllUsers = users;
        //  console.log("json", JSON.stringify(getAllUsers));
        const usersList = getAllUsers.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.lastname}</td>
                    <td>{user.firstname}</td>
                    <td>{user.address}</td>
                    <td>{user.photo}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.date}</td>
                    <td>
                        <Link to={"/admin/user/"+user._id}>
                            <button name={user._id} value={user._id}>{user._id}</button>
                        </Link>
                    </td>
                </tr>
            )
        });
        return (usersList);
    }

    async componentDidMount() {
        await this.getAllUsers();
    }

    render() {
        let users = this.state.users;
        return (
            <div className="container">
                <Link to="/admin">
                    <button>
                        Retour
                    </button>
                </Link>
                <Link to="/admin/user/create">
                    <button>
                        Create User
                    </button>
                </Link>
                <h1 className="title">Admin</h1>

                <h2 className="title">CRUD User</h2>

                <table id='users'>

                    <thead>
                        <tr>
                            <td>Nom</td>
                            <td>Prenom</td>
                            <td>Adresse</td>
                            <td>Photo</td>
                            <td>Telephone</td>
                            <td>Email</td>
                            <td>Role</td>
                            <td>Date d'inscription</td>
                            <td>id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayUsers(users)}
                    </tbody>
                </table>
            </div>
        );
    };
}

export default AdminUsersPage;