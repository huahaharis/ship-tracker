export interface Shipment {
  id: string;
  origin: string;
  destination: string;
  vehicle: string;
  transporter: string | null;
  status: string;
}

export interface NotificationExpose {
  show: (type: string, title: string, msg: string, duration?: number) => void;
}

export interface Column {
  title: string;
  dataIndex?: string;
  key: string;
  slot?: string;
}

export interface PaginationType {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
}

export interface AuthForm {
  email: string;
  password: string;
}