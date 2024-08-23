import { Button } from "../components";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className=" text-4xl font-palanquin  capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Find definitions and references for functions and other symbols in
          this file by clicking a symbol below or in the code.
        </p>
        <p className="mt-4 lg:max-w-lg info-text ">
          Discover For your active life.
        </p>
        <div className="mt-11">
          <Button label="View Details" iconURL="" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt=""
          width={570}
          height={520}
          className=" object-contain"
        />
      </div>
    </section>
  );
};
export default SuperQuality;
