import { LoginContainer } from "./Style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <LoginContainer>
        <img src={meal} alt="" className="mealImg" />
        <h1>David's Recipe App</h1>
        <form onSubmit={()=>navigate("/")}> 
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="USERNAME"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="PASSWORD"
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            LogIn
          </button>
        </form>
      </LoginContainer>
    </div>
  );
};

export default Login;
