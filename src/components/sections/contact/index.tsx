import { Button } from "@/components/downloadButton";
import { ImLocation, ImWhatsapp } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <section id="contact" className="bg-gray-750 sm:bg-gray-850 w-full">
      <section className="container mt-28 mb-20 px-4 sm:px-0">
        <header className="mb-12 text-center text-white sm:w-2/3 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contato</h2>
        </header>
        <article className="block sm:flex shadow-sm px-7 sm:px-24 py-6 bg-gray-850 sm:bg-gray-750 rounded-md">
          <form className="sm:w-7/12 flex flex-col gap-5 pr-0 sm:pr-9">
            <h3 className="text-3xl text-white font-bold mb-9">
              Envie uma mensagem
            </h3>
            <fieldset className="w-full">
              <input
                placeholder="Name"
                type="text"
                className="w-full shadow-sm border border-gray-680 py-5 px-7 rounded-3xl bg-gray-850 sm:bg-gray-750"
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Email"
                type="email"
                className="w-full shadow-sm border border-gray-680 py-5 px-7 rounded-3xl bg-gray-850 sm:bg-gray-750"
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full shadow-sm border border-gray-680 py-5 px-7 rounded-3xl bg-gray-850 sm:bg-gray-750"
              />
            </fieldset>
            <Button
              text="SEND MESSAGE"
              className="text-white bg-zinc-800 hover:bg-white hover:text-zinc-800 border-white hover:border-zinc-800 border-transparent"
            />
          </form>
          <aside className="sm:w-5/12 text-white pl-0 sm:pl-9">
            <ul className="mt-20">
              <li className="pl-12 pb-4 pt-4 border-b border-b-gray-500 relative">
                <ImLocation className="absolute left-0 text-3xl" />
                <h4 className="mb-2 text-base font-semibold">Location</h4>
                <address className="not-italic text-gray-350">
                  Marabá-PA, Brazil
                </address>
              </li>
              <li className="pl-12 pb-4 pt-8 border-b border-b-gray-500 relative">
                <ImWhatsapp className="absolute left-0 text-3xl" />
                <h4 className="mb-2 text-base font-semibold">
                  WhatsApp number
                </h4>
                <address className="not-italic text-gray-350">
                  <a href="https://wa.me/5594992628331">(94) 992628331</a>
                </address>
              </li>
              <li className="pl-12 pb-4 pt-8 border-b border-b-gray-500 relative">
                <MdEmail className="absolute left-0 text-3xl" />
                <h4 className="mb-2 text-base font-semibold">Email Address</h4>
                <address className="not-italic text-gray-350">
                  tiagoarrocha@gmail.com
                </address>
              </li>
            </ul>
          </aside>
        </article>
      </section>
    </section>
  );
};
