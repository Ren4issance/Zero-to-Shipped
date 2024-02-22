import { useCurrentUser } from "src/users/hooks/useCurrentUser";
import { useMutation } from "@blitzjs/rpc";
import logout from "src/auth/mutations/logout";
import Link from "next/link";
import { Routes } from "@blitzjs/next";

export const UserInfo = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);

  const handleLogout = async () => {
    await logoutMutation();
  };

  if (currentUser) {
    return (
      <>
        <button onClick={handleLogout}>Logout</button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <strong>Sign Up</strong>
        </Link>
        <Link href={Routes.LoginPage()}>
          <strong>Login</strong>
        </Link>
      </>
    );
  }
};
