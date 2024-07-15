const VdoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 pl-12 absolute bg-gradient-to-r from-black aspect-video">
      <h1 className="my-1 font-bold text-3xl md:text-6xl text-white">
        {title}
      </h1>
      <p className="hidden md:inline-block pt-4 w-1/4 text-white">{overview}</p>
      <div className="my-1  md:my-4 space-x-6">
        <button className="bg-white text-black  sm:w-40 md:p-4 py-4  rounded-md hover:bg-opacity-60">
          ▶️ Play
        </button>
        <button className="bg-gray-900 opacity-80 text-white text-xl w-40 h-12 rounded-md hidden md:inline-block">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VdoTitle;
