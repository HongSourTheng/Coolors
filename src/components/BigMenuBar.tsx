import Props from "../entities/logos";
const BigMenuBar = ({ logo }: Props) => {
  return (
    <header className="hidden md:flex justify-between items-center py-[14px] px-5  border-b-[1.5px]">
      <div className="flex items-center gap-7">
        <a href="https://coolors.co/" target="_blank">
          <img src={logo} alt="coolers_logo" />
        </a>
        <a
          href="https://coolors.co/"
          target="_blank"
          className="group hidden lg:flex items-center gap-2"
        >
          <div className="size-8 flex justify-center items-center border-gray-300 group-hover:border-gray-400  border-2  rounded-sm">
            <i className="fa-solid fa-cloud-bolt text-orange-500"></i>
          </div>
          <p className="text-[13px] text-gray-600 leading-4">
            <span className="text-[14px] font-bold text-black">
              Chatbolt.ai
            </span>{" "}
            Create your own ChatGPT chatbot trained <br /> with your data from
            any file or website.{" "}
            <span className="text-blue-600 group-hover:underline">
              try it for free
            </span>
          </p>
        </a>
      </div>
      <ul className="flex items-center gap-6 font-medium text-[15px] ">
        <li className="cursor-default hover:text-blue-500">Tools</li>
        <li>
          <a href="#" className="text-pink-500 hover:text-green-500">
            Go Pro
          </a>
        </li>
        <li className="w-[1px] h-9 bg-gray-300"></li>
        <li>
          <a href="#" className="hover:text-blue-600">
            Sign in
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white-1 py-2 px-4 rounded-lg"
          >
            Sign up
          </a>
        </li>
      </ul>
    </header>
  );
};

export default BigMenuBar;
