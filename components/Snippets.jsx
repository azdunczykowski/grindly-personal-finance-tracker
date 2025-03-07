import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

const Snippets = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Analyse
        <span className="bg-gradient-to-r from-[#0f55da] to-[#0a3c9e] text-transparent bg-clip-text">
          {" "}
          your budget
        </span>
      </h2>
      <div className="pt-14 flex p-2 flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src="code.jpg" alt="code" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div className="flex mb-12" key={index}>
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Snippets;
