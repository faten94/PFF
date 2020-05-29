import React, { Component } from 'react';
import { Link } from "react-router-dom";


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

            <Link to="/admincruduser"><button>
            Modifier les utilisateurs  
            </button>
            </Link>
            <Link to="/admincrudsupplier"><button>
            Modifier les fournisseurs 
            </button>
            </Link>
            <Link to="/admincrudcomments"><button>
            Modifier les commentaires 
            </button>
            </Link>
            <Link to="/admincruddevis"><button>
            Modifier les devis 
            </button>
            </Link>

            </div>
        );
    };
}

export default AdminPage;