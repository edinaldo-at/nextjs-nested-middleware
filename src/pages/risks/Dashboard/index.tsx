import { GetServerSideProps } from "next"

const Dashboard = ({ name }: { name: string }) => {
  return (
    <>
      <h1>Página1</h1>
      <p>Olá {name}</p>
    </>
  )
}
export default Dashboard

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      name: 'Edinaldo Alves'
    }
  }
}