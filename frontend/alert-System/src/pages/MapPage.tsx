import React, { useEffect, useState } from "react";
import AlertsMap from "../components/AlertsMap/AlertsMap";
import NavBar from "../components/NavBar/NavBar";


type alert = {
    id: string,
    displayName: string
    description: string,
    priority: "high" | "low" | "medium",
    arena: "North" | "South" | "Center",
    status: "Handeld" | "Active",
    lon: number
    lat: number  
};

export default function MapPage() {
  const [alerts, setAlerts] = useState<alert[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data));
  }, []);
  return (
    <div>
      <NavBar />
      <AlertsMap alerts={alerts} />
    </div>
  );
}
