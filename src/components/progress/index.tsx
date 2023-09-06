import { ProgressProps } from "@/types/global";

export const Progress = (props: ProgressProps) => {
  const { max, value } = props;
  return (
    <progress
      max={max}
      value={value}
      className="w-full h-1.5 [direction:rtl] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:bg-orange-450 [&::-moz-progress-bar]:bg-orange-450"
    />
  );
};
