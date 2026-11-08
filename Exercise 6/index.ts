enum Role {
  superadmin = "superadmin",
  moderator = "moderator",
  viewer = "viewer",
}

function setRole(role: Role) {
  if (role === Role.viewer) {
   return false;
  }
}


const btn = document.querySelector("button") as HTMLButtonElement;
btn.disabled = true; 

