import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledGameCard = styled.div`
  height: 350px;
  width: 250px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 0 5px 5px;

  > h1 {
    text-align: center;
  }
  > img {
    height: 70%;
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

const GameCard = ({ data }) => {
  return (
    <Link to={`/games/${data.id}`} style={{
      color: "unset",
      textDecoration: "unset"
    }}>
      <StyledGameCard>
        <h1>{data.name}</h1>
        <img
          src={data.image}
          alt={`${data.name} poster`}
        />
      </StyledGameCard>
    </Link>
  );
}
 
export default GameCard;