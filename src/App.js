import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center"> Dictionary App </h1>
        <Dictionary />
        <footer className="text-center text-muted mt-4">
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
