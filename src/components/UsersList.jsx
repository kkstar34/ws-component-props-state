import { Component } from "react";


export class UsersList extends Component {

    state = {
        name : "Kouassi Blaise",
        age : 2
    };


    componentDidMount() {
        console.log("composant bien monté !")
        // va chercher les donnees d'une api
       
    }

    componentDidUpdate() {

    }


    componentWillMount() {

    }

    handleChangeName = () => {

        let newState = this.state; // faire une copie de l'etat
        newState.name = "Yvan Cesar";
        this.setState(newState);
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

                <div>
                    <h3>Presentation du state</h3>
                    <p>{this.state.name}</p>
                    <p>{this.state.age}</p>

                    <button onClick={this.handleChangeName}>Change Name</button>
                </div>
            </div>
    );

    }




}



    