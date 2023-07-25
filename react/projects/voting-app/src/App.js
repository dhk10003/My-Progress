import {useState} from 'react';
import './App.css';
import Card from './Card';
// import team logos:
import fc_logo from './assets/fc.png';
import juv_logo from './assets/juv.png';
import mu_logo from './assets/mu.png';

// Teams:
const data = [
  {id:'1', name:'FC Barcelona', image:fc_logo , votes:0},
  {id:'2', name:'Juventus F.C.', image:juv_logo , votes:0},
  {id:'3',  name:'Manchester United F.C.', image:mu_logo , votes:0},
]

function App() {

  // state for teams:
  const [teams, setTeams] = useState(data);

  // function to handle votes and update state:
  const vote = (id) => {
    // bear in mind, teams is an array of objects.
    const updatedTeams = [...teams]
    // let's find the index of the team we want to update:
    const index = updatedTeams.findIndex((t)=> t.id === id)

    if(index !== -1){
      updatedTeams[index].votes += 1;
    }

    setTeams(
      updatedTeams
    )
  }
 
  return (
    <div className="App container">
      <div className="row">
      {/* Here we need to map through teams, and render each team using a TeamCard component */}
        {teams.map((team) => (
          <Card
            key = {team.id}
           {...team}
           onVote = {vote}
          />

          ))}
          
      {/* 
        props: 
        - team
        - key
        - reference to handleVotes function
      */}
      </div>
    </div>
  );
}

export default App;
