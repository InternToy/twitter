import React from 'react'
import Sidebar from "./Sidebar"
import Feed from "./Feed";
import Widgets from "./Widgets";



export default function Home() {
  return (
    <div>
      <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
    </div>
  )
}
