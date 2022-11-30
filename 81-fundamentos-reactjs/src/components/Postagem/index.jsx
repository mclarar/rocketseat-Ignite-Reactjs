import styles from "./styles.module.css";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";

export function Postagem() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/92939498?v=4" />
          <div className={styles.authorInfo}>
            <strong>Maria</strong>
            <span>Web dev</span>
          </div>
        </div>

        <time title="16 de Novembro às 22:26" dateTime="2022-16-11 00:22:25">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉
          <a href="#"> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#"> #novoprojeto </a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="deixe um comentário" />
        <footer>
          <button type="submit"> Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
