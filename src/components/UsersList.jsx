import { Component } from "react";


export class UsersList extends Component {



    componentDidMount() {
        console.log("composant bien monté !")
        // va chercher les donnees d'une api
       
    }

    componentDidUpdate() {

    }


    componentWillMount() {

    }


    render() {

        return (
            <div className="user-list">
                <h2>Liste de mes utilisateurs</h2>
                <p>	{this.props.children}</p>
                <ul>
                    {
                        this.props.users.map(user =>
                            <li>{user.name}</li>
                        )
                    }

                    
                </ul>
            </div>
    );

    }




}



    