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
            note: "",
            notes:[],
            total:0
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
        // console.log("getAllusers response", response);
        
        // console.log("getAllusers response.data", response.data);
        let total = 0
    const average = []         
        this.setState({ comments: response.data })
        this.state.comments.forEach (element=>{
            average.push(element.note)
            total+=element.note
            })
        this.setState({ notes: average,total:total })
        
    })
        .catch((err) => {
            console.log(err);
        })
    }

    displayComments = (comments) => {
        const getAllComments = comments;


        const reducer = (accumulator, currentValue) => accumulator + currentValue;




    //  console.log("json", JSON.stringify(getAllUsers));
    //const arrAvg = this.state.notes => this.state.notes.reduce((a,b) => a + b, 0) / this.state.notes.length;

    const commentsList = getAllComments.map((comment) => {

         //this.setState({ notes: comment.note })

        //notes = setState(comments.note)

        return (
            <div className="col-md-12">
            <h5 className="text-primary">Posté par {comment.user} le {" "} {new Date(comment.date).toDateString()}</h5>
            <hr />           
            <div>
            <p className="lead">{comment.content}</p>
            <p className="lead">{comment.note}</p>
            <button>Supprimer</button>
            <p className="lead">{this.state.total/this.state.notes.length}</p>

            </div>
            </div>
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

        {this.displayComments(comments)}

        </div>
        );
    };
}
export default CommentSupplier;

