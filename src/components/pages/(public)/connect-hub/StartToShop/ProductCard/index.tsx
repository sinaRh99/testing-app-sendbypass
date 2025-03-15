import { FC } from "react";

import Divider from "@mui/material/Divider";
import { useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { useToggle } from "usehooks-ts";

import { Modal } from "@/components/shared";
import { AUTH_ROUTES } from "@/constants";
import { getToken } from "@/utils";

import { SuccessFullRequestSent } from "../../SuccessFullRequestSent";

import { ActionBar } from "./ActionBar";
import { Features } from "./Features";
import { FlightInfo } from "./FlightInfo";
import { ProductInfo } from "./ProductInfo";
import { RequirementRequest } from "./RequirementRequest";
import { ProductCardProps } from "./types";

export const ProductCard: FC<ProductCardProps> = ({ requirement }) => {
  const [openReviewModal, toggleReviewModal] = useToggle();
  const [openSuccessModal, toggleSuccessModal] = useToggle();

  const { push } = useRouter();
  const searchParams = useSearchParams();

  const isLoggedIn = getToken("access");

  const productInfo = {
    user: requirement.user_data,
    name: requirement.name,
    image: requirement.image,
    link: requirement.properties.link,
    price: requirement.cost.item_price,
    category: requirement.properties.type,
  };

  const flight = {
    source: { ...requirement.source },
    destination: { ...requirement.destination },
  };

  const features = {
    width: requirement.properties.width,
    height: requirement.properties.height,
    length: requirement.properties.length,
    weight: requirement.properties.weight,
    images: [requirement.image],
  };

  const hanldeOpenPreviewRequest = () => {
    if (!isLoggedIn) {
      const params = new URLSearchParams(searchParams.toString());
      params.set(
        "redirect",
        window.location.pathname + "?" + searchParams.toString(),
      );

      push(`${AUTH_ROUTES.signin}?${params.toString()}`);
      return;
    }
    toggleReviewModal();
  };

  return (
    <div className="p-12 space-y-20 xl:space-y-16 bg-surface-container-lowest rounded-small">
      <ProductInfo {...productInfo} />
      <div className="flex flex-col gap-20 items-start xl:flex-row xl:justify-between">
        <FlightInfo flight={flight} />
        <Features {...features} />
      </div>
      <Divider />
      <ActionBar
        description={requirement.comment}
        reward={requirement.cost.wage}
        onOpenReviewModal={hanldeOpenPreviewRequest}
      />

      <Modal
        open={openReviewModal}
        onClose={toggleReviewModal}
        initialHeight="50%"
      >
        <RequirementRequest
          flight={flight}
          description={requirement.comment}
          features={{
            width: features.width,
            height: features.height,
            length: features.length,
            weight: features.weight,
          }}
          requirementId={requirement.id}
          cost={requirement.cost.wage}
          onClose={toggleReviewModal}
          callback={toggleSuccessModal}
          {...productInfo}
        />
      </Modal>
      <Modal open={openSuccessModal} onClose={toggleSuccessModal}>
        <SuccessFullRequestSent onClose={toggleSuccessModal} />
      </Modal>
    </div>
  );
};
