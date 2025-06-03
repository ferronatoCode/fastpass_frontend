"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  UtensilsCrossed,
  Bus,
  Store,
  Film,
  Activity,
  BookText,
} from "lucide-react";

export function DashboardPage() {
  const categories = [
    { label: "University Food", icon: UtensilsCrossed },
    { label: "Transport", icon: Bus },
    { label: "Lunch Points", icon: Store },
    { label: "Entertainment", icon: Film },
    { label: "Sports", icon: Activity },
    { label: "Library", icon: BookText },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="w-full border-b border-gray-200 bg-white px-4 py-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">⚡ FastPass</h1>
          <Badge className="bg-blue-600 text-white px-3 py-1 text-sm rounded-sm">
            Saldo: $245.50
          </Badge>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* CATEGORIES */}
        <Card className="p-4 border border-gray-200 shadow-sm">
          <h2 className="text-md font-semibold mb-3">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const isSelected = i === 0;
              return (
                <Button
                  key={cat.label}
                  variant="outline"
                  className={`text-sm flex items-center gap-2 px-4 py-2 rounded-sm ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-[#EFF6FF] text-blue-700 border border-transparent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </Button>
              );
            })}
          </div>
        </Card>

        {/* REGULAR TICKETS */}
        <Card className="p-4 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Your Regular Tickets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Campus Cafeteria", place: "Central University", price: "$8.50" },
              { title: "Bus Pass", place: "City Transit", price: "$3.75" },
              { title: "Food Court", place: "Tech Park", price: "$12.00" },
              { title: "Coffee Shop", place: "Student Center", price: "$4.25" },
              { title: "Subway Ticket", place: "Downtown Line", price: "$2.50" },
              { title: "Dining Hall", place: "North Campus", price: "$9.75" },
            ].map((item, i) => (
              <Card key={i} className="p-4 flex flex-col justify-between border border-gray-200 shadow-sm rounded-sm">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.place}</p>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="font-medium">{item.price}</span>
                  <Button className="bg-black text-white hover:bg-blue-700 text-sm rounded-sm">
                    Buy Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <Separator className="my-6" />

        {/* POPULAR TICKETS */}
        <Card className="p-4 border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Popular Tickets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { img: "/img1.jpg", title: "Student Meal Plan", place: "University Dining Hall", price: "$100.00" },
              { img: "/img2.jpg", title: "Monthly Transit Pass", place: "City Metro", price: "$45.00" },
              { img: "/img3.jpg", title: "Campus Recreation Pass", place: "University Gym", price: "$65.00" },
              { img: "/img4.jpg", title: "Library Premium Access", place: "Central Library", price: "$35.00" },
            ].map((ticket, i) => (
              <Card key={i} className="overflow-hidden shadow-md border border-gray-200 rounded-sm">
                <div className="h-36 bg-gray-100">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${ticket.img})` }}
                  />
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{ticket.title}</h3>
                    <Badge className="bg-blue-600 text-white rounded-sm">
                      {ticket.price}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">{ticket.place}</p>
                  <Button className="w-full mt-2 bg-black text-white hover:bg-blue-700 text-sm rounded-sm">
                    Purchase Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
