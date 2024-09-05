function Nav() {
  return (
    <div className="flex flex-row md:items-center md:py-8 md:px-20">
      <img src="/images/logo.svg" alt="logo"/>
      <ul className="hidden md:flex justify-between items-center w-11/12">
        <li className="flex gap-6 pl-10">
          <a href="#">
            Features
          </a>
          <a href="#">
            Pricing
          </a>
          <a href="#">
            Resources
          </a>
        </li>
        <li className="flex gap-8">
          <a href="#" className="flex self-center">
            Login
          </a>
          <a href="#" className="text-white bg-customGreen py-2 px-8 w-22 rounded-3xl">
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
