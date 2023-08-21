import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/linkHover.css";
import { useContext } from "react"
import { ThemeContext } from "../component/ThemeContext"


const RightNavbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { isDark } = useContext(ThemeContext);
  console.log(isDark);

  return (
    //flex flex-col gap-y-10 justify-between w-16 min-h-screen 
    <div
      className={`flex flex-col gap-y-10 justify-between w-16 p-auto min-h-screen fixed top-0 right-0 h-full ${
        pathname === "/Projects" ? "bg-[#1A1818] text-dark-text " : isDark ? 'bg-dark-bg' : "bg-off-white"
      }`}
    >
      <div className="origin-center -rotate-90 flex flex-row gap-x-6 my-auto mt-52 ">
      {pathname === "/" ? (
        <>
        <a
          className="m-3 text-xxs dark:text-dark-text tracking-widest"
          href="https://github.com/Doh1024"
        >
          "GH"
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </a>
        
        <a
          className="m-3 text-xxs dark:text-dark-text tracking-widest"
          href="https://www.linkedin.com/in/dohyeong-kim-02a753250/"
        >
          "LI"
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </a>

        <Link
          className="m-3 text-xxs dark:text-dark-text tracking-widest"
          to="/Contact"
        >
          "EM"
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </Link>
        </>
      ) : (
        <Link className="m-3 text-xs tracking-widest dark:text-dark-text" to="/">
            "Home"
            <svg viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </Link>
        )}
      </div>
      <div className="mt-16 inline-flex justify-center w-full"> {/*mb-60 ml-2 inline-flex justify-center w-full*/}
        <div className={`h-[150px] bg-black w-[2px] ${
            pathname === "/Projects" ? "bg-white" : "bg-black"
          }`}></div>
      </div>
      <div className="tracking-widest origin-center dark:text-dark-text -rotate-90 text-xxs my-auto mb-20">
       "© 2022"
      </div>
    </div>
  );
};

export default RightNavbar;
