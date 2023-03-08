import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { isLoaded, useFirestoreConnect } from "react-redux-firebase";
import Navbar from "../components/Navbar";
import { ArticleCard } from "./ArticleCard";
import _ from "underscore";
import Footer from "../components/Footer";
import ErrorPage from "../components/ErrorPage";
import { ColorRing } from "react-loader-spinner";
import LoadingScreen from "../components/LoadingScreen";

function Articles(props) {
  let [loading, setLoading] = useState(true);
  useFirestoreConnect([
    {
      collection: "articles",
      orderBy: ["dateCreated", "desc"],
    },
  ]);

  const articles = useSelector((state) => state.firestore.ordered.articles);

  if (isLoaded(articles)) loading = false;

  if (!loading && _.isEmpty(articles)) {
    return <ErrorPage />;
  } else if (!loading) {
    return (
      <div id="articles-page">
        <div className="bg-secondary">
          <Navbar />
          <div className="container mx-auto mt-16 pb-8">
            <h1
              className="cursive text-center text-primary text-7xl lg:text-8xl"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              articles
            </h1>
          </div>
        </div>

        <div className="content-center pt-10 lg:px-28 md:px-10 px-16">
          {props.auth.uid && props.profile.admin ? (
            <a
              href="/create-article"
              className="text-2xl text-accent hover:underline"
            >
              Create an article
            </a>
          ) : null}
        </div>
        <div className="content-center p-4 pb-20 lg:px-28 md:px-10 px-16">
          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-8"
            data-aos="fade-up"
          >
            {articles &&
              articles.map((article) => {
                return <ArticleCard article={article} />;
              })}
          </div>
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

export default connect(mapStateToProps)(Articles);
