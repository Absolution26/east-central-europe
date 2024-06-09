import { King } from "../../types/Kings";

interface Props {
  king: King;
}

export const KingFragment: React.FC<Props>= ({ king }) => (
  <>
    <li className="kings__country">{king.country}</li>
    <li className="kings__name">{king.king}</li>
  </>
);
