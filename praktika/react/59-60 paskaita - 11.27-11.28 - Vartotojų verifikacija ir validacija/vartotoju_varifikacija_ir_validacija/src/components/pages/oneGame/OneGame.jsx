import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import VideoGamesContext from "../../../contexts/VideoGamesContext";
import UsersContext from "../../../contexts/UsersContext";

const StyledCardPage = styled.main`
  height: calc(100vh - 83px);
  width: 80%;
  margin: 0 auto;
  position: relative;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 2fr 8fr 1fr 1fr;

  > button:nth-of-type(1) {
    position: absolute;
    width: 100px;
    bottom: 40px;
    right: -50px;
  }
  > button:nth-of-type(2) {
    position: absolute;
    width: 100px;
    bottom: 70px;
    right: -50px;
  }

  > h1 {
    grid-area: 1 / 2 / 2 / 5;
  }
  > img {
    width: 100%;
    height: 100%;
    grid-area: 2 / 1 / 3 / 4;
  }
  > div {
    padding: 10px;

    grid-area: 2 / 4 / 3 / 6;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
      text-align: justify;
    }

    > div {
      display: flex;
      justify-content: space-between;
    }
  }
  > p {
    grid-column: span 5;

    > span {
      background-color: #adf3ab;
    }
  }
`;

const OneGame = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState("");
  const { setGames, GamesActionTypes } = useContext(VideoGamesContext);
  const { users, loggedInUser } = useContext(UsersContext);

  useEffect(() => {
    fetch(`http://localhost:8080/videoGames/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (!data.name) {
          navigate("/");
        }
        setGame(data);
      });
  }, []);

  return (
    game && (
      <StyledCardPage>
        {loggedInUser.id === game.userId && (
          <>
            <button onClick={() => navigate(`/games/edit/${id}`)}>Edit</button>
            <button
              onClick={() => {
                setGames({ type: GamesActionTypes.remove, id: id });
                navigate("/games/allGames");
              }}
            >
              Delete
            </button>
          </>
        )}
        <h1>{game.name}</h1>
        <img src={game.image} alt={`${game.name} poster`} />
        <div>
          <p>{game.description}</p>
          <div>
            <span>Release date: {game.releaseDate.slice(0, 10)}</span>
            <span>Price: {game.price}&euro;</span>
          </div>
        </div>
        <p>
          Genres:{" "}
          {game.genre.map((el) => (
            <>
              {" "}
              <span>{el}</span>
            </>
          ))}
          .
        </p>
        <p>
          Publishers:{" "}
          {game.publishers.map((el) => (
            <>
              {" "}
              <span>{el}</span>
            </>
          ))}
          .
        </p>
      </StyledCardPage>
    )
  );
};

export default OneGame;
