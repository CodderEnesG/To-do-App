import React ,{useState} from 'react';
import Tweet from "./Tweet";
export default App;


function App(){
  const[users,setusers] = useState([
    {name:'Enes' ,message:'Hello'},
    {name: 'John',message:'Im John'},
    {name: 'Arda',message:'I have a biscyle'},
  ]);

  return(
    <div className="App">
      {users.map(user=>(
        <Tweet name={user.name} message={user.message}/>
      ))}
      
    </div>
  );


  }
