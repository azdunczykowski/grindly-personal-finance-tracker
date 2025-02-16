import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Sidebar from "./_components/DashboardSide";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex">
      <Sidebar session={session} />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
