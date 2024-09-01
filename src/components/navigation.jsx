function Nav() {
  return (
    <div className="flex justify-between items-center py-8 px-20">
      <img src="/images/logo.svg" alt="logo"/>
      <ul className="flex justify-between items-center w-11/12">
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
        <li className="flex relative -left-20 gap-8">
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
