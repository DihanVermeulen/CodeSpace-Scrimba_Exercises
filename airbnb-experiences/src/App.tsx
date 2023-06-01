import "./App.css";
import { HomeLayout } from "./components/layout/HomeLayout";
import { NavigationLayout } from "./components/layout/NavigationLayout";

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
