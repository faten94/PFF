import React, {Component} from 'react';
import axios from "axios";



class CommentSupplier extends Component{
  constructor(props){
      const url = window.location.href;
        const urlArray = url.split('/');
        const urlLength = urlArray.length-1
        const supplierId = urlArray[urlLength]

    super(props);
    this.state = {
            comments: [],
            supplierId: supplierId
        };
    }

    getCommentsbySupplier = () => {
       const params = {supplierId : this.state.supplierId}
        axios
            .get("http://localhost:8080/suppliers/comments/" +this.state.supplierId, {params})
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
                    
                </tr>
            )
        });
    return (commentsList);
    }

    async componentDidMount() {


        await this.getCommentsbySupplier();
    }

    render() {
        let comments = this.state.comments;
        return (
            <div>
                 
              

                <h2 className="title">Commentaires</h2>

                <table id='comments'>

                    <thead>
                        <tr>
                            <td>Contenu</td>
                            <td>Date</td>
                            <td>commentaires</td>
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
