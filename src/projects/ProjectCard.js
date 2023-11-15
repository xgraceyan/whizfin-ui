export const ProjectCard = (props) => {
  const { image, id, title, date, text } = props;
  return (
    <div className="rounded-lg">
      <div>
        <img
          src={image}
          alt=""
          className="rounded-lg w-full h-full hover:cursor-pointer hover:shadow-xl ease-in-out duration-200"
        />
      </div>
      <div className="pt-4 text-right">
        <h5 class="text-3xl font-bold tracking-tight text-primary">{title}</h5>
        <p className="uppercase text-accent mb-2">{date}</p>
        <p class="font-normal text-primary">{text}</p>
      </div>
    </div>
  );
};
