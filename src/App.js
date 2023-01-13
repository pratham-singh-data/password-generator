import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./App.css";

const dataset = {
  lcase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  ucase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  numbers: [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`],
  symbols: [`$`, `%`, `@`, `!`, `&`],
};

function App() {
  // state of selections
  const [selections, setSelections] = useState({
    lcase: false,
    ucase: false,
    numbers: false,
    symbols: false,
  });

  // stores the data from slider
  const [passwordSize, setPasswordSize] = useState(10);

  // password to display
  const [password, setPassword] = useState("");

  // generate password
  const generate = () => {
    let finalDataset = [];

    // lowercase alphabet
    if (selections.lcase) {
      finalDataset = [...finalDataset, ...dataset.lcase];
    }

    // uppercase alphabet
    if (selections.ucase) {
      finalDataset = [...finalDataset, ...dataset.ucase];
    }

    // numbers
    if (selections.numbers) {
      finalDataset = [...finalDataset, ...dataset.numbers];
    }

    // symbols
    if (selections.symbols) {
      finalDataset = [...finalDataset, ...dataset.symbols];
    }

    // if final dataset is empty
    if (finalDataset.length === 0) {
      setPassword("Pasword cannot be generated");
      return;
    }

    let result = "";
    let iter = passwordSize;

    while (iter--) {
      result += finalDataset[Math.floor(Math.random() * finalDataset.length)];
    }

    setPassword(result);
  };

  return (
    <div className="App">
      {password.length > 0 && (
        <Box
          sx={{
            backgroundColor: "#2E2E2E",
            width: { sm: "50%", xs: "80%" },
            color: "#ffffff",
            padding: "20px",
            borderRadius: "5px",
            mb: "20px",
          }}
        >
          <Typography>{password}</Typography>
        </Box>
      )}

      <Box
        sx={{
          backgroundColor: "#2E2E2E",
          width: { sm: "50%", xs: "80%" },
          color: "#ffffff",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Typography>{passwordSize}</Typography>
        </Box>

        <Slider
          aria-label="Temperature"
          color="secondary"
          min={4}
          max={34}
          value={passwordSize}
          onChange={(ev) => {
            setPasswordSize(ev.target.value);
          }}
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selections.lcase}
                onChange={(ev) => {
                  setSelections({ ...selections, lcase: ev.target.checked });
                }}
                sx={{
                  color: "#FFFFFF",
                  "&.Mui-checked": {
                    color: "#C50ED2",
                  },
                }}
              />
            }
            label="Lowercase Alphabet"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selections.ucase}
                onChange={(ev) => {
                  setSelections({ ...selections, ucase: ev.target.checked });
                }}
                sx={{
                  color: "#FFFFFF",
                  "&.Mui-checked": {
                    color: "#C50ED2",
                  },
                }}
              />
            }
            label="Uppercase Alphabet"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selections.numbers}
                onChange={(ev) => {
                  setSelections({ ...selections, numbers: ev.target.checked });
                }}
                sx={{
                  color: "#FFFFFF",
                  "&.Mui-checked": {
                    color: "#C50ED2",
                  },
                }}
              />
            }
            label="Numbers"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selections.symbols}
                onChange={(ev) => {
                  setSelections({ ...selections, symbols: ev.target.checked });
                }}
                sx={{
                  color: "#FFFFFF",
                  "&.Mui-checked": {
                    color: "#C50ED2",
                  },
                }}
              />
            }
            label="Special Characters"
          />
        </FormGroup>

        <Button
          sx={{
            backgroundColor: "#C50ED2",
            color: "#FFFFFF",
            width: "100%",
            "&:hover": { backgroundColor: "#A500B2" },
          }}
          onClick={generate}
        >
          Generate
        </Button>
      </Box>
    </div>
  );
}

export default App;
