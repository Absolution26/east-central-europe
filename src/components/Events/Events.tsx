import { Date } from "../../types/Date";
import { v4 as uuidv4 } from "uuid";
import { Event } from "../Event/Event";

interface Props {
  dates: Date[];
}

export const Events: React.FC<Props> = ({ dates }) => {
  const datesToBeDisplayed = dates.map((date) => {
    const uuid = uuidv4();

    return {
      id: uuid,
      ...date,
    };
  });

  return (
    <section id="main-events" className="section dates">
      <h3 className="caption dates__caption">Основні події</h3>

      <ul className="dates__list">
        {datesToBeDisplayed.map((date) => (
          <Event date={date} key={date.id} />
        ))}
      </ul>
    </section>
  );
};
