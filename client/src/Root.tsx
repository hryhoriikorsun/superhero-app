import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import App from "./App"
import { ListPage } from "./pages/ListPage/ListPage.tsx"
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx"

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ListPage />} />
        
        <Route path="ListPage" element={<Navigate to="/" replace />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
)