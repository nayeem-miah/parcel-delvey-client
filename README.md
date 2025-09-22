
# 📦 Parcel Delivery Frontend (React + Redux Toolkit + RTK Query)

---

## **Project Overview**

This is a **secure, role-based, and user-friendly frontend** application for a **Parcel Delivery System** (similar to Pathao Courier or Sundarban) built using **React.js**, **Redux Toolkit**, and **RTK Query**.

The app consumes the backend Parcel Delivery API to enable **Senders**, **Receivers**, and **Admins** to perform parcel operations and manage records seamlessly.

**Key Features:**
- Public landing pages: Home, About, Contact
- Role-based dashboards for Senders, Receivers, and Admins
- Parcel creation, tracking, and status management
- Responsive and clean UI

---

## live link: https://parcel-delevary-client.vercel.app

## **Tech Stack**

**Frontend:**
- React.js + TypeScript
- Redux Toolkit & RTK Query
- Tailwind CSS
- React Router v7

**Backend (Integration):**
- Node.js / Express.js
- MongoDB / Mongoose
- JWT + bcrypt (authentication)

---

## **Project Structure**

```

src/
├─ assets/          # Images, icons, fonts
├─ components/      # Reusable UI components (Tables, Buttons, Modals, etc.)
├─ constants/       # App-wide constants
├─ hooks/           # Custom React hooks
├─ lib/             # API utilities or helper functions
├─ pages/           # Route components (Home, About, Dashboard, etc.)
├─ provider/        # Context or provider files
├─ redux/           # Redux slices and RTK Query APIs
├─ routes/          # Protected and public route handling
├─ types/           # TypeScript type definitions
├─ utils/           # Utility functions
├─ App.tsx          # Main React component
├─ main.tsx         # App entry point
├─ index.css        # Global styling

````

---

## **Minimum Functional Requirements**

### 1️⃣ Public Pages
- Home, About, Contact
- Responsive and professional UI

### 2️⃣ Authentication
- Registration (Sender / Receiver roles)
- Login with JWT
- Role-based redirection
- Persisted authentication
- Logout functionality

### 3️⃣ Dashboards
**Sender Dashboard**
- Create and manage parcels
- Cancel parcels
- View parcel status history

**Receiver Dashboard**
- View incoming parcels
- Confirm delivery
- Delivery history

**Admin Dashboard**
- View & manage users (block/unblock)
- Manage all parcels
- Assign delivery personnel (optional)

### 4️⃣ Parcel Tracking
- Track parcels using a unique tracking ID
- Display status logs (status, timestamp, updatedBy, note)

### 5️⃣ General Features
- Role-based navigation menus
- Loading indicators & global error handling
- Form validations & advanced filtering
- Pagination for tables
- Toast notifications for feedback
- Data visualization: overview cards & charts
- Status timeline for parcel updates

---

## **UI/UX Considerations**
- Fully responsive across devices
- Clean typography, consistent spacing, and color contrast
- Performance optimization with lazy-loading and skeletons
- Realistic data usage for professional finish

---

## **Installation & Setup**

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/parcel-delivery-frontend.git
cd parcel-delivery-frontend
````

2. Install dependencies:

```bash
bun add
# or
npm install
```

3. Set up environment variables:

```env
VITE_API_BASE_URL=<your_backend_api_url>
```

4. Run the development server:

```bash
bun dev
# or
npm run dev
```

---

## **Testing the App**

* **Sender account**: [sender@example.com](mailto:sender@example.com) / password123
* **Receiver account**: [receiver@example.com](mailto:receiver@example.com) / password123
* **Admin account**: [admin.parcel@gmail.com](mailto:admin.parcel@gmail.com) / Nayeem123$

Test parcel creation, tracking, and dashboard functionalities for each role.

---


## **Screenshots**

![App Screenshot](./src/assets/screenshot.png)

---

## **Contributing**

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## **License**

MIT License © 2025

```
