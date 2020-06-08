import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';



class CommentSupplier extends Component {
    constructor(props) {
        const url = window.location.href;
        const urlArray = url.split('/');
        const urlLength = urlArray.length - 1
        const supplierId = urlArray[urlLength]

        super(props);
        this.state = {
            comments: [],
            content: "",
            supplierId: supplierId,
            user: "",
            note: ""
        };
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleNoteChange = this.handleNoteChange.bind(this);
    }

    createComment = () => {
        const headers = { 'authorization': Cookies.get('token') }
        axios.post("http://localhost:8080/suppliers/createComment/" + this.state.supplierId, {
            supplier: this.state.supplierId,
            content: this.state.content,
            note: this.state.note
            // user: this.state.user
        }, { headers: headers })
            .then((response) => {
                console.log("Success")
                window.location.reload(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getCommentsbySupplier = () => {
        const params = { supplierId: this.state.supplierId }
        axios
            .get("http://localhost:8080/suppliers/comments/" + this.state.supplierId, { params })
            .then((response) => {
                console.log("getAllusers response", response);
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

                </tr>
            )
        });
        return (commentsList);
    }

    async componentDidMount() {
        await this.getCommentsbySupplier();
    }


    handleContentChange = (e) => {
        this.setState({
            content: e.target.value
        })
        this.setState({
            user: Cookies.get('token')
        })
    }

    handleNoteChange(event) {
        this.setState({note: event.target.value});
      }

    render() {
        let comments = this.state.comments;
        return (
            <div>

                <h2 className="title">Commentaires</h2>
                <h3 className="add comment">Ajouter un commentaire</h3>
                <input value={this.state.content} onChange={this.handleContentChange} placeholder=" Commenter" />
                <button onClick={this.createComment}>Valider</button>
                <p>Noter le fournisseur :</p>
                <select value={this.state.note} onChange={this.handleNoteChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <table id='comments'>

                    <thead>
                        <tr>
                            <td>Contenu</td>
                            <td>Date</td>
                            <td>Note</td>
                            <td>Id Utilisateur</td>
                            <td>Id Fournisseur</td>

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
export default CommentSupplier;
