import { FC, useEffect } from "react";
import { useLocation } from "react-use";

type scrollToTopProps = {};

const ScrollToTop: FC<scrollToTopProps> = (props) => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
