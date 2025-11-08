export interface Shipment {
  id: string;
  origin: string;
  destination: string;
  vehicle: string;
  transporter: string | null;
  status: string;
}