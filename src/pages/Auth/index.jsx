import { Link, Outlet, useNavigate } from "react-router-dom";
import image from "../../image/istockphoto.jpg";
import Button from "../../componet/Button";

function Auth({children, className = ""}) {
  const navigateTo = useNavigate();

  return (
    <section className="relative h-screen w-full flex-col min-h-screen  flex items-center justify-center">
      {/* Banner Image */}
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover -z-20 opacity-80"
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1 className="text-6xl font-extrabold text-sky-500">Authentication</h1>
        <div className="flex gap-4">
          <Button className={`...${className} w-32 text-white`} children={"Signin"} onClick={() => navigateTo("/auth/signin")} />
          <Button className={`...${className} w-32 text-white`} children={"Signup"} onClick={() => navigateTo("/auth/signup")} />
        </div>
      </div>
      <div className="relative z-10 w-full max-w-xl px-4">
        <Outlet />
      </div>
    </section>
  );
}

export default Auth;
