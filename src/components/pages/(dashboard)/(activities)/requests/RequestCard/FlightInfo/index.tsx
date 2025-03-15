import Image from "next/image";

import { Airport } from "./Airport";

export const FlightInfo = () => {
  return (
    <div>
      <div className="flex flex-col gap-12 my-16">
        <Airport
          origin
          name="Vilnius Intl. Airport"
          iata_code="VNO"
          country="Lithuania"
          city="Vilnius"
          date="Thu 17 Oct"
          time="17:00"
          className="lg:hidden"
        />
        <Airport
          name="Vilnius Intl. Airport"
          iata_code="VNO"
          country="Lithuania"
          city="Vilnius"
          date="Thu 17 Oct"
          time="17:00"
          className="lg:hidden"
        />

        <div className="flex gap-12 items-center">
          <Image
            src="/images/profile-bg-default.jpeg"
            width={108}
            height={108}
            className="size-[94px] lg:size-[108px] rounded-small object-cover"
            alt="ticket"
          />
          <div className="flex flex-col grid-cols-2 lg:grid grow">
            <Airport
              origin
              name="Vilnius Intl. Airport"
              iata_code="VNO"
              country="Lithuania"
              city="Vilnius"
              date="Thu 17 Oct"
              time="17:00"
              className="hidden lg:block"
            />
            <Airport
              name="Vilnius Intl. Airport"
              iata_code="VNO"
              country="Lithuania"
              city="Vilnius"
              date="Thu 17 Oct"
              time="17:00"
              className="hidden lg:block"
            />

            <div className="col-span-2 mt-16 lg:col-span-1">
              <p className="text-label-medium text-outline">Airline</p>
              <div>
                <p className="space-x-2 text-label-large text-on-surface">
                  <span>American Airlines</span> <span>(AA)</span>
                </p>
              </div>
            </div>
            <div className="hidden mt-16 lg:block">
              <p className="text-label-medium text-outline">
                Flight /Ticket Number
              </p>
              <div>
                <p className="text-label-large text-on-surface">
                  <span>AA6647</span> <span className="text-outline">/</span>{" "}
                  <span>65423165465</span>
                </p>
              </div>
            </div>
            <div className="flex gap-12 items-center mt-16">
              <div className="lg:hidden">
                <p className="text-label-medium text-outline">Flight Number</p>
                <div>
                  <p className="text-label-large text-on-surface">
                    <span>65423165465</span>
                  </p>
                </div>
              </div>
              <div className="lg:hidden">
                <p className="text-label-medium text-outline">Ticket Number</p>
                <div>
                  <p className="text-label-large text-on-surface">
                    <span>AA6647</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-body-small text-on-surface">
          To ensure safe and proper handling of your document, hold it firmly by
          its edges. Avoid gripping it too tightly, as excessive pressure can
          cause damage. If the document is large or heavy, consider supporting
          it with both hands. When carrying multiple Document at once.
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-label-medium text-outline">Service Description</p>
        <div className="text-body-small text-on-surface">
          Flexible dimensions in travel and luggage refer to the ability to
          adjust the size or shape of assets or boxes to accommodate different
          items or travel needs.
        </div>
      </div>
    </div>
  );
};
