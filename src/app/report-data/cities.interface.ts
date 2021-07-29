export interface CitiesInterface {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: Coordinates;

}
export interface Coordinates {
  lon: number;
  lat: number;
}
