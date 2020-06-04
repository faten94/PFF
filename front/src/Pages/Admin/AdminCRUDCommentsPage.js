import React, { Component } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

class AdminCRUDCommentsPage extends Component {    
        constructor(props) {
            super(props);
            const url = window.location.href;
            const urlArray = url.split('/');
            const urlLength = urlArray.length-1
            const commentId = urlArray[urlLength]
            console.log("Comment ID",commentId)
            this.state = {
                content:"",
                date: "",
                note: "",
                user: "",
                supplier:"",
                commentId: commentId,
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        handleChange = async (e) => {
            await this.setState({
                [e.target.name]: e.target.value
            });
        }
        
        handleSubmit(event) {
            event.preventDefault();
            const headers = {'authorization': Cookies.get('token')}
            let data = {
                commentId: this.state.commentId,
                content: this.state.content,
                date: this.state.date,
                note: this.state.note,
                user: this.state.user,
                supplier: this.state.supplier,
            }
            if (this.state.content === '') data.content = this.state.oldcontent
            if (this.state.date === '') data.date = this.state.olddate
            if (this.state.note === '') data.note = this.state.oldnote
            if (this.state.user === '') data.user = this.state.olduser
            if (this.state.supplier === '') data.supplier= this.state.oldsupplier
            
            axios.post('http://localhost:8080/admin/comments/settings/:commentId', data, {headers: headers})
            .then(res => {
                window.location.reload(false)
            })
        }
        
        componentDidMount() {
            const headers = {'authorization': Cookies.get('token')}
            const params = {commentId : this.state.commentId}
            axios.get('http://localhost:8080/admin/comments/settings/'+this.state.commentId, {headers: headers}, {params})
            .then(res => {
                this.setState({
                    content: res.data.content,
                    oldcontent: res.data.content,
                    date: res.data.date,
                    olddate: res.data.date,
                    note: res.data.note,
                    oldnote: res.data.note,
                    user: res.data.user,
                    olduser: res.data.user,
                    supplier: res.data.supplier,
                    oldsupplier: res.data.supplier,

                })
            })
            .catch(error => console.log(error));
        }
        
        render() {
            return (
                <div className = "container">
                <div>
                     <Link to="/admin/comments">
                        <button>
                            Retour
                        </button>
                    </Link>
                <h1 className="title">Compte</h1>
                
              
                
                <br></br>
                <br></br>
                <br></br>
                
                <form onSubmit={this.handleSubmit}>
                <table className="hoverTable">
                <theard></theard>
                <tbody>
                <tr>
                <td>Contenu</td>
                <td>{this.state.oldcontent}</td>
                <input name="content" onChange={this.handleChange} type="text" placeholder="New content"></input>
                </tr>
                <tr>
                <td>date</td>
                <td>{this.state.olddate}</td>
                <input name="date" onChange={this.handleChange} type="text" placeholder="New date"></input>
                </tr>
                <tr>
                <td>Note</td>
                <td>{this.state.oldnote}</td>
                <div><input name="note" onChange={this.handleChange} type="text" placeholder="New note"/></div>
                </tr>
                <tr>
                <td>Utilisateur</td>
                <td>{this.state.olduser}</td>
                <div><input name="user" onChange={this.handleChange} type="text" placeholder="new user"/></div>
                </tr>
                <tr>
                <td>Fournisseur</td>
                <td>{this.state.oldsupplier}</td>
                <div><input name="supplier" onChange={this.handleChange} type="text" placeholder="new supplier" oninvalid="this.setCustomValidity('Invalid email')" oninput="this.setCustomValidity('')"/></div>
                </tr>
                <tr>
               <td><input type="submit" value="Submit" /></td>
                {/* <div><input type="password" name="password_confirmation" oninput="this.setCustomValidity(this.validity.patternMismatch ? 'Invalid password' : '');"  pattern="^\S{8,20}$" placeholder="Verify Password"></input></div> */}
                </tr>
                </tbody>
                </table>
                </form>
                <br></br>
                <div>Changez une ou plusieurs informations de votre profil.
                <br></br>
                
                </div>
                </div>
                </div>
                );
            };
        }
        
    
    export default AdminCRUDCommentsPage;