import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = useMemo(() => {
    return { user, setUser, loading, setLoading };
  }, [user, setUser, loading, setLoading]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
