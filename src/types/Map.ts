import { Date } from "./Date";
import { King } from "./Kings";
import { MapSide } from "./MapSide"

export interface Map {
    id: number;
    year: number;
    central: MapSide;
    east: MapSide;
    dates: Date[];
    kings: King[];
}
