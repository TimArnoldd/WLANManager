import { CoordinatesRectangle } from "./Coordinates";
import Storage from 'expo-storage';

const storageKey = "WLANManagerHomeLocation"

export async function getHomeCoordinates(): Promise<CoordinatesRectangle> {
    return JSON.parse(await Storage.getItem({ key: storageKey}));
}

export function setHomeCoordinates(area: CoordinatesRectangle) {
    Storage.setItem({
        key: storageKey,
        value: JSON.stringify(area),
    });
}
