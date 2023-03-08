import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";
import { useParams } from "react-router";
import _ from "underscore";
import Navbar from "../components/Navbar";
import moment from "moment/moment";
import nl2br from "react-newline-to-break";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import ErrorPage from "../components/ErrorPage";
import LoadingScreen from "../components/LoadingScreen";

function ArticlePage(props) {
  let { id } = useParams();
  let [loading, setLoading] = useState(true);

  useFirestoreConnect([
    {
      collection: "articles",
      where: ["articleId", "==", id],
    },
  ]);

  const articles = useSelector((state) => state.firestore.ordered.articles);

  if (isLoaded(articles)) loading = false;

  if (!loading && _.isEmpty(articles)) {
    return <ErrorPage />;
  } else if (!loading && articles[0].id == id) {
    const article = articles[0];
    return (
      <div>
        <div className="bg-secondary">
          <Navbar />
          <div className="container mx-auto mt-16 pb-8">
            <h1 className="text-center text-primary text-4xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="text-center text-accent uppercase md:text-xl text-md mb-8">
              by {article.authorFirstName} {article.authorLastName} &middot;
              &nbsp; {moment.unix(article.dateCreated).format("DD MMM YYYY")}
            </p>
            <p className="text-center text-primary text-md">
              <Link to="/articles" className="hover:underline">
                Articles
              </Link>{" "}
              &nbsp; / &nbsp;{" "}
              <span className="text-accent">{article.title}</span>
            </p>
          </div>
        </div>
        <div className="content-center text-primary p-4 py-10 lg:px-28 md:px-10 px-16">
          {nl2br(article.body)}
        </div>
        <Footer />
      </div>
    );
  } else {
    return <LoadingScreen />;
  }
}

const mapStateToProps = (state, initProps) => {
  return {
    firebase: state.firestore,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(ArticlePage);
