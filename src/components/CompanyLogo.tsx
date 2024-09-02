interface LogoCompanies {
  id: number;
  image: string;
  name: string;
  link: string;
}
interface Props {
  logoCompany: LogoCompanies[];
}
const CompanyLogo = ({ logoCompany }: Props) => {
  return (
    <section className="py-16">
      <p className="text-[21px] font-medium text-center mb-16 px-3">
        Used by 5+ million designers and by top companies
      </p>
      <div className="flex flex-wrap justify-center gap-y-3 gap-x-9 lg:gap-9 lg:px-20 ">
        {logoCompany.map((company) => {
          return (
            <a href={company.link} target="_blank" key={company.id}>
              <img
                className="w-[80px] h-[65px] lg:h-[80px] hover:scale-125 transition cursor-pointer"
                src={company.image}
                alt={company.name}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CompanyLogo;
