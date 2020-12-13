import { useContext } from "react";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import AuthContext from "./context/auth-context/auth-context";
import ProjectsState from "./context/projects-context/ProjectsState";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      {!user ? (
        <Auth user={user} />
      ) : (
        <ProjectsState>
          <Main user={user} />
        </ProjectsState>
      )}
    </div>
  );
}

export default App;
