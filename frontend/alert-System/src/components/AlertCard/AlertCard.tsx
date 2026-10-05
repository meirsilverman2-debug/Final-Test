import "./alertCard.css";


type alert = {
    displayName: string
    description: string,
    priority: "high" | "low" | "medium",
    arena: "North" | "South" | "Center",
    status: "Handeld" | "Active",
    lon: number
    lat: number  
};



export default function AlertCard(alert: alert) {
  return (
    <div className="alertCard">
    <h1>{alert.displayName}</h1>
    <ul>
      <li>{alert.description}</li>
      <li>Priority: {alert.priority}</li>
      <li>Area: {alert.arena}</li>
    </ul>

    
   </div>
  )
}
