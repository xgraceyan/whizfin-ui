export const createArticle = (article) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .firestore()
      .collection("articles")
      .add({
        author: article.author,
        authorFirstName: article.authorFirstName,
        authorLastName: article.authorLastName,
        body: article.body,
        subject: article.subject,
        title: article.title,
        dateCreated: Math.floor(Date.now() / 1000),
      })
      .then((docRef) => {
        firestore
          .collection("articles")
          .doc(docRef.id)
          .update({
            articleId: docRef.id,
          })
          .then(() => {
            dispatch({
              type: "ARTICLE_CREATE_SUCCESS",
            });
          })
          .catch((err) => {
            dispatch({ type: "ARTICLE_CREATE_FAILURE", err });
          });
      })
      .catch((err) => {
        dispatch({ type: "ARTICLE_CREATE_FAILURE", err });
      });
  };
};
