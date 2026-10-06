
type user = {
    id: string,
    userName: string,
    password: string,
    email: string,
    role: "admin" | "general_user" | "arena_user" 
    assignArea: "North" | "South" | "Center" | "All"
};



export default function UserCard(user: user) {
  return (
    <div>
        <h1>{user.userName}</h1>
        <ul>
            <li>{user.email}</li>
            <li>{user.role}</li>
            <li>{user.assignArea}</li>
        </ul>
    </div>
  )
}
