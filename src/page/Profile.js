import React from 'react'
import Sideba from "./Sideba"
import Fee from "./Fee";
import Widgets from "./Widgets";



export default function Home() {
  return (
    <div>
      <div className="app">
      <Sideba />
      <Fee />
      <Widgets />
    </div>
    </div>
  )
}
