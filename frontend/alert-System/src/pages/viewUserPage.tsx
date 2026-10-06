import { useState } from "react"

type user = {
    id: string,
    userName: string,
    password: string,
    email: string,
    role: "admin" | "general_user" | "arena_user" 
    assignArea: "North" | "South" | "Center" | "All"
};

export default function viewUserPage() {
    const [users, setUsers] = useState<user[]>([])
  return (
    <div>

    </div>
  )
}
