
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Postagem } from "./components/Postagem";

import styles from "./App.modules.css";
import "./uteis/CSSGlobal/global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Postagem />
        <Postagem />
      </div>
    </>
  );
}

export default App;
