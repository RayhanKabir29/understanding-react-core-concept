import componentImg from "./assets/components.png";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              image={componentImg}
              title="Components"
              descreption="The core UI Building Block"
            />
            <CoreConcept
              image={componentImg}
              title="Components"
              descreption="The core UI Building Block"
            />
            <CoreConcept
              image={componentImg}
              title="Components"
              descreption="The core UI Building Block"
            />
            <CoreConcept
              image={componentImg}
              title="Components"
              descreption="The core UI Building Block"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
