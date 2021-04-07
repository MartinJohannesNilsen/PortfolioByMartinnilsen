import { useReducer } from "react";
export default function useForceUpdate(): () => void {
  return useReducer(() => ({}), {})[1] as () => void;
}

// export default function useForceUpdate(): () => void {
//   return () => window.location.reload();
// }
