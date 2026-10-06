
import { useEffect, useState } from "react";
import AlertCard from "../AlertCard/AlertCard";

type alert = {
    displayName: string
    description: string,
    priority: "high" | "low" | "medium",
    arena: "North" | "South" | "Center",
    status: "Handeld" | "Active",
    lon: number
    lat: number  
};

export default function AlertsList() {

  const [alerts, setAlerts] = useState<alert[]>([]) 

  useEffect(() => {
    fetch("http://localhost:3000/api/alerts")
    .then(res => res.json())
    .then(data => setAlerts(data));
  }, [])

  return (
    <div className="alertsList">
        {alerts.map((alert: alert, index: number) =>(<AlertCard arena={alert.arena} description={alert.description} displayName={alert.displayName} lat={alert.lat} lon={alert.lon} priority={alert.priority} status={alert.status} key={index} />))}
    </div>
  )
}
