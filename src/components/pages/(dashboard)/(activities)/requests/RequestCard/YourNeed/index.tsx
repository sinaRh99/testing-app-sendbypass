import IconButton from "@mui/material/IconButton";

import { Dimensions } from "@/components/pages/(public)/connect-hub/StartToShop/ProductCard/Dimensions";
import { FlightInfo } from "@/components/pages/(public)/connect-hub/StartToShop/ProductCard/FlightInfo";
import { ImagesSlider } from "@/components/pages/(public)/connect-hub/StartToShop/ProductCard/ImagesSlider";
import { Weight } from "@/components/pages/(public)/connect-hub/StartToShop/ProductCard/Weight";
import { Icon } from "@/components/shared";
import { DEFAULT_CURRENCY } from "@/utils";

import { Airport } from "./Airport";
import { YourNeedProps } from "./types";

export const YourNeed = ({ onClose }: YourNeedProps) => {
  return (
    <div className="p-24 rounded-large bg-surface-container-lowest space-y-16 w-full lg:w-[938px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <div>
            <p className="text-title-medium text-on-surface">Your need </p>
            <span className="text-body-small text-on-surface-variant">
              Review the information carefully{" "}
            </span>
          </div>
        </div>
        <IconButton color="tonal" onClick={onClose}>
          <Icon name="Close remove" className="text-[24px]" />
        </IconButton>
      </div>
      <div className="space-y-24 lg:space-y-16">
        <div className="flex gap-12 items-center">
          <div className="lg:hidden">
            <ImagesSlider images={["/images/profile-bg-default.jpeg"]} />
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-0 lg:justify-between">
            <div className="space-y-2">
              <div className="text-title-medium text-on-surface">
                Xbox Series X – 2TB Galaxy Black Special Edition
              </div>
              <span className="hidden text-label-medium-prominent text-outline lg:block">
                Electronic Gadget
              </span>
            </div>
            <div className="flex gap-4 items-center lg:gap-0 lg:items-start lg:flex-col lg:pr-16">
              <div className="whitespace-nowrap text-label-medium-prominent text-on-surface lg:text-label-small lg:text-outline">
                Proposed Reward
              </div>
              <div className="text-title-medium text-on-surface">
                {DEFAULT_CURRENCY.symbol}15.00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          <FlightInfo
            flight={{
              destination: {
                location: 37,
                location_data: {
                  city: "Halifax",
                  longitude: 44.88079834,
                  latitude: -63.50859833,
                  id: 37,
                  country_iso2: "CA",
                  country_iso3: "CAN",
                  country: "Canada",
                  description: "",
                  type: "AIRPORT",
                  tag: "co:CAN:ci:Halifax:ai:YHZ:",
                  related_object: {
                    type: "LARGE",
                    iata_code: "YHZ",
                    website: "http://www.hiaa.ca/",
                    airport_code: "CYHZ",
                    name: "Halifax / Stanfield intl",
                  },
                },
                since: "2025-12-25T11:00:00Z",
                to: "2025-12-25T11:00:00Z",
                comment: "",
              },
              source: {
                location: 35,
                location_data: {
                  city: "Reykjavík",
                  longitude: 63.985001,
                  latitude: -22.6056,
                  id: 35,
                  country_iso2: "IS",
                  country_iso3: "ISL",
                  country: "Iceland",
                  description: "",
                  type: "AIRPORT",
                  tag: "co:ISL:ci:Reykjavik:ai:KEF:",
                  related_object: {
                    type: "LARGE",
                    iata_code: "KEF",
                    website: "https://www.isavia.is/en/keflavik-airport",
                    airport_code: "BIKF",
                    name: "Keflavik intl",
                  },
                },
                since: "2025-12-25T11:00:00Z",
                to: "2025-12-25T11:00:00Z",
                comment: "",
              },
            }}
            className="hidden md:block"
          />
          <div className="space-y-12 md:hidden">
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
          <div className="flex gap-6 items-center w-full md:w-auto">
            <Weight value={12} className="w-full lg:w-auto" />
            <div>
              <Dimensions height={12} width={12} length={12} />
            </div>
            <div className="hidden lg:block">
              <ImagesSlider images={["/images/profile-bg-default.jpeg"]} />
            </div>
          </div>
        </div>
        <div className="text-body-small text-on-surface-variant">
          To ensure safe and proper handling of your document, hold it firmly by
          its edges. Avoid gripping it too tightly, as excessive pressure can
          cause damage. If the document is large or heavy, consider supporting
          it with both hands. When carrying multiple Document at once, stack
          them carefully to prevent bending or tearing.
        </div>
      </div>
    </div>
  );
};
