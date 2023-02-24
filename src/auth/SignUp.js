import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { signUp } from "../store/actions/authActions";

function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    const userData = {
      firstName,
      lastName,
      email,
      username,
      password,
    };
    props.signUp(userData);
  };

  const { auth, authError } = props;

  if (auth.uid) {
    return <Navigate to="/" />;
  }

  return (
    <div id="signup-page">
      <div id="navbar" className="-z-50">
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
              welcome to whizfin!
            </h1>
            <p className="text-accent text-2xl">
              Create an account to become a member
            </p>
          </div>
        </div>
        <div className="content-center p-4 lg:px-28 md:px-10 px-16 text-primary text-center">
          <div className="lg:py-10 md:py-8 py-6" data-aos="fade-up">
            <h1 className="text-4xl lg:text-5xl mb-10">Sign Up</h1>
            {authError != null ? (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {authError}
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="mb-6">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-bold"
                  >
                    Your first name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="text-input-dark"
                    placeholder="First name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-bold"
                  >
                    Your last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="text-input-dark"
                    placeholder="Last name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="text-input-dark"
                  placeholder="Email address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-bold"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="text-input-dark"
                  placeholder="Username"
                  required
                  onChange={(e) => setUsername(e.target.value.toLowerCase())}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="lastName"
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
    signUp: (user) => dispatch(signUp(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
