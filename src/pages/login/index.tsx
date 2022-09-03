import { GetServerSideProps } from "next";
import { http } from '../../util/http';
import style from "../../styles/LoginPage.module.css";
import { setCookie } from "../../util/cookies";

const Login = (props: {}) => {

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const name = event.target.name.value
    const pass = event.target.pass.value

    const { data } = { data: { token: "123456789" } };
    setCookie("token", data.token)
  }

  return (
    <>
      <h1>Login</h1>
      <form method="POST" onSubmit={onSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="pass">Senha</label>
          <input type="password" id="pass" name="pass" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </>
  )
}
export default Login

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      name: 'Edinaldo Alves'
    }
  }
}