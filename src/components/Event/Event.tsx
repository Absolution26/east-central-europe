import { Date } from "../../types/Date";

interface Props {
  date: Date;
}

export const Event: React.FC<Props> = ({ date: {country, year, events } }) => {
  return (
    <li className="dates__item event">
      <span className="event__date">
        {year} - {country}
      </span>

      <ul className="event__info info">
        {events.map((event) => (
          <li className="info__item" key={event}>{event}</li>
        ))}
      </ul>
    </li>
  );
};
