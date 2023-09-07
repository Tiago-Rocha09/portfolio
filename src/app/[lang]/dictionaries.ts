import { DictionaryKeys } from "@/types/global";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  "pt-br": () =>
    import("../../dictionaries/pt-br.json").then((module) => module.default),
};

export const getDictionary = async (locale: DictionaryKeys) => {
  return dictionaries[locale]() as Promise<any>;
};
