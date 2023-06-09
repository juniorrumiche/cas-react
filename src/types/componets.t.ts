import { ReactNode } from "react";
import { BuymanProps } from "./buyman.t";

export interface BaseProps {
  children?: ReactNode;
}

export interface BaseDialogProps extends BaseProps {
  isOpen: boolean;
  onClose: any;
  // onClose: any;
}

export interface DeleteDialgoBuymanProps extends BaseDialogProps, BuymanProps {}

export interface CardBuymanProps {
  buyman: BuymanProps;
}

export interface DetailsDialogBuymanProps extends BaseDialogProps {
  buyman: BuymanProps;
}

export interface EditDialogBuymanProps extends BaseDialogProps {
  buyman: BuymanProps;
}
