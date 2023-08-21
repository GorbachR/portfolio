import { WindowContext } from "../../context/WindowContext";
import Navigation from "./Navigation/Navigation";
import { useContext } from "react";

function Home() {
  const clientWidth = useContext(WindowContext);

  return (
    <div className="[&>*]:px-6 [&>*]:max-w-6xl [&>*]:mx-auto">
      <Navigation />
      <section>{clientWidth}</section>
    </div>
  );
}

export default Home;
