import { ProgressProps } from "@/types/global";
import { Progress } from "../progress";

type ProgressItemListProps = ProgressProps & {
  skill: string;
  label: string;
};

export const ProgressItemList = (props: ProgressItemListProps) => {
  const { label, max, skill, value } = props;
  return (
    <ul className="w-full px-4 pb-5 font-bold">
      <Progress max={max} value={value} />
      <dl className="flex justify-between w-full text-white">
        <dt>{skill}</dt>
        <dd>{label}</dd>
      </dl>
    </ul>
  );
};
