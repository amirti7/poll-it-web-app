import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthRouteProps {}

const AuthRoute: React.FC<AuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) setLoading(false);
    else {
      console.log("UnAuthorized");
      navigate("/login");
    }
  });

  if(loading)return<p>Loading...</p>

  return <>{children}</>;
};

export default AuthRoute;
