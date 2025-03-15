"use client";
import { FC } from "react";

import IconButton from "@mui/material/IconButton";

import { Icon, Modal } from "@/components";
import { NEED_OPTIONS } from "@/constants/globals";

import { NeedOption } from "./NeedOption";
import { NeedsTypeModalProps } from "./types";

export const NeedsTypeModal: FC<NeedsTypeModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} initialHeight="52%">
      <div className="md:w-[770px] rounded-large pt-0 px-16 pb-16 md:p-24">
        <div className="relative mb-8 md:mb-16 md:h-[34px] flex items-center justify-center">
          <div className="text-on-surface text-title-medium text-center">
            Select your item
          </div>
          <IconButton
            color="outlined"
            className="!w-32 !h-32 rounded-full !absolute -top-[26px] md:top-0 right-0"
            onClick={onClose}
          >
            <Icon name="Close remove" className="text-[20px]" />
          </IconButton>
        </div>

        <div className="flex md:flex-row flex-col gap-8">
          {NEED_OPTIONS.map((option, index) => (
            <NeedOption
              key={index}
              title={option.title}
              icon={option.icon}
              description={option.description}
              href={option.href}
              onClose={onClose}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};
