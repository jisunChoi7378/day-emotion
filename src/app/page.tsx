import { redirect } from "next/navigation";

const HomeRedirect = () => {
  redirect("/intro");
};

export default HomeRedirect;
