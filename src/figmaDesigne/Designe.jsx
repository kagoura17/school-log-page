import "./Designe.css";
import image from "../assets/class.jpg";
import student from "../assets/student.png";
import teacher from "../assets/teacher.png";
import mail from "../assets/mail.png";
import closeEye from "../assets/eye-off.png";
import openeEye from "../assets/eye-on.png";
import girl from "../assets/girl.png";
import { useState } from "react";
const Designe = () => {
  const [user, setUser] = useState(true);
  const teacherOn = () => {
    setUser(true);
  };
  const studentOn = () => {
    setUser(false);
  };
  const [passWord, setPassWord] = useState(true);
  const [images, setImages] = useState(true);
  const toggle = () => {
    setPassWord(!passWord);
    setImages(!images);
  };
  return (
    <>
      <div className="main">
        <img className="class" src={image} alt="not found" />
        <div className="right">
          <div className="icon">
            <img
              src={student}
              alt="img not found"
              tabIndex={0}
              onClick={studentOn}
            />
            <img
              src={teacher}
              alt="img not found"
              tabIndex={0}
              onClick={teacherOn}
            />
          </div>
          <h1 className="user">
            {user ? "Teacher Platform" : "Students Platform"}
          </h1>
          <h3 className="login">Login to you account to continue</h3>
          <div className="formular">
            <form>
              <input type="mail" placeholder="Email" />
              <br />
              <input
                type={passWord ? "password" : "text"}
                placeholder="password"
              />
            </form>
            <img className="mail" src={mail} alt="not found" />
            <img
              className="eye"
              src={images ? openeEye : closeEye}
              onClick={toggle}
              alt="not found"
            />
          </div>
          <h2 className="forgot-password">I forget my password !</h2>
          <button>Login</button>
          <h2 className="new-account">I don't have an account !</h2>
        </div>
      </div>
    </>
  );
};

export default Designe;
