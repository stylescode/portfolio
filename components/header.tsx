
const Header = () => {

  const sections = ["About", "Skills", "Projects", "Connect"];

  return (
    <header className="w-full flex justify-between px-[100px] py-[30px]">
      <div>
        Styles Kim
      </div>
      <nav className="flex w-[400px] justify-between">
        {sections.map((section) => (
          <p key={section} className="hover:cursor-pointer hover:scale-125 hover:font-bold duration-300 hover:underline">
            {section}
          </p>
        ))}
      </nav>
    </header>
  );
}

export default Header;
