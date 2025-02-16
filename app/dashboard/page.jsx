import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DashboardNav from "./_components/DashboardNav";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <>
      <DashboardNav session={session} />
      <h1>Member Server Session</h1>
      <p>{session?.user.email}</p>
      <p>{session?.user.name}</p>
    </>
  );
};

export default DashboardPage;
