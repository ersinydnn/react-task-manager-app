import React from "react";
import * as S from "./styles";

import { Topbar } from "../../components/topbar";
import { Sidebar } from "../../components/sidebar";
import { Main } from "../../components/main";

function MainLayout() {
  return (
    <div>
      <S.MainLayout>
        <Sidebar />
        <Topbar />
        <Main />
      </S.MainLayout>
    </div>
  );
}

export { MainLayout };
