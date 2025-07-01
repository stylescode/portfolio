import { DynaPuff } from "next/font/google";

const dynaPuff = DynaPuff({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dynapuff",
});


const Header = () => {

  const sections = ["About", "Skills", "Projects", "Connect"];

  return (
    <header className="w-full flex justify-between border border-gray-300 rounded-2xl py-4 px-48 mt-8 shadow-lg text-lg">
      <div className={`${dynaPuff.className} text-blue-700 font-medium text-2xl`}>
        Styles Kim
      </div>
      <nav className="flex justify-evenly w-1/3">
        {sections.map((section) => (
          <p key={section} className="hover:cursor-pointer hover:font-bold hover:text-blue-700 duration-300  leading-normal">
            {section}
          </p>
        ))}
      </nav>
      <div>
        icon
      </div>
    </header>
  );
}

export default Header;
