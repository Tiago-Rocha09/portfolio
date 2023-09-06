export const Navbar = () => {
  return (
    <nav className="bg-gray-750">
      <ul className="container flex justify-end">
        <li className="p-5 text-sm font-bold text-gray-300">
          <a href="">Home</a>
        </li>
        <li className="p-5 text-sm font-bold text-gray-300">
          <a href="">About</a>
        </li>
        <li className="p-5 text-sm font-bold text-gray-300">
          <a href="">Portfolio</a>
        </li>
        <li className="p-5 text-sm font-bold text-gray-300">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
