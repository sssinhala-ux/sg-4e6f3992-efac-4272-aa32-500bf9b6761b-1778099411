import { Outlet } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

export default function Root() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}