"use client";
import { Dictionary } from "@/types/global";
import { FormEvent, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { ImLocation, ImWhatsapp } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export const Contact = ({ dictionary }: Dictionary) => {
  const contactDictionary = dictionary?.contact || null;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        const data = {
          message,
          email,
          name,
        };

        setLoading(true);
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

        const sendMessagePromise = fetch("/api/send-message", requestOptions)
          .then((response) => {
            console.log({ response });

            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((responseData) => {
            console.log("Response:", responseData);
            setEmail("");
            setName("");
            setMessage("");
            return true;
          })
          .catch((error) => {
            console.error("Fetch error:", error);
            return false;
          })
          .finally(() => {
            setLoading(false);
          });

        toast.promise(
          sendMessagePromise,
          {
            loading: contactDictionary.sendingMessage,
            success: contactDictionary.messageSent,
            error: contactDictionary.messageNotSent,
          },
          {
            success: {
              duration: 4000,
            },
          }
        );
      } catch (error) {
        setLoading(false);
      }
    },
    [
      contactDictionary.messageNotSent,
      contactDictionary.messageSent,
      contactDictionary.sendingMessage,
      email,
      message,
      name,
    ]
  );

  return (
    <section id="contact" className="bg-gray-750 sm:bg-gray-850 w-full">
      <section className="container mt-28 mb-20 px-4 sm:px-0">
        <header className="mb-12 text-center text-white sm:w-2/3 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {contactDictionary?.title || ""}
          </h2>
        </header>
        <article className="block sm:flex shadow-sm px-7 sm:px-24 py-6 bg-gray-850 sm:bg-gray-750 rounded-md">
          <form
            className="sm:w-7/12 flex flex-col gap-5 pr-0 sm:pr-9"
            onSubmit={sendEmail}
          >
            <h3 className="text-3xl text-white font-bold mb-9">
              {contactDictionary?.subtitle || ""}
            </h3>
            <fieldset className="w-full">
              <input
                value={name}
                placeholder={contactDictionary?.placeholderName || ""}
                type="text"
                className="text-white w-full shadow-sm border border-gray-680 py-5 px-7 rounded-3xl bg-gray-850 sm:bg-gray-750"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </fieldset>
            <fieldset>
              <input
                value={email}
                placeholder={contactDictionary?.placeholderEmail || ""}
                type="email"
                className="text-white w-full shadow-sm border border-gray-680 py-5 px-7 rounded-3xl bg-gray-850 sm:bg-gray-750"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </fieldset>
            <fieldset>
              <textarea
                value={message}
                placeholder={contactDictionary?.placeholderMessage || ""}
                rows={5}
                className="text-white w-full shadow-sm border border-gray-680 py-5 px-7 rounded-3xl bg-gray-850 sm:bg-gray-750"
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </fieldset>

            <button
              className="w-fit px-8 py-3 rounded-3xl border-solid border transition-colors delay-100 ease-linear font-bold text-white bg-zinc-800 hover:bg-white hover:text-zinc-800 border-white hover:border-zinc-800 border-transparent"
              disabled={loading}
            >
              {contactDictionary?.sendMessage || ""}
            </button>
          </form>
          <aside className="sm:w-5/12 text-white pl-0 sm:pl-9">
            <ul className="mt-20">
              <li className="pl-12 pb-4 pt-4 border-b border-b-gray-500 relative">
                <ImLocation className="absolute left-0 text-3xl" />
                <h4 className="mb-2 text-base font-semibold">
                  {contactDictionary?.locationTitle || ""}
                </h4>
                <address className="not-italic text-gray-350">
                  {contactDictionary?.location || ""}
                </address>
              </li>
              <li className="pl-12 pb-4 pt-8 border-b border-b-gray-500 relative">
                <ImWhatsapp className="absolute left-0 text-3xl" />
                <h4 className="mb-2 text-base font-semibold">
                  {contactDictionary?.phoneTitle || ""}
                </h4>
                <address className="not-italic text-gray-350">
                  <a href="https://wa.me/5594992628331">(94) 992628331</a>
                </address>
              </li>
              <li className="pl-12 pb-4 pt-8 border-b border-b-gray-500 relative">
                <MdEmail className="absolute left-0 text-3xl" />
                <h4 className="mb-2 text-base font-semibold">
                  {contactDictionary?.emailTitle || ""}
                </h4>
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
