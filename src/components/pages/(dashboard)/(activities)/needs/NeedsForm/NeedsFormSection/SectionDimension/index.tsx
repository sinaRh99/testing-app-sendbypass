"use client";

import { useEffect } from "react";

import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import { Icon } from "@/components";

import { TitleWrapper } from "../TitleWrapper";

export const SectionDimension = () => {
  const { control, watch, clearErrors, setValue } = useFormContext();
  const isFlexible = watch("dimension.isFlexible") || false;

  const fields = [
    { key: "weight", label: "Weight", endAdornment: "g", disabled: false },
    {
      key: "width",
      label: "Width",
      endAdornment: "cm",
      disabled: isFlexible,
    },
    {
      key: "length",
      label: "Length",
      endAdornment: "cm",
      disabled: isFlexible,
    },
    {
      key: "height",
      label: "Height",
      endAdornment: "cm",
      disabled: isFlexible,
    },
  ];
  useEffect(() => {
    if (isFlexible) {
      clearErrors(["dimension.width", "dimension.height", "dimension.length"]);
      setValue("dimension.width", "");
      setValue("dimension.height", "");
      setValue("dimension.length", "");
    }
  }, [isFlexible, clearErrors, setValue]);

  return (
    <TitleWrapper
      title={
        <span>
          Dimension{" "}
          <span className="text-on-surface-variant text-label-medium">
            {"(optional)"}
          </span>
        </span>
      }
      extraRender={
        <div className="flex gap-16 justify-between items-center">
          <label
            htmlFor="flexibleDimension"
            className="flex items-center text-on-surface text-label-large"
          >
            Flexible Dimension
            <Icon name="info-circle" className="text-[20px] pl-2" />
          </label>
          <Controller
            control={control}
            name="dimension.isFlexible"
            defaultValue={false}
            render={({ field }) => (
              <Switch
                id="flexibleDimension"
                checked={field.value}
                onChange={(_, checked) => field.onChange(checked)}
              />
            )}
          />
        </div>
      }
      subtitle='Enter the weight and size of the item. Enable "Flexible Dimension" if values can vary.'
    >
      <div className="grid grid-cols-1 gap-16 mb-24 md:grid-cols-4">
        {fields.map(({ key, label, endAdornment, disabled }) => (
          <Controller
            key={key}
            control={control}
            name={`dimension.${key}`}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={label}
                className="text-on-surface-variant"
                size="medium"
                error={!!error?.message}
                helperText={error?.message}
                autoComplete="off"
                disabled={disabled}
                type="number"
                slotProps={{
                  input: {
                    endAdornment: endAdornment && (
                      <span className="text-body-medium text-outline">
                        {endAdornment}
                      </span>
                    ),
                  },
                }}
              />
            )}
          />
        ))}
      </div>
    </TitleWrapper>
  );
};
