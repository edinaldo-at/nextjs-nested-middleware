import { GetServerSideProps } from "next";

const Risks = () => {
  return ''
}
export default Risks

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: "/risks/Dashboard",
    },
    props: {},
  };
}