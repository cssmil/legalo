"use client";

import { DashboardClienteProvider } from "@/contexts/dashboardClienteContext";
import React, { ReactNode } from "react";

const BusquedaLayout = ({ children }:{ children: ReactNode }) => {
  return <DashboardClienteProvider>{children}</DashboardClienteProvider>;
};

export default BusquedaLayout;