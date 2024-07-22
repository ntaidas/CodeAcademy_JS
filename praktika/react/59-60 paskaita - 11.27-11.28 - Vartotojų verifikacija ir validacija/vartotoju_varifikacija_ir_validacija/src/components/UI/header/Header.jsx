import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import UsersContext from "../../../contexts/UsersContext";

const StyledHeader = styled.header`
  padding: 0 20px;
  border-bottom: 3px dashed black;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  a.active {
    color: green;
  }

  > div {
    display: flex;
    align-items: center;

    > img {
      height: 60px;
    }
    > span {
      font-size: 1.5rem;
    }
  }

  > nav {
    > ul {
      margin: 0;
      padding: 0;
      list-style-type: none;

      display: flex;
      gap: 10px;

      > li {
        > a {
          font-weight: bold;
          font-size: 1.3rem;
          text-decoration: none;
        }
      }
    }
  }

  > ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    gap: 5px;

    > li > a {
      padding: 2px 10px;
      display: block;
      border: 1px solid black;
      border-radius: 5px;

      text-align: center;
      text-decoration: none;
    }
  }
`;

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UsersContext);
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div>
        <img
          src="https://mobirise.com/extensions/gamingamp/assets/images/logo2.png"
          alt="logo"
        />
        <span>Best Games Page</span>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/games/allGames"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Games
            </NavLink>
          </li>
        </ul>
      </nav>
      {!loggedInUser ? (
        <ul>
          <li>
            <NavLink
              to="/user/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      ) : (
        <div>
          <span>{loggedInUser.userName}</span>
          <button
            onClick={() => {
              setLoggedInUser("");
              navigate("/");
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
