import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Contexts/ContextUser";

import Admin from "../../components/Admin/Admin";
import FoncArtiste from "../../components/FoncArtiste/FoncArtiste";
import "./MyAccount.scss";

function MyAccount() {
  const { user } = useUser();
  const navigate = useNavigate();
  if (user === null) {
    navigate("/");
  }

  return <div>{user.id_role === 1 ? <Admin /> : <FoncArtiste />}</div>;
}

export default MyAccount;
