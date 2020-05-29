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

                <Link to="/admin/users">
                    <button>
                        Afficher les utilisateurs
                    </button>
                </Link>
                <Link to="/admin/crudsuppliers">
                    <button>
                        Afficher les fournisseurs
                    </button>
                </Link>
                <Link to="/admin/crudcomments">
                    <button>
                        Afficher les commentaires
                    </button>
                </Link>
                <Link to="/admin/cruddevis">
                    <button>
                        Afficher les devis
                    </button>
                </Link>
            </div>
        )
    }
};

export default AdminPage;