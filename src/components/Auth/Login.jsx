import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
    //validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }
    if (!password) {
      toast.error("Invalid password");
      return;
    }
    setIsLoading(true);

    //submit api
    let data = await postLogin(email, password);
    console.log(">>> check res: ", data);
    // if (data && +data.EC === 0 ) {
    //   //Dấu + là để convert type từ string sang number
    //   dispatch(doLogin(data));
    //   toast.success("Login successful" /* data.EM */);
    //   setIsLoading(false); //phải để dòng này TRÊN dòng navigate
    //   navigate("/");
    // }

    // if (data && +data.EC !== 0) {
    //   toast.error(data.EM); //EM: error message tạo bởi backend
    //   setIsLoading(false);
    // }

    //tạm thời chưa có database thì để như này
    if (data /* && +data.EC === 0 */) {
      //Dấu + là để convert type từ string sang number
      dispatch(doLogin(data));
      toast.success("Login successful" /* data.EM */);
      setIsLoading(false); //phải để dòng này TRÊN dòng navigate
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button onClick={() => navigate("/register")}>Sign up</button>
      </div>
      <div className="title col-4 mx-auto">Prepare for some AGV action...</div>
      <div className="welcome col-4 mx-auto">Hello, who's this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>

          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot password?</span>
        <div>
          <button
            className="btn-submit"
            onClick={() => handleLogin()}
            disabled={isLoading}
          >
            {isLoading == true && <ImSpinner10 className="loader-icon" />}
            <span> Login to AGV System</span>
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/"); //trở về Home page
            }}
          >
            &#60;&#60; Go to Home page
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
