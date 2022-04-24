import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center"> Learn It! </h1>
        <Dictionary defaultWord="learn" />
        <footer className="text-center  mt-4 mb-4">
          Coded by Homa Sharifmousavi and{" "}
          <a
            href="https://github.com/h0ma-s/dictionary-project"
            target="_blank"
            rel="noopenr noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
