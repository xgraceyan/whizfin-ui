import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { logIn } from "../store/actions/authActions";

function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userCreds = {
      email,
      password,
    };
    props.logIn(userCreds);
  };

  const { auth, authError } = props;

  if (auth.uid) {
    return <Navigate to="/" />;
  }
  return (
    <div id="login-page">
      <div id="navbar" className="z-50">
        <Navbar />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="container mx-auto pb-8 bg-secondary -mt-16">
          <div className="lg:py-52 md:py-36 px-4 py-20 mt-20 text-center">
            <h1
              className="cursive text-center text-primary text-7xl lg:text-8xl"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              welcome back!
            </h1>
            <p className="text-accent text-2xl">Please log in to continue</p>
          </div>
        </div>
        <div className="content-center p-4 lg:px-28 md:px-10 px-16 text-primary text-center">
          <div className="lg:py-10 md:py-8 py-6" data-aos="fade-up">
            <h1 className="text-4xl lg:text-5xl mb-10">Log In</h1>
            {authError != null ? (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {authError}
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="text-input-dark"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="text-input-dark"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="hover:bg-white !py-2 btn-primary mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (user) => dispatch(logIn(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
