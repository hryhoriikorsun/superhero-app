import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="flex justify-between p-2">
      <span>Superheros</span>

      <NavLink
        to={'/add'}
      >
        Add
      </NavLink>
    </header>
  )
}