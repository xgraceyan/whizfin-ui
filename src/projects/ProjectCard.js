export const ProjectCard = (props) => {
  const { image, id } = props;
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
        <h5 class="text-3xl font-bold tracking-tight text-primary">
          Project #{id}
        </h5>
        <p className="uppercase text-accent mb-2">22 FEB 2023</p>
        <p class="font-normal text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          consequatur dolore ducimus maxime ex? Doloremque incidunt tempore nam
          iure adipisci?
        </p>
      </div>
    </div>
  );
};
