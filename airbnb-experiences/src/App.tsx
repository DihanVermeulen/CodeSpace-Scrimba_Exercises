import "./App.css";
import { HomeLayout } from "./components/layout/home-layout/HomeLayout";
import { NavigationLayout } from "./components/layout/navigation-layout/NavigationLayout";

function App() {
  return (
    <>
      <NavigationLayout>
        <HomeLayout />
      </NavigationLayout>
    </>
  );
}

export default App;
