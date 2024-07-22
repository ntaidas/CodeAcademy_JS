import { createContext, useEffect, useReducer } from "react";

const VideoGamesContext = createContext();
const GamesActionTypes = {
  get_all: 'get all games from db',
  add: 'add one new game',
  remove: 'remove one specific game',
  edit: 'edit one specific game'
};

const reducer = (state, action) => {
  switch(action.type){
    case GamesActionTypes.get_all:
      return action.data;
    case GamesActionTypes.add:
      fetch(`http://localhost:8080/videoGames`, {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.data)
      });
      return [...state, action.data];
    case GamesActionTypes.remove:
      fetch(`http://localhost:8080/videoGames/${action.id}`,{
        method: "DELETE"
      });
      return state.filter(el => el.id.toString() !== action.id.toString());
    case GamesActionTypes.edit:
      fetch(`http://localhost:8080/videoGames/${action.id}`, {
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.data)
      });
      return state.map(el => {
        if(el.id.toString() === action.id.toString()){
          return { id:action.id, ...action.data };
        } else {
          return el;
        }
      });
    default:
      console.log("error: action type not found", action.type);
      return state;
  }
}

const VideoGamesProvider = ({ children }) => {

  const [games, setGames] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:8080/videoGames`)
      .then(res => res.json())
      .then(data => setGames({
        type: GamesActionTypes.get_all,
        data: data
      }));
  }, []);

  return (
    <VideoGamesContext.Provider
      value={{
        games,
        setGames,
        GamesActionTypes
      }}
    >
      { children }
    </VideoGamesContext.Provider>
  );
}

export { VideoGamesProvider };
export default VideoGamesContext;