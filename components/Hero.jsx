const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Grindly will help you
        <span className="bg-gradient-to-r from-[#0f55da] to-[#0a3c9e] text-transparent bg-clip-text">
          {" "}
          take control of Your finances.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        All tools designed to help you manage your money smarter. Perfect for
        anyone looking to achive financial stability and growth.
      </p>
      <div className="flex justify-center my-10">
        <a
          className="bg-gradient-to-r from-[#0f55da] to-[#0a3c9e] py-3 px-4 mx-3 rounded-md text-sm"
          href="/sign-up"
        >
          Start for free!
        </a>
        <a className="py-3 px-4 mx-3 rounded-md border">Documentation</a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#0f55da] shadow-[#0f55da] mx-2 my-4"
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#0f55da] shadow-[#0f55da] mx-2 my-4"
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
