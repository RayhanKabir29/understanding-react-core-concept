import componentImg from "./assets/components.png";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";

function App() {
  const handleClick = (selectedButton) => {
    console.log("Clicked",selectedButton);
  };
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
              title="JSX"
              descreption="The core UI Building Block"
            />
            <CoreConcept
              image={componentImg}
              title="Props"
              descreption="The core UI Building Block"
            />
            <CoreConcept
              image={componentImg}
              title="State"
              descreption="The core UI Building Block"
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("component")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
