import Props from "../entities/footer-infos";

const SmallFooterInfo = ({ infoFooter }: Props) => {
  return (
    <div>
      {infoFooter.slice(3).map((item, i) => {
        const indexItem = i == 1;
        return (
          <div className="" key={item.id}>
            <h3 className="text-2xl font-bold pt-3 pb-8 cursor-default">
              {item.name}
            </h3>
            <ul>
              {item.info.map((data, i) => (
                <li className="mb-2" key={i}>
                  <a
                    href="#"
                    className={`text-[17px] hover:text-blue-600  transition ${
                      i == 3 && indexItem ? "pink-badge" : ""
                    }`}
                  >
                    {data}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SmallFooterInfo;
