import { useState } from "react";

type Props = {
  name: string;
  birthday?: string;
  lived: number;
  total: number;
};
export default function Footer({ name, birthday, lived, total }: Props) {
  const [showPercent, setShowPercent] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);

  return (
    <footer className="sticky bottom-0 grid grid-cols-2 p-2">
      <div
        onClick={() => {
          setShowBirthday((prev) => !prev);
        }}
        className="grid w-fit cursor-pointer justify-self-start"
      >
        {showBirthday ? <p>{birthday}</p> : <p>{name}</p>}
      </div>
      <div
        onClick={() => {
          setShowPercent((prev) => !prev);
        }}
        className="grid w-fit cursor-pointer justify-self-end"
      >
        {showPercent ? (
          <p>Lived: {((lived / total) * 100).toFixed(1)}%</p>
        ) : (
          <p>Lived mounth: {lived}</p>
        )}
      </div>
    </footer>
  );
}
