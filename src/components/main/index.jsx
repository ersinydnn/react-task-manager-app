import React from "react";
import * as S from "./styles";
import { Outlet, useNavigation } from "react-router-dom";
function Main() {
  const navigation = useNavigation();
  return (
    <S.Main element="main" isLoading={navigation.state !== "idle"}>
      <Outlet />
    </S.Main>
  );
}

export { Main };
