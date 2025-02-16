import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Sidebar from "./_components/DashboardSide"; // Poprawiony import
import { SessionProvider } from "next-auth/react";

const DashboardPage = () => {
  return <></>;
};

export default DashboardPage;
