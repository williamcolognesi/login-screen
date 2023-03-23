import { Grid } from "@mui/material";
import * as S from "./styles";
import { useState } from "react";
import useWindowSize from "../lib/useWindowSize";

function SignIn() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const size = useWindowSize();
  return (
    <S.ContainerLogin>
      <Grid container justifyContent="center" alignItems="center">
        {size.width > 900 && (
          <Grid item md={6}>
            <S.Background>
              <S.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </S.Text>
            </S.Background>
          </Grid>
        )}
        <Grid item md={6} xs={12}>
          <S.FormContainer>
            <S.FormBox>
              <h1>SignIn</h1>
              <S.FormContent>
                <input
                  placeholder="Digite seu nome"
                  type="email"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <input
                  placeholder="Digite seu CPF"
                  type="email"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
                <input
                  placeholder="Digite seu e-mail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  placeholder="Digite sua senha"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <S.Button>
                  <S.Btn bg={"#301B52"}>Register</S.Btn>
                  <S.Btn bg={"#DB0916"}>Login</S.Btn>
                </S.Button>
              </S.FormContent>
            </S.FormBox>
          </S.FormContainer>
        </Grid>
      </Grid>
    </S.ContainerLogin>
  );
}

export default SignIn;
