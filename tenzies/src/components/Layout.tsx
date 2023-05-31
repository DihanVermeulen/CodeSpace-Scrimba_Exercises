import { ReactElement } from "react";

type Props = {
  children?: ReactElement | ReactElement[];
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <header className="header">
          <h1 className="header__heading">Tenzies</h1>
          <p className="header__description">
            Roll until all dice are the same. Click a dice to freeze it in
            place.
          </p>
        </header>
        <div className="space" />
        <section>{children}</section>
      </div>
    </>
  );
};

export default Layout;
