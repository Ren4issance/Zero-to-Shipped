import { useRouter } from "next/router";
import Layout from "src/core/layouts/Layout";
import { SignupForm } from "@/pages/auth/signup/components/SignupForm";
import { BlitzPage, Routes } from "@blitzjs/next";

const SignupPage: BlitzPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <SignupForm onSuccess={() => router.push(Routes.Home())} />
    </Layout>
  );
};

export default SignupPage;
