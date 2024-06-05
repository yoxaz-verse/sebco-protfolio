import React from "react";
import { clientSays, services } from "@/data/content-data";
import ClientSaysCard from "./client-say-card";

const ClientSaysComponent = () => {
  return (
    <div className="flex justify-evenly items-center flex-col py-3 my-20">
      <div className="text-[#FFBD12] text-4xl pb-20 font-medium">
        What Our Client Says!
      </div>
      <div className="w-10/12 flex flex-wrap justify-evenly gap-10">
        {clientSays.map((client, index) => (
          <ClientSaysCard key={index} client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientSaysComponent;
