import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";
import "./Wrapper.module.scss";

export const Wrapper = () => {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};