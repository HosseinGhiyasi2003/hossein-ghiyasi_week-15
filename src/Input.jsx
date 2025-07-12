/* eslint-disable react/prop-types */
import styles from "./Input.module.css";

const Input = ({
  handleChange,
  suggestions,
  setSuggestions,
  inputText,
  setInputText,
  showNoResults,
  setShowNoResults,
}) => {
  return (
    <div className={styles.input}>
      <input type="text" id="input" value={inputText} onChange={handleChange} />
      {suggestions.length > 0 ? (
        <ul className={styles.suggestions}>
          {suggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => {
                setInputText(city);
                setSuggestions([]);
                setShowNoResults(false);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      ) : (
        <p>{showNoResults && "No Results"}</p>
      )}
    </div>
  );
};

export default Input;
