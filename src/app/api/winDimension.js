import { useEffect, useState } from "react";

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};

export default useDeviceSize;

const deviceSizeResponse = (xs, base, sm, md, lg, xl) => {
  base = base ? base : xs;
  sm = sm ? sm : base;
  md = md ? md : sm;
  lg = lg ? lg : md;
  xl = xl ? xl : lg;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [width, height] = useDeviceSize();
  if (width < 400) {
    return xs;
  } else if (width < 640) {
    return base;
  } else if (width < 768) {
    return sm;
  } else if (width < 1024) {
    return md;
  } else if (width < 1280) {
    return lg;
  } else {
    return xl;
  }
};
export { deviceSizeResponse };
