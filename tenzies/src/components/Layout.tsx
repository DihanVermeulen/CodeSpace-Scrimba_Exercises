import { ReactElement } from "react";

type Props = {
  children?: ReactElement;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <header className="header">
        <h1 className="header__heading">Tenzies</h1>
        <p className="header__description">
          Roll until all dice are the same. Click a dice to freeze it.
        </p>
      </header>
      <section>{children}</section>
    </>
  );
};

export default Layout;
