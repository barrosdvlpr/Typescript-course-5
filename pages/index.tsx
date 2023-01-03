
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

interface Admin {
  id: string;
  role: string:
}
interface User {
  email: string;
}

// function redirect(usr: Admin | User) {
//   if(/**)
// }

// function redirect(usr: Admin | User) {
//   if(/*user is admin*/) {
//     routeToAdminPage(usr.role);
//   } else {
//     routeToHomePage(usr.email);
//   }
// }

// function redirect(usr: Admin | User) {
//   if((<Admin>usr).role !== undefined) {
//     routeToAdminPage(usr.role);
//   } else {
//     routeToHomePage(usr.email);
//   }
// }

// function isAdmin(usr: Admin | User): usr is Admin {
//   return (<Admin>usr).role !==undefined
// }


function redirect(usr: Admin | User) {
  if("role" in usr) {
    routeToAdminPage(usr.role);
  } else {
    routeToHomePage(usr.email);
  }
}

