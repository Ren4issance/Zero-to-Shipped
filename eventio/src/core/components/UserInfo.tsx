import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { useMutation } from "@blitzjs/rpc";
import logout from "@/features/auth/mutations/logout";
import Link from "next/link";
import { Routes } from "@blitzjs/next";
import { Button } from "@mantine/core";

export const UserInfo = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);

  const handleLogout = async () => {
    await logoutMutation();
  };

  if (currentUser) {
    return (
      <>
        <Button onClick={handleLogout}>Logout</Button>
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
