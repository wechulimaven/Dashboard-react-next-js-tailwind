import React from "react";
import CardLineChart from "../components/Cards/CardLineChart";
import Admin from "../layouts/AdminLayout";
import Navbar from "../components/Navbars/AdminNavbars";
import HeaderStats from "../components/Headers/HeaderStats";
import Sidebar from "../components/Sidebar/Sidebar";
import CardBarChart from "../components/Cards/CardBarChart";
import CardPageVisits from "../components/Cards/CardVisitPage";
import CardSocialTraffic from "../components/Cards/SocialTraffic";

export default function Dashboard() {
  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>
        {/* <FooterAdmin /> */}
      </div>
    </>
  );
}

Dashboard.layout = Admin;
