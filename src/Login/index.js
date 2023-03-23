import { Grid } from "@mui/material";
import * as S from "./styles";
import { useState } from "react";
import useWindowSize from "../lib/useWindowSize";

function Login() {
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
              <h1>Login</h1>
              <S.FormContent>
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
                <a href="#">Forgot Password?</a>
                <a href="/register">Don't have an account?</a>
                <S.Button>
                  <S.Btn bg={"#301B52"}>Login</S.Btn>
                  <S.Btn bg={"#DB0916"}>SignUp</S.Btn>
                </S.Button>
              </S.FormContent>
            </S.FormBox>
          </S.FormContainer>
        </Grid>
      </Grid>
    </S.ContainerLogin>
  );
}

export default Login;
