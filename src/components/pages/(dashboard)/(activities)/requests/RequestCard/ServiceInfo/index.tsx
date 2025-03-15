import Image from "next/image";

import { Dimensions } from "@/components/pages/(public)/connect-hub/StartToShop/ProductCard/Dimensions";
import { Weight } from "@/components/pages/(public)/connect-hub/StartToShop/ProductCard/Weight";

import { Airport } from "../YourNeed/Airport";

export const ServiceInfo = () => {
  return (
    <div>
      <div className="flex flex-col gap-16 my-16">
        <div className="flex flex-col gap-24 lg:flex-row lg:items-center">
          <div className="flex gap-12 items-start">
            <Image
              src="/images/profile-bg-default.jpeg"
              width={108}
              height={108}
              className="min-w-[94px] min-h-[94px] size-[94px] lg:size-[108px] rounded-small object-cover"
              alt="ticket"
            />
            <div className="text-title-medium text-on-surface lg:hidden">
              Xbox Series X – 2TB Galaxy Black Special Edition
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <div className="hidden space-y-2 lg:block">
              <div className="text-title-medium text-on-surface">
                Xbox Series X – 2TB Galaxy Black Special Edition
              </div>
              <p className="text-body-small text-on-surface">
                Electronic Gadget
              </p>
            </div>
            <div className="flex flex-col gap-24 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
              <Airport
                origin
                name="Reykjavík"
                country="Iceland"
                date="Thu 17 Oct"
                iata_code="KEF"
              />
              <Airport
                name="Reykjavík"
                country="Iceland"
                date="Thu 17 Oct"
                iata_code="KEF"
              />
            </div>
          </div>
          <div className="flex gap-6 items-center w-full  lg:w-auto lg:self-end">
            <Weight value={12} className="w-full" />
            <Dimensions height={12} width={12} length={12} />
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
