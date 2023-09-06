export const Summary = () => {
  return (
    <section className="bg-gray-750 w-full">
      <ul className="relative sm:absolute sm:bottom-36 text-white block sm:grid grid-cols-2 p-5 left-1/2 -translate-x-1/2 bg-transparent sm:bg-gray-850 sm:rounded-[60px]">
        <li className="p-8 text-center sm:border-r sm:border-r-white">
          <p className="text-4xl font-bold mb-2">5+</p>
          <p className="text-sm">Years of experience</p>
        </li>
        <li className="p-8 text-center">
          <p className="text-4xl font-bold mb-2">234</p>
          <p className="text-sm">Projects</p>
        </li>
      </ul>
    </section>
  );
};
