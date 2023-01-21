import "./App.css";
import unifor from "./assets/unifor-logo.png";

function App() {
  return (
    <div className="main d-flex">
      <div className="dados">
        <section className="foto-conteudo">
          <i class="fa-solid fa-user fa-10x foto"></i>
          <h1 className="nome">Carlos Ruan Araujo</h1>
          <h1 className="sou">Desenvolvedor Web</h1>
          <hr></hr>
        </section>
        <section className="conteiner-c">
          <h1>Contatos</h1>
          <h5 className="contato">
            <i class="fa-solid fa-phone me-2 "></i>+55 (85) 988556401
          </h5>
          <h5 className="contato">
            <i class="fa-solid fa-envelope me-2 "></i>
            carlosruanaraujo789@gmail.com
          </h5>
          <a
            href="https://www.linkedin.com/in/ruan-araujo-2aa28425a/"
            className="h5 contato"
          >
            <i class="fa-brands fa-linkedin  me-2"></i>
            linkedin.com/in/ruan-araujo-2aa28425a/
          </a>
          <a href="https://github.com/carlosruan12307" className="h5 contato">
            <i class="fa-brands fa-github  me-2"></i>github.com/carlosruan12307
          </a>
        </section>
        <section className="conteiner-f">
          <h1>Formacação Acadêmica</h1>
          <div className="conteiner-flex-logo">
            <img alt="" className="logo-unifor me-3" src={unifor}></img>
            <h5 className="mt-2 text-white">
              Unifor -&gt; Ciencia Da Computacao -&gt; 2019 - Atual
            </h5>
          </div>
        </section>
      </div>
      <div className="aprofundado border border-danger">
        <section className="sobre-min">
          <h2 className="sobre-min-text">SOBRE MIM</h2>
          <p>
            Ola, meu nome é Ruan, e atualmente estou estudando programação e
            procura de uma oportunidade para conseguir progredir com minha
            carreira. Eu comecei a programar sem muito entusiasmo ate conhecer a
            area de Desenvolvimento Web, que eu simplesmente amei no primeiro
            momento. Desde entao, sempre estou criando algum projeto pessoal
            para desenvolver minhas habilidades. Eu sempre gostei de aprender
            coisas novas, e a area de programação, assim como as diversas
            tecnologias que estao sendo criadas a todo momento nao poderiam ser
            o melhor palco para minha curiosidade.
          </p>
        </section>
        <section className="experiencias">
          <h2 className="experiencias-text">Experiencias</h2>
          <p>
            Estou tentando agora iniciar minha carreira, mas sempre estou
            desenvolvendo projetos pessoais la no github. Como eu gosto bastante
            de ver todo o sistema em funcionamento, normalmente eu desenvolvo
            projetos full stack, entao ainda nao consegui disponibilizar eles
            (devido a disponibilizaçao do backend), mas estou no processo. Eu
            gosto bastante de ver cursos no youtube e em algumas plataformas,
            atualmente estou estudando spring security na udemy.
          </p>
          <p>
            {" "}
            Aqui alguns projetos principais que eu finalizei a pouco tempo:
          </p>
          <ul className="mt-3">
            <li>
              tela de login tema do brasil (epoca da copa) -&gt;{" "}
              <a href="https://github.com/carlosruan12307/Tela-Simples-Login-Brasil-">
                https://github.com/carlosruan12307/Tela-Simples-Login-Brasil-
              </a>
            </li>
            <li>
              jogo da memoria simples com javascript e DOM -&gt;{" "}
              <a href="https://github.com/carlosruan12307/JogoMemoria">
                https://github.com/carlosruan12307/JogoMemoria
              </a>
            </li>
            <li>
              configuraçao do basic authentication com spring -&gt;{" "}
              <a href="https://github.com/carlosruan12307/Spring-Security-Finalizado">
                https://github.com/carlosruan12307/Spring-Security-Finalizado
              </a>{" "}
            </li>
            <li>
              authorization server do fluxo authorization code do protocolo
              Oauth2(spring) -&gt;{" "}
              <a href="https://github.com/carlosruan12307/Oauth2-1.0-ServerInDatabase">
                https://github.com/carlosruan12307/Oauth2-1.0-ServerInDatabase
              </a>
            </li>
            <li>
              projeto criado da minha imaginaçao (site de noticias) -&gt;{" "}
              <a href="https://github.com/carlosruan12307/ProjetoDoZero">
                https://github.com/carlosruan12307/ProjetoDoZero
              </a>
            </li>
            <li>
              simulando netflix -&gt;{" "}
              <a href="https://github.com/carlosruan12307/banzaiflix">
                https://github.com/carlosruan12307/banzaiflix
              </a>
            </li>
          </ul>
        </section>
        <section className="habilidades">
          <h2 className="habilidades-text">Habilidades</h2>
          <ul className="lista-habilidades">
            <li>Java</li>
            <li>Javascript</li>
            <li>Html</li>
            <li>Css</li>
            <li>Boostrap</li>
            <li>Spring , Spring Security</li>
            <li>Manipulação DOM</li>
            <li>Jquery</li>
            <li>Git/Github</li>
            <li>Sql</li>
            <li>MySql</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
