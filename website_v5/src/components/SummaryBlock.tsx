const SummaryBlock = () => {
  return (
    <div className="w-full min-h-fit bg-teal-300">
      <hgroup className="mx-6 sm:mx-12 py-12 flex flex-col sm:gap-12 gap-6">
        <h2 className="text-white-100 font-mono font-bold text-5xl tracking-wide">
          Who I am.
        </h2>
        <div className="text-light-blue-100 font-mont text-lg sm:text-xl lg:text-2xl tracking-wide leading-loose flex flex-col gap-6">
          <p>
            I'm a recent CS grad from the University of Chicago, and I'm
            passionate about using technology to make people's lives easier. I
            love building clean, well-thought-out solutions for challenging,
            irritating, and inconvenient problems. I gravitate the most to full
            stack job opportunities, but I'm open to learning and pursuing many
            other types of development roles. I'm not afraid to wear multiple
            hats or learn new skills; I'm eager to pick up whatever is necessary
            to get the job done.
          </p>
          <p>
            When I'm not in front of the computer, I'm probably working on a
            musical/artistic project— or playing games on my Switch.
          </p>
        </div>
      </hgroup>
    </div>
  );
};
export default SummaryBlock;
