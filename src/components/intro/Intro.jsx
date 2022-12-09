import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="Introleft">
        <div className="imgcontainer">
          <img src="./assets/man.png" alt="" />
        </div>
      </div>
      <div className="Introright">
        <h2>Hi, there i' am </h2>
        <h1>Shahbaz Alam</h1>
        <div className="typo">
          <h3>Frelance</h3>
          <h3>
            <Typewriter
              options={{
                strings: ["Developer", "Designer", "Content Creater"],
                autoStart: true,
                delay: 75,
                loop: true,
              }}
            />
          </h3>
        </div>
        <div>
          <a href="#portfolio">
            <img src="assets/downarrow.png" alt="" className="darrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
