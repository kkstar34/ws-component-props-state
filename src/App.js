import './App.css';
import {UsersList} from './components/UsersList';
import {Form } from './components/Form';



function App() {

  let usersList = [
    { name: 'Kouyate Karim'},
    { name: 'Yvan Cesar'},
    { name: 'Jean Louis'}
  ];


  function handleClick(){
    alert('la fonction du pere est dechenché');
  }


  return (
   <div>
     <h1>Gestion des utilisateurs</h1>

   

     <div className="box">
          <UsersList users={usersList}>  Ceci est le children d'un composant </UsersList>
          <Form users={usersList} submit={handleClick}>Ceci est le children d'un composant </Form>
     </div>



  
   </div>
  );
}

export default App;
