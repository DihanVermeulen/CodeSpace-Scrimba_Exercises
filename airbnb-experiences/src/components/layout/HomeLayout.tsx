import { ReactElement } from "react";

type Props = {
  children: ReactElement | ReactElement[];
};

export const HomeLayout = (props: Props) => {
  const { children } = props;
  return <>{children}</>;
};
