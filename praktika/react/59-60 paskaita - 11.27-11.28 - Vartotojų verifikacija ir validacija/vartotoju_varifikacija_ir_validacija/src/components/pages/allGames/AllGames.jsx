import { useContext } from "react";
import { Link } from "react-router-dom";
import VideoGamesContext from "../../../contexts/VideoGamesContext";
import styled from "styled-components";
import GameCard from "../../UI/gameCard/GameCard";
import UsersContext from "../../../contexts/UsersContext";

const StyledGames = styled.main`
  padding: 0 50px;
  position: relative;

  > a{
    position: absolute;
    top: 0;
    right: 30px;
  }

  > h1 {
    text-align: center;
    font-size: 3rem;
  }
  > div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const AllGames = () => {


  const { games } = useContext(VideoGamesContext);
  const{loggedInUser} = useContext(UsersContext)
  return (
    <StyledGames>
      {loggedInUser && <Link to="/games/addNew"><button>Add New Game</button></Link>}
      <h1>Visi žaidimai</h1>
      <div>
        {
          games.map(game => {
            return <GameCard 
              key={game.id}
              data={game}
            />
          })
        }
      </div>
    </StyledGames>
  );
}
 
export default AllGames;