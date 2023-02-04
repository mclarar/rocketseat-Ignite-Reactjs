import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Postagem } from "./components/Postagem";

import styles from "./App.module.css";
import "./uteis/CSSGlobal/global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mclarar.png",
      name: "Maria Clara Ribeiro",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map((post) => {
              return (
                <Postagem
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            })}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
