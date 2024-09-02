interface Platform {
  id: number;
  icon: string;
  name: string;
  desc: string;
  inform: string;
  hoverBg: string;
  color: string;
}
interface Props {
  platforms: Platform[];
}
const Platform = ({ platforms }: Props) => {
  return (
    <section className=" mt-14 p-5">
      <div className="gap-5 flex flex-wrap *:grow md:*:basis-2/5 lg:*:basis-1/4 xl:*:basis-0">
        {platforms.map((item) => {
          return (
            <a
              key={item.id}
              href="#"
              className={`group block relative overflow-hidden bg-gray-100 text-center p-[4.2rem] xl:p-11   rounded-xl cursor-pointer ${item.hoverBg} transition duration-200`}
            >
              <div className="md:group-hover:opacity-0 transition ">
                <span className="text-6xl">
                  <i className={item.icon}></i>
                </span>
                <h3 className="text-2xl font-extrabold font-fontKH_ENG mt-5 mb-3 ">
                  {item.name}
                </h3>
                <p className="text-lg text-gray-700 ">{item.desc}</p>
              </div>
              <h4
                className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[150px] group-hover:-translate-y-1/2 transition ease-in-out duration-[250ms] opacity-0 group-hover:opacity-100  text-3xl ${item.color} font-extrabold font-fontKH_ENG`}
              >
                {item.inform}
              </h4>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Platform;
