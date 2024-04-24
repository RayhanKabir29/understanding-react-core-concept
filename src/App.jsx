import descImg from "./assets/react-core-concepts.png";
const reactDescription = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[getRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              image={descImg}
              title="Components"
              description="Building Block For UI"
            />
            <CoreConcept
              image={descImg}
              title="JSX"
              description="Building Block For UI"
            />
            <CoreConcept
              image={descImg}
              title="Props"
              description="Building Block For UI"
            />
            <CoreConcept
              image={descImg}
              title="State"
              description="Building Block For UI"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
