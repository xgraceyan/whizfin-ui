import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { createArticle } from "../store/actions/articleActions";

function CreateArticle(props) {
  let [title, setTitle] = useState("");
  let [subject, setSubject] = useState("");
  let [body, setBody] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const articleData = {
      author: props.auth.uid,
      authorFirstName: props.profile.firstName,
      authorLastName: props.profile.lastName,
      body,
      subject,
      title,
    };
    props.createArticle(articleData);
    navigate("/articles");
  };
  if (props.auth.uid && props.profile.admin) {
    const authError = null;
    return (
      <div id="create-article-page">
        <div className="bg-secondary">
          <Navbar />
          <div className="container mx-auto mt-16 pb-8">
            <h1
              className="cursive text-center text-primary text-7xl lg:text-8xl"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              create article
            </h1>
          </div>
        </div>

        <div className="content-center p-4 py-20 lg:px-28 md:px-10 px-16 text-primary">
          <div className="lg:py-10 md:py-8 py-6" data-aos="fade-up">
            <h1 className="text-4xl lg:text-5xl mb-10">New Article</h1>
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
                <label htmlFor="title" className="block mb-2 text-sm font-bold">
                  Article Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="text-input-dark"
                  placeholder="Ex. My First Article"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-bold"
                >
                  Article Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="text-input-dark"
                  placeholder="A short summary of the article"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-bold"
                >
                  Article Body
                </label>
                <textarea
                  id="body"
                  className="text-input-dark"
                  placeholder="The content of the article"
                  rows={5}
                  required
                  onChange={(e) => setBody(e.target.value)}
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
    );
  }
}

const mapStateToProps = (state, initProps) => {
  return {
    firebase: state.firestore,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createArticle: (article) => dispatch(createArticle(article)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
