import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";


class AdminCommentsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    getAllComments = () => {
        const headers = { 'authorization': Cookies.get('token') }
        axios
            .get("http://localhost:8080/admin/comments", { headers: headers })
            .then((response) => {
                console.log("getAllusers response", response);
                console.log("getAllusers response.data", response.data);
                this.setState({ comments: response.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    displayComments = (comments) => {
        const getAllComments = comments;
        //  console.log("json", JSON.stringify(getAllUsers));
        const commentsList = getAllComments.map((comment) => {
            return (
                <tr key={comment.id}>
                    <td>{comment.content}</td>
                    <td>{comment.date}</td>
                    <td>{comment.note}</td>
                    <td>{comment.user}</td>
                    <td>{comment.supplier}</td>
                    <td>
                        <Link to={"/admin/comment/"+comment._id}>
                            <button name={comment._id} value={comment._id}>{comment._id}</button>
                        </Link>
                    </td>
                </tr>
            )
        });
        return (commentsList);
    }

    async componentDidMount() {
        await this.getAllComments();
    }

    render() {
        let comments = this.state.comments;
        return (
            <div>
                 <Link to="/admin">
                    <button>
                        Retour
                    </button>
                </Link>
                <h1 className="title">Admin</h1>

                <h2 className="title">CRUD Comment</h2>

                <table id='users'>

                    <thead>
                        <tr>
                            <td>Contenu</td>
                            <td>Date</td>
                            <td>Note</td>
                            <td>Id Utilisateur</td>
                            <td>Id Fournisseur</td>
                            <td>id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayComments(comments)}
                    </tbody>
                </table>
            </div>
        );
    };
}

export default AdminCommentsPage;