import React, { Component } from 'react';
import axios from "axios";
import { isAuthenticated } from "../../auth/auth"
import { read } from "../apiUser"
import Cookies from 'js-cookie';

class AdminUsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users :[],
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
        console.log("json", JSON.stringify(getAllUsers));
        const usersList = getAllUsers.map((user) => {
            return (<div>
                <tr key={user.id}>
                    <td>{user.lastname}</td>
                    <td>{user.firstname}</td>
                    <td>{user.password}</td>
                    <td>{user.address}</td>
                    <td>{user.photo}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.date}</td>
                </tr>
            </div>
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
            <div>
            <h1 className="title">Admin</h1>

            <h2 className="title">CRUD User</h2>
            
                <table id='students'>
                    <tbody>
                    <tr>
                    <td>Nom</td>
                    <td>Prenom</td>
                    <td>Password</td>
                    <td>Adresse</td>
                    <td>Photo</td>
                    <td>Telephone</td>
                    <td>Email</td>
                    <td>Role</td>
                    <td>Date d'inscription</td>
                </tr>
                        {this.displayUsers(users)}
                    </tbody>
                </table>
            </div>
        );
    };
}

export default AdminUsersPage;