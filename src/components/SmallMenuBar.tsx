import Props from "../entities/logos";
const SmallMenuBar = ({ logo }: Props) => {
  return (
    <header className="md:hidden w-screen bg-white-1 fixed top-0 z-20 flex justify-center py-4 border-b-[1.5px] ">
      <button className="absolute left-2 top-1/2 -translate-y-1/2">
        <i className="fa-solid fa-bars text-xl"></i>
      </button>
      <a href="https://coolors.co/" target="_blank">
        <img src={logo} alt="coolers_logo" />
      </a>
    </header>
  );
};

export default SmallMenuBar;
