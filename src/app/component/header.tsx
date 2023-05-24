import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed items-center w-full top-0">
      <div className=" px-32 py-5 flex justify-between overflow-hidden">
        <div className="p-2">
          <h1>QHODIR</h1>
        </div>
        <div className="flex flex-row p-2">
          <ul>
            <Li menu="About" />
            <Li menu="Portofolio" />
            <Li menu="Work" />
            <Li menu="Contact" />
          </ul>
        </div>
      </div>
    </div>
  );
};

const Li = (params) => {
  return (
    <li className="inline">
      <Link href={"#" + params.menu}>
        <span>{params.menu}</span> <span></span>
      </Link>
    </li>
  );
};

export default Header;
