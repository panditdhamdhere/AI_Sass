"use client";

import { useEffect } from "react";

import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("94672c37-4d94-4e86-b8ec-25f778e9883e");
  }, []);

  return null;
};
