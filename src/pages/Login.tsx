import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

const LoginPage: React.FC<Props> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log("response.user.uid", response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
        console.log("error", auth);

        setAuthing(false);
      });
  };

  return (
    <div>
      <p>Login Page</p>
      <button onClick={() => signInWithGoogle()} disabled={authing}>
        Sign In With Google
      </button>
    </div>
  );
};

export default LoginPage;
