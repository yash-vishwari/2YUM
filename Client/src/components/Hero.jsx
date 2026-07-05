const Hero = () => {
  return (
    <>
      {/* default html wont work here */}
      <div className="h-[788px] bg-cover bg-center bg-no-repeat flex flex-col gap-2 justify-center items-center w-[100vw] bg-[url('https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="w-130 text-wrap text-white font-bold text-[50px]">
          <p className="text-center">Your Favourite food, Delivered Fast</p>
        </div>

        <div className="text-white font-bold">
          <p>
            Order from thousands of restaurants and get it delivered to your
            doorstep
          </p>
        </div>

        
      </div>
    </>
  );
};

export default Hero;
