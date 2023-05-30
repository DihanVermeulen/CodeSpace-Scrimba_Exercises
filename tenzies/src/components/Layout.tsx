import { ReactElement } from "react";

type Props = {
  children?: ReactElement;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <header>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click a dice to freeze it.</p>
      </header>
      <section>{children}</section>
    </>
  );
};

export default Layout;
