import { useMutation } from "@tanstack/react-query";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { signout } from "../../api/queries/auth";
import MainButton from "../common/mianBtn";
import { ICONS_SIZE } from "../../utils/config/constants";

export default function Logout() {
  const router = useNavigate()
  const logoutMutation = useMutation({
    mutationKey: ["signout"],
    mutationFn: signout,
  });

  const handleLogout = () => {
    logoutMutation.mutate();
    localStorage.clear();
    router("/");
    window.location.reload()
  };
  return (
    <MainButton onClick={handleLogout} className=" text-red flex items-center gap-[10px] bg-transparent shadow-md p-0">
      <IoMdLogOut size={ICONS_SIZE} />
      Logout
    </MainButton>
  );
}