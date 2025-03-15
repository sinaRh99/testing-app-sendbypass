import { RequestTrip } from "./RequestTrip";
import { ServiceHeader } from "./ServiceHeader";

export const RequestCard = () => {
  return (
    <div className="space-y-8 rounded-medium bg-surface-container-low">
      <ServiceHeader />
      <div className="px-8 pb-8">
        <RequestTrip />
      </div>
    </div>
  );
};
