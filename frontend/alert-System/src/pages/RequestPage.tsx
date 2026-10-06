import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import AlertCard from "../components/AlertCard/AlertCard";

type alert = {
    displayName: string
    description: string,
    priority: "high" | "low" | "medium",
    arena: "North" | "South" | "Center",
    status: "Handeld" | "Active",
    lon: number
    lat: number  
};

export default function RequestPage() {

    const [alerts, setAlerts] = useState<alert[]>([]);
    const [searchRequest, setSearchRequest] = useState<string>("")
    const [filteredAlerts, setFilteredAlerts] = useState<alert[]>([])


      useEffect(() => {
        fetch("http://localhost:3000/api/alerts")
        .then(res => res.json())
        .then(data => setAlerts(data));
      }, [])


      
    useEffect(() => {
    const filtered = alerts.filter(alert => alert.displayName.includes(searchRequest))
    setFilteredAlerts(filtered)
    }, [searchRequest])
    
  return (
    <div>
        <NavBar/>
        <input type="text" value={searchRequest} onChange={e => setSearchRequest(e.target.value)}/>
        {filteredAlerts.map((alert: alert, index: number) =>(<AlertCard arena={alert.arena} description={alert.description} displayName={alert.displayName} lat={alert.lat} lon={alert.lon} priority={alert.priority} status={alert.status} key={index} />))}
        
    </div>

  )
}
