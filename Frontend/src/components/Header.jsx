

export default function Header() {
  return (
    <div className="bg-hero-section h-[34vw] my-[30px] mx-auto bg-contain relative bg-no-repeat">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fade-in 
                    min-sm:max-w-[45%] max-sm:max-w-[65%]">
        <h2 className="font-medium text-white text-[max(4.5vw,22px)]">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw] max-sm:hidden  ">
          Life is too short to wait for good food! Let us bring your favorite
          meals, hot and fresh, so you can enjoy every moment without a
          worry.From your cravings to your celebrations, we make it simple.
          Fast, fresh, and delicious—every order brings happiness home.
        </p>
        <button className="text-custom-gray font-medium py-[1vw] px-[2.3vw] bg-white rounded-full hover:bg-slate-100
                          max-sm:py-[2vw] max-sm:px[4vw]">
          View Menu
        </button>
      </div>
    </div>
  );
}
