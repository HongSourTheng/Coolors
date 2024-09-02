import Props from "../entities/footer-infos";
import SmallFooterInfo from "./SmallFooterInfo";

const FooterInfo = ({ infoFooter }: Props) => {
  return (
    <footer className="mt-3 md:mt-7">
      <div className="text-center md:text-left grid gap-7  md:grid-cols-3 lg:grid-cols-4 bg-gray-100 pt-12 md:pt-7 px-8">
        {infoFooter.slice(0, 3).map((item, i) => {
          const indexItem = i == 1;
          return (
            <div className="" key={item.id}>
              <h3 className="text-2xl font-bold pt-3 pb-8 cursor-default">
                {item.name}
              </h3>
              <ul>
                {item.info.map((data, i) => {
                  return (
                    <li className="mb-2" key={i}>
                      <a
                        href="#"
                        className={`text-[17px]  hover:text-blue-600  transition ${
                          i == 0 && indexItem ? "orange-badge" : ""
                        }  `}
                      >
                        {data}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <SmallFooterInfo infoFooter={infoFooter} />
        <div className="py-11 col-span-full mt-4  border-t-[1px] border-gray-300">
          <span>
            © Coolors by{" "}
            <a
              href="https://fabrizio.io/"
              target="_blank"
              className="font-medium hover:text-blue-700 hover:underline decoration-1 "
            >
              Fabrizio Bianchi
            </a>
            . From a creative to all the others.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterInfo;
