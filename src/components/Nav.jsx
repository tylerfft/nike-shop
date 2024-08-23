import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className=" absolute py-8 z-10 w-full padding-x">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={129} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(item => (
            <li key={item.item}>
              <a
                href={item.href}
                className=" font-montserrat leading-none text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
