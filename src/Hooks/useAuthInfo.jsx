"use client"
import { AuthContext } from "@/components/context/AuthContext";
import React, { use } from "react";

const useAuthInfo = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default useAuthInfo;
