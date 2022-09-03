import React from "react";
type Props = {
  children?: any;
};
const Private: React.FC = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default Private