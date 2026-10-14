export type StackItem = {
  area: string;
  main: string;
  desc: string;
  more: string;
};

export type BandItem = {
  title: string;
  text: string;
};

export type CaseItem = {
  title: string;
  tag: string;
  img: string;
  imgLabel: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  href?: string;
  text: string;
  points: string[];
  stack: string;
};

export type ExperienceItem = {
  when: string;
  org: string;
  role: string;
  text: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type LayerItem = {
  n: string;
  title: string;
  text: string;
  where: string;
};

export type StepItem = {
  n: string;
  title: string;
  text: string;
};

export type PrincipleItem = {
  title: string;
  text: string;
};

export type MetricItem = {
  label: string;
  value: string;
};

export type KitItem = {
  title: string;
  text: string;
};

export type CommandItem = {
  text: string;
  muted: boolean;
};

export type ProofItem = {
  when: string;
  title: string;
  text: string;
};

export type ProductItem = {
  kicker: string;
  title: string;
  text: string;
  points: string[];
  stack: string;
};
