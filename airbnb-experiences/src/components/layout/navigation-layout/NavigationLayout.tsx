import { ReactElement } from "react";
import { Header } from "../../Header";

type Props = {
  children: ReactElement | ReactElement[];
};

export const NavigationLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
