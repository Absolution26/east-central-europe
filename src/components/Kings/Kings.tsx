import { King } from "../../types/Kings";
import { KingFragment } from "../King/KingFragment";

interface Props {
  kings: King[];
}

export const Kings: React.FC<Props> = ({ kings }) => {
  return (
    <section id="emperors" className="section kings">
      <h3 className="caption kings__caption">Правителі та імператори</h3>
      <ul className="kings__list">
      {kings.map((king) => (
        <KingFragment king={king} key={king.id} />
      ))}
      </ul>
    </section>
  );
};
