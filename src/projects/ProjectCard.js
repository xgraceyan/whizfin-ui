export const ProjectCard = ({ data }) => {
  return (
    <div className="rounded-lg shadow-md hover:cursor-pointer hover:shadow-xl ease-in-out duration-200">
      <div>
        {/* <img
          src="team_photos/grace.jpg"
          alt=""
          className="rounded-lg w-full h-full"
        /> */}
      </div>
      <div className="p-8">
        <h5 class="text-3xl font-bold tracking-tight text-primary">Project</h5>
        <p className="uppercase text-accent mb-5">
          By Grace Yan &nbsp; &middot; &nbsp; 22 FEB 2023
        </p>
        <p class="font-normal text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          consequatur dolore ducimus maxime ex? Doloremque incidunt tempore nam
          iure adipisci?
        </p>
      </div>
    </div>
  );
};
