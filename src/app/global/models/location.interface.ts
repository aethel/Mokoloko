export interface Location extends Coordinates {
  name: string;
  address: string;
  description?: string;
  tags: string | string[];
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
