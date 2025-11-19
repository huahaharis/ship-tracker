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
SHIPTRACK/
│
├── public/
│   ├── screenshots/
│   │   ├── how_to_run.png        # Screenshot how to run unit test with vitest
│   │   └── dashboard.png         # Screenshot unit test dashboard with vitest         
├── src/
│   ├── tests/
│   │   └── shipmentDetail.test.ts# Transporter assignment logic test
│   ├── assets/
│   │   ├── bg.jpg                # Background image for login
│   │   └── vue.svg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── BaseTable.vue     # Reusable AntD table
│   │   │   ├── BaseSelect.vue    # Reusable select
│   │   │   ├── BaseInput.vue     # Reusable input
│   │   │   ├── BasePagination.vue# Custom pagination
│   │   │   └── BaseSearch.vue    # Reusable search bar
│   ├── composables/
│   │   ├── useAuth.ts            # Logic: Composable login Mock API
│   │   ├── useShipment.ts        # Logic: loadShipments, filtering, api wrapper
│   │   └── useNotification.ts    # Global notification composable
│   ├── mock/
│   │   ├── shipments.json        # Shipment static data
│   │   └── user.json             # User static data
│   ├── pages/
│   │   ├── auth/
│   │   │   └── Login.vue         # Login view
│   │   ├── ShipmentList.vue      # Table view
│   │   └── ShipmentDetail.vue    # Assignment view
│   ├── store/
│   │   ├── authStore.ts          # Shipment static data
│   │   └── shipmentStore.ts      # Pinia store + realtime simulation
│   ├── types/
│   │   └── type.ts               # Shipments Type Definition
│   ├── App.vue                   # Header, layout, router-view
│   ├── router.ts                 # Routing definitions
│   └── main.ts                   # Vue bootstrap (AntD + Pinia + Tailwind)
│
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

Run tests with dashboard vitest:

```bash
npx vitest --ui
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

Can be toggled between static JSON or mock API.

---

## ✏️ Assumptions

- No backend required — data is mocked (static json or mock API)
- Only one dropdown transporter assignment is required
- Shipment updates in real time are simulated via `setInterval()`

---

# ✨ UPDATE — NEW ADVANCED TASKS IMPLEMENTED

## 🧩 1. Role-Based Access Control (RBAC)

- Admin can assign transporter  
- Viewer can only view  
- Role stored in `localStorage`  
- Pinia store handles permission (`isAdmin`, `isLoggedIn`)

## 🔍 2. Pagination & Search

- Search by origin / destination / transporter  
- Live filtering using computed  
- Pagination logic using page slicing  
- Resets page on search

## 🔁 3. Notification System

- Custom slide‑in notification component  
- Auto dismiss  
- Supports success + error  
- Globally accessible via composable

## 🧩 4. Component Reusability

- `BaseTable.vue` for reusable tables  
- `BasePagination.vue` for custom pagination 
- `BaseSearch.vue` for reusable search bar   
- `BaseSelect.vue` for reusable dropdown  
- `useAuth()` composable API Interaction login
- `useNotification()` composable global notification
- `useShipment()` composable API Interaction fetch list shipments

## 🧪 5. Unit Testing (Vitest)

- Verified transporter assignment  
- Tested failure case on invalid ID  
- Provides CLI and UI test modes

## 🧪 Test Screenshot

![Test Output Dashboard](public/screenshots/dashboard.png)
![How To Run the Test with Vitest](public/screenshots/how_to_run.png)

---

## 👤 Author

Built by **Muhammad Harris**
