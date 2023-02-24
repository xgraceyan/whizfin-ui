import moment from "moment/moment";
import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <Link to={"/article/" + article.articleId}>
      <div className="rounded-lg shadow-md hover:cursor-pointer hover:shadow-xl ease-in-out duration-200">
        <div className="p-8">
          <h5 class="text-3xl font-bold tracking-tight text-primary">
            {article.imageUrl != null ? (
              <div>
                <img
                  src={article.imageUrl}
                  alt=""
                  className="rounded-lg w-full h-full"
                />
              </div>
            ) : null}
            {article.title}
          </h5>
          <p className="uppercase text-accent mb-5">
            By {article.authorFirstName} {article.authorLastName} &nbsp;
            &middot; &nbsp;{" "}
            {moment.unix(article.dateCreated).format("DD MMM YYYY")}
          </p>
          <p class="font-normal text-primary">{article.subject}</p>
        </div>
      </div>
    </Link>
  );
};
