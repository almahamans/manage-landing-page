import SmHeader from "./smHeader";
import LgHeader from "./lgHeader";
import { useEffect, useState } from "react";

function DisplayHeader(){
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 640;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

    return width < breakPoint ? <SmHeader/> : <LgHeader/>
}
export default DisplayHeader;