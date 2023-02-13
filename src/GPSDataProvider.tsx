import * as Location from 'expo-location';
import { Coordinates } from './Coordinates';

export async function requestPermissions() {
  await Location.requestForegroundPermissionsAsync()
}

export async function getGPSData(): Promise<Coordinates> {
  let currentLocation = await Location.getCurrentPositionAsync({});
  return { lat: currentLocation.coords.latitude, lon: currentLocation.coords.longitude };
}