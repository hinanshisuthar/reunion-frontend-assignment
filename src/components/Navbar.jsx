import { FaEnvelopeOpen } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Navbar = () => {
  const linksArr = [
    { name: "Rent", isDropDown: false },
    { name: "Buy", isDropDown: false },
    { name: "Sell", isDropDown: false },
    { name: "Manage Property", isDropDown: true },
    { name: "Resources", isDropDown: true },
  ];

  return (
    <header className="flex items-center border-b-2 border-gray-100 py-5 px-3">
      <div className="flex mx-2 items-center">
        <FaEnvelopeOpen size={20} className="text-indigo-500" />
        <span className="font-bold">Estatery</span>
      </div>
      <ul className="flex items-center gap-[5]">
        {linksArr.map((link, i) => (
          <li
            key={link.name + i}
            className={
              i === 0
                ? "bg-indigo-100 text-indigo-600 font-bold cursor-pointer px-2 py-1 rounded mx-5"
                : "hidden items-center font-medium cursor-pointer px-2 py-1 rounded mx-5 hover:bg-indigo-100 hover:text-indigo-600 hover:font-bold md:flex lg:flex xl:flex"
            }
          >
            {link.isDropDown ? (
              <>
                {link.name}
                <MdKeyboardArrowDown size={22} />
              </>
            ) : (
              <>{link.name}</>
            )}
          </li>
        ))}
      </ul>
      <div className="ml-auto flex items-center">
        <button className="border border-slate-300 text-indigo-500 font-medium py-1.5 px-3 mx-2 rounded-md">
          Login
        </button>
        <button className="border border-indigo-500 bg-indigo-500 font-medium py-1.5 px-3 mx-2 rounded-md text-gray-100">
          Sign up
        </button>
      </div>
    </header>
  );
};
