import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";


class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: 'false',
        };
    }
    
    getAllUsers = () => {
        const headers = { 'authorization': Cookies.get('token') }
        axios
        .get("http://localhost:8080/admin/users", { headers: headers })
        .then((response) => {
            console.log('admin status verified')
            this.setState({ admin: 'true' })
        })
        .catch((err) => {
            console.log(err);
            console.log('DENIED')
            window.location.href = "http://localhost:3000/404";
        })
    }
    
    async componentDidMount() {
        await this.getAllUsers()
    }
    
    render() {
        if(this.state.admin === 'false'){
            return(
                <div></div>
                )
            }
            else{
                
                return (
                    <div className="container">
                    <h1 className="title">Admin</h1>
                    
                    <Link to="/admin/users">
                    <button>
                    Afficher les utilisateurs
                    </button>
                    </Link>
                    <Link to="/admin/suppliers">
                    <button>
                    Afficher les fournisseurs
                    </button>
                    </Link>
                    <Link to="/admin/comments">
                    <button>
                    Afficher les commentaires
                    </button>
                    </Link>
                    {/* <Link to="/admin/quotes">
                    <button>
                    Afficher les devis
                    </button>
                    </Link> */}
                    </div>
                    )
                }
            }
        };
        
        export default AdminPage;