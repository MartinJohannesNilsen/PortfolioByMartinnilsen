import { useRef, useEffect } from "react";

// I also made it to support running when specific values update in deps
// The default value for deps will be undefined if you did not pass it
// and will have the same effect as not passing the parameter to useEffect
// so it watch for general updates by default
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
