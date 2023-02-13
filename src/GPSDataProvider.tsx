import * as Location from 'expo-location';

export type Coordinates = {
  lat: number,
  lon: number,
}

export async function requestPermissions() {
  await Location.requestForegroundPermissionsAsync()
}

export async function getGPSData(): Promise<Coordinates> {
  let currentLocation = await Location.getCurrentPositionAsync({});
  return { lat: currentLocation.coords.latitude, lon: currentLocation.coords.longitude };
}