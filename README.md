# 🚚 Ship Tracker — Vue 3 + TypeScript + Pinia + Ant Design + TailwindCSS

A frontend engineering test case: **Transport Shipment Tracker**, built using:

- ✅ Vue 3 (Composition API + TypeScript)
- ✅ Ant Design Vue (Table, Layout, Form Elements)
- ✅ Pinia (State Management)
- ✅ TailwindCSS (Responsive spacing / layout utilities)
- ✅ Axios or Static JSON (Configurable)
- ✅ Vitest (Unit Testing)
- ✅ Real-time shipment status simulation

---

## 📌 Features

### ✅ Base Case

| Feature | Description |
|---------|-------------|
| Shipment List | Table with shipment ID, route, status, action button |
| Shipment Detail | View shipment details and assign transporter |
| Assign Transporter | Dropdown selection + success feedback |
| State Management | Pinia (no Vuex) |
| Routing | Vue Router (List → Detail) |
| Mock Data | Static JSON / optional Mirage.js / Axios mock |

### ✅ Bonus Case Completed

| Bonus Requirement | Implemented |
|------------------|-------------|
| Real-time status updates | ✅ `setInterval()` updates status (Assigned → In Transit → Delivered) |
| Responsive Design | ✅ TailwindCSS (`p-4 sm:p-6 md:p-8`) |
| Unit Testing | ✅ Vitest test for assign transporter |
| Form Validation | ✅ Prevents empty transporter assignment + Ant Design message |

---

## 📁 Project Structure

```
ship-tracker/
│
├── public/
├── src/
│   ├── mock/
│   │   └── shipments.json        # Shipment static data
│   ├── store/
│   │   └── shipmentStore.ts      # Pinia store + realtime simulation
│   ├── pages/
│   │   ├── ShipmentList.vue      # Table view
│   │   └── ShipmentDetail.vue    # Assignment view
│   ├── App.vue                   # Header, layout, router-view
│   ├── router.ts                 # Routing definitions
│   └── main.ts                   # Vue bootstrap (AntD + Pinia + Tailwind)
│
├── tests/
│   └── assignTransporter.test.ts # Vitest unit test
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## ▶️ Run Locally

> **Requirements:** Node.js v18+ & npm v9+

### 1. Clone repository

```bash
git clone https://github.com/huahaharis/ship-tracker.git
cd ship-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

➡ App will be available at:

🔗 http://localhost:5173/

---

## 🧪 Unit Testing (Vitest)

Run tests:

```bash
npx vitest
```

Example output:

```
✓ assignTransporter should update transporter and status
```

---

## 🛠️ Build for production

```bash
npm run build
```

Then:

```bash
npm run preview
```

---

## 📡 Mock API (optional enhancements)

Can be toggled between static JSON or mock API:

---

## ✏️ Assumptions

- No backend required — data is mocked (static json or mock API).
- Only one dropdown transporter assignment is required.
- Shipment updates in real time are simulated via `setInterval()`.

---

## 👤 Author

Built by **Muhammad Harris**
