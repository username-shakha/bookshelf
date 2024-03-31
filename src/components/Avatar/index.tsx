import { Avatar, AvatarProps } from "@mui/material";

const CustomUserAvatar = ({ ...props }: AvatarProps) => {
  return <Avatar {...props} />;
};

export default CustomUserAvatar;
