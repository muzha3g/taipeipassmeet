import React from "react";
import ActivityCard from "../components/ActivityCard";

const Home = () => {
  return (
    <main className="flex flex-column flex-wrap justify-center items-center">
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </main>
  );
};

export default Home;
