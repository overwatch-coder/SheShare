"use client";
import Logout from "@/components/Logout";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSidebar = () => {
  const dashboardLinks = [
    { name: "Account", path: "/dashboard" },
    { name: "Bookings", path: "/dashboard/bookings" },
    { name: "Listings", path: "/dashboard/listings" },
    { name: "Add Listing", path: "/add-listing" },
  ];

  const { user } = useAuth();
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-7 px-5 pt-20 bg-primary-dark w-[250px]">
      <h1 className="text-xl font-bold capitalize text-white pt-10">
        <Link href="/dashboard">Dashboard</Link>
      </h1>
      <ul className="flex flex-col gap-5 min-h-screen">
        {dashboardLinks.map((link) => {
          const active = pathname === link.path;
          const isUserHost = user?.role === "host";
          const isPathnameListing = pathname.startsWith("/dashboard/listings");
          const isPathnameAddListing = pathname.startsWith("/add-listing");
          const isHostAndListings = isUserHost && isPathnameListing;
          const isHostAndAddListing = isUserHost && isPathnameAddListing;

          return (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                active
                  ? "bg-pink-500 rounded text-white"
                  : "text-pink-500 hover:text-white hover:rounded hover:bg-pink-500"
              } px-3 py-2 hover:scale-105 transition ${
                isHostAndAddListing && "hidden"
              } ${isHostAndListings && "hidden"}`}
            >
              {link.name}
            </Link>
          );
        })}

        <Logout />
      </ul>
    </div>
  );
};

export default DashboardSidebar;
