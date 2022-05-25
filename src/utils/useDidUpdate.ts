import { useRef, useEffect } from "react";

function useDidUpdate(callback: any, deps: any[]) {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
    //eslint-disable-next-line
  }, deps);
}
export default useDidUpdate;
