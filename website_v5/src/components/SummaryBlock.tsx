const SummaryBlock = () => {
  return (
    <div className="w-full min-h-fit bg-teal-300">
      <hgroup className="mx-6 sm:mx-12 py-12 flex flex-col sm:gap-12 gap-6">
        <h2 className="text-white-100 font-mono font-bold text-5xl tracking-wide">
          Who I am.
        </h2>
        <p className="text-light-blue-100 font-mont text-lg sm:text-xl lg:text-2xl tracking-wide leading-loose">
          I'm a recent CS grad from the University of Chicago, and I'm
          passionate about making people's lives easier. I love leveraging my
          technical abilities to build clean, well-thought-out solutions for
          challenging, irritating, and inconvenient problems. Having a multitude
          of technological interests, I tend to gravitate toward roles related
          to full stack and cloud infrastructure development. I'm not afraid to
          wear multiple hats or learn new skills— I'm eager to pick up whatever
          is necessary to get the job done.
        </p>
      </hgroup>
    </div>
  );
};
export default SummaryBlock;
