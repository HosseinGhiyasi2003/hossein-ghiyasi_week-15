import { useEffect, useState } from "react";
import Input from "./Input";
import citiesList from "./cities.json";

function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [cities, setCities] = useState(citiesList);
  const [inputText, setInputText] = useState("");
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText) {
        const formattedInput = capitalizeWords(inputText);
        const filteredCities = cities.filter((city) => {
          return city.startsWith(formattedInput);
        });
        setSuggestions(filteredCities);
        setShowNoResults(filteredCities.length === 0);
      } else {
        setSuggestions([]);
        setShowNoResults(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputText]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const capitalizeWords = (text) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div>
      <Input
        inputText={inputText}
        setInputText={setInputText}
        handleChange={handleChange}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        showNoResults={showNoResults}
        setShowNoResults={setShowNoResults}
      />
    </div>
  );
}

export default App;
