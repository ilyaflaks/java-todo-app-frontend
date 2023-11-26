import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldPath } from "./api/HelloWorldApiService";
import { AuthContext, useAuth } from "./security/AuthContext";

export default function WelcomeComponent() {
  const { username } = useParams();

  const [message, setMessage] = useState(null);
  const authContext = useAuth();

  console.log(username);

  function callHelloWorld() {
    // console.log("called");
    // retrieveHelloWorldBean()
    retrieveHelloWorldPath(username, authContext.token)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(console.log("cleanup"));
  }

  function successfulResponse(response) {
    console.log(response);
    setMessage(response.data.message);
  }

  function errorResponse(error) {
    console.log(error);
  }
  return (
    <div className="Welcome">
      <h1>Welcome {username}!</h1>
      <div>
        Manage your todos <Link to="/todos">here</Link>
      </div>
      <div>
        {/* <button className="btn btn-success m-5" onClick={callHelloWorld}>
          Call Hello World
        </button>
        <div className="text-info">{message}</div> */}
      </div>
    </div>
  );
}
