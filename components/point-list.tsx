export function PointList({ points }: { points: readonly string[] }) {
  return (
    <ul className="m-0 grid list-none gap-2.5 p-0 text-[15px] leading-normal">
      {points.map((point) => (
        <li key={point} className="flex gap-2.5">
          <span aria-hidden="true" className="text-highlight">
            —
          </span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}
