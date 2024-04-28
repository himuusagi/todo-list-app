import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export default function App(): ReactElement {
  return <div>{<Outlet />}</div>
}
