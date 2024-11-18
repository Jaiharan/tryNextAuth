import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Dashboard = () => {
  return (
    <div className=" flex min-h-screen">
      <div className=" flex-1 bg-gray-100 dark:bg-gray-950">
        <div className=" p-6 grid gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className=" flex flex-row items-center justify-between pb-2">
                <CardTitle className=" text-sm font-medium">
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" text-2xl font-bold">$45,231</div>
                <p>+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className=" flex flex-row items-center justify-between pb-2">
                <CardTitle className=" text-sm font-medium">
                  Subscription
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" text-2xl font-bold">+2500</div>
                <p>+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className=" flex flex-row items-center justify-between pb-2">
                <CardTitle className=" text-sm font-medium">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" text-2xl font-bold">+12,300</div>
                <p>+18% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className=" flex flex-row items-center justify-between pb-2">
                <CardTitle className=" text-sm font-medium">
                  Active Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" text-2xl font-bold">+600</div>
                <p>+250 since last hour</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
