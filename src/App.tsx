import { Outlet } from "react-router"
import CommonLayout from "./components/layout/CommonLayout"

function App() {
  return (
    <div>
      <CommonLayout>
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </CommonLayout>
    </div>
  )
}

export default App