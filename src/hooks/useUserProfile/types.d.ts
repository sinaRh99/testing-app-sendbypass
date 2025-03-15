import { UserData } from "@/services/types";

export interface UseUserProfileModal {
  id?: number;
  user?: UserData;
}

export interface UseUserProfileModalResult {
  isOpen: boolean;
  toggleProfile: () => void;
  UserProfile: JSX.Element;
}

export interface SocialItem {
  type: string;
  link: string;
  icon: string;
}
