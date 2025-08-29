import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import App from "./App"
import { ListPage } from "./pages/ListPage/ListPage.tsx"
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx"
import { HeroAdder } from "./pages/HeroAdder/HeroAdder.tsx"
import { HeroPage } from "./pages/HeroPage/HeroPage.tsx"


export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/ListPage" replace />} />
        
        <Route path="ListPage" element={<ListPage />} />
        
        <Route path="superhero" element={<HeroPage />}/>

        <Route path="add" element={<HeroAdder />}/>
      </Route>


      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
)