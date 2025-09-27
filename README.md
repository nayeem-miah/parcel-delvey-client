
# 📦 Parcel Delivery Frontend (React + Redux Toolkit + RTK Query)

## 🚀 Project Overview  
This is a **secure, role-based, and user-friendly frontend** for a **Parcel Delivery System** (similar to Pathao Courier or Sundarban), built with **React.js, Redux Toolkit, and RTK Query**.  

It connects to the backend **Parcel Delivery API** and allows **Senders, Receivers, and Admins** to manage parcels and delivery records seamlessly.  

### ✨ Key Features
- 🌍 Public pages: Home, About, Contact  
- 🔐 Role-based dashboards (Sender, Receiver, Admin)  
- 📦 Parcel creation, tracking, and status management  
- 📱 Fully responsive and clean UI  
- 📊 Data visualization with charts & overview cards  
- ⚡ Optimized with lazy-loading and skeletons  

---

## 🌐 Live Demo  
🔗 [Parcel Delivery Client](https://parcel-delevary-client.vercel.app)

---

## 🛠 Tech Stack  

**Frontend:**  
- React.js + TypeScript  
- Redux Toolkit & RTK Query  
- Tailwind CSS  
- React Router v7  

**Backend (Integration):**  
- Node.js / Express.js  
- MongoDB / Mongoose  
- JWT + bcrypt (Authentication)  

---

## 📂 Project Structure  

```

src/
├─ assets/          # Images, icons, fonts
├─ components/      # Reusable UI components
├─ constants/       # App-wide constants
├─ hooks/           # Custom React hooks
├─ lib/             # API utilities or helpers
├─ pages/           # Route components (Home, Dashboard, etc.)
├─ provider/        # Context/Provider files
├─ redux/           # Redux slices & RTK Query APIs
├─ routes/          # Protected & public route handling
├─ types/           # TypeScript definitions
├─ utils/           # Utility functions
├─ App.tsx          # Main React component
├─ main.tsx         # App entry point
├─ index.css        # Global styles

````

---

## ✅ Minimum Functional Requirements  

### 1️⃣ Public Pages  
- Home, About, Contact  
- Responsive & professional UI  

### 2️⃣ Authentication  
- Register (Sender / Receiver)  
- Login with JWT  
- Role-based redirection  
- Persisted authentication  
- Logout functionality  

### 3️⃣ Dashboards  

**Sender Dashboard**  
- Create/manage parcels  
- Cancel parcels  
- View parcel history  

**Receiver Dashboard**  
- View incoming parcels  
- Confirm delivery  
- Delivery history  

**Admin Dashboard**  
- Manage users (block/unblock)  
- Manage all parcels  
- Assign delivery personnel (optional)  

### 4️⃣ Parcel Tracking  
- Track via unique tracking ID  
- Show status logs (status, timestamp, updatedBy, note)  

### 5️⃣ General Features  
- Role-based navigation menus  
- Loading indicators & global error handling  
- Validations & advanced filtering  
- Pagination for tables  
- Toast notifications  
- Charts & overview cards  
- Parcel status timeline  

---

## 🎨 UI/UX Considerations  
- Fully responsive across devices  
- Clean typography & consistent spacing  
- High contrast color scheme  
- Performance optimized (lazy-loading, skeletons)  
- Realistic data for professional finish  

---

## ⚙️ Installation & Setup  

1. Clone repository:
   ```bash
   git clone https://github.com/nayeem-miah/parcel-delvey-client.git
   cd parcel-delvey-client
````

2. Install dependencies:

   ```bash
   bun install   # or npm install
   ```

3. Configure environment variables (`.env`):

   ```env
   VITE_API_BASE_URL=<your_backend_api_url>
   ```

4. Start development server:

   ```bash
   bun dev   # or npm run dev
   ```

---

## 🧪 Testing the App

🔑 Use demo accounts for quick testing:

* **Sender** → `sender@example.com` / `Pa$$w0rd!`
* **Receiver** → `receiver@example.com` / `Pa$$w0rd!`
* **Admin** → `admin.parcel@gmail.com` / `Nayeem123$`

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch → `git checkout -b feature/your-feature`
3. Commit changes → `git commit -m "Add some feature"`
4. Push branch → `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📜 License

MIT License © 2025 [MD Nayeem Miah](https://github.com/nayeem-miah)

```