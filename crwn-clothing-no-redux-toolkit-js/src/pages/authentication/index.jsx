import { SignIn } from "../../components/SignIn";
import { SignUp } from "../../components/SignUp";

import './styles.scss'

export const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
