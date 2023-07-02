import React from "react";
import Carousel from "react-material-ui-carousel";
import ServiceCard from "../Cards/ServiceCard";

export function ServicesCarousel() {
  return (
    <Carousel>
      <ServiceCard
        title="Vehicle Service"
        description="Choose from our full service or normal service options."
        services={["Full service", "Normal service"]}
      />
      <ServiceCard
        title="Vehicle Check-up"
        description="We offer comprehensive check-ups for your engine, gearbox, and battery."
        services={["Engine check-up", "Gearbox check-up", "Battery check-up"]}
      />
      <ServiceCard
        title="Vehicle Repairing"
        description="Our experts can handle engine repairs, gearbox repairs, oil changes, and battery replacements."
        services={[
          "Engine repair",
          "Gearbox repair",
          "Oil change",
          "Battery replacement",
        ]}
      />
    </Carousel>
  );
}
