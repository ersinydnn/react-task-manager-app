import React from "react";
import * as S from "./styles";

function ProfileButton() {
  return (
    <S.ProfileButton>
      <S.Image
        src="https://avatars.githubusercontent.com/u/126578388?v=4"
        alt="Ersin Aydın"
      />
      <S.Content>
        <S.Text>Ersin Aydın </S.Text>
        <S.Subtitle>Admin</S.Subtitle>
      </S.Content>
    </S.ProfileButton>
  );
}

export { ProfileButton };
