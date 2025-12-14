import { useState } from 'react'
import Timeline from "./components/Timeline";
import './App.css'

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
        PKI Timeline
      </h1>
      <Timeline />  {/* render the timeline */}
    </div>
  );
}

export default App
