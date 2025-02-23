import "./DailyRandomColor.css";

/*
TODO:
make default colors for certain dates (i.e. pink for valentine's day, green for st. patty's day etc.)
Valentine's Day - Pink
St. Patrick's Day - Green
Christmas - Red
Halloween - Orange
April Fool's Day - True Random Color
add text shadow to color text
*/

const trueRandomColor = () => {
  let result = "#";
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 256).toString(16);
    while (color.length < 2) {
      color = "0" + color;
    }
    result += color;
  }
  return result;
};

const defaultDates = {
  1402: "#fc71a2",
  1703: "#62e23b",
  2512: "#b70000",
  3110: "#fc71a2",
};

const genDateString = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return day + month + year;
};

const randomColorFromDate = () => {
  let colorSeed = genDateString();
  colorSeed = (colorSeed * 1664525 + 1013904223) | 0;
  colorSeed = colorSeed >>> 0;
  while (colorSeed.toString().length < 10) {
    colorSeed *= 10;
  }
  const hueDec = parseInt(colorSeed.toString().substring(0, 3));
  const satDec = parseInt(colorSeed.toString().substring(3, 6));
  const litDec = parseInt(colorSeed.toString().substring(6, 9));
  const hue = Math.trunc((hueDec / 999) * 359);
  const sat = Math.trunc((satDec / 999) * 100);
  const lit = Math.trunc((litDec / 999) * 100);
  return [hue, sat, lit];
};

const genContrastingLit = (lit) => (lit > 50 ? 25 : 75);

const dailyColorValues = randomColorFromDate();
const dailyColor = `hsl(${dailyColorValues[0]}, ${dailyColorValues[1]}%, ${dailyColorValues[2]}%)`;

const DailyRandomColor = () => {
  return (
    <div
      style={{
        backgroundColor: dailyColor,
      }}
      className="box-box"
    >
      <h1
        style={{
          color: `hsl(${dailyColorValues[0]}, ${
            dailyColorValues[1]
          }%, ${genContrastingLit(dailyColorValues[2])}%)`,
          textShadow: `1px 1px 2px ${dailyColor}`,
        }}
      >
        Daily Random Color
      </h1>
      <div
        id="color-box"
        className="color-box"
        style={{
          boxShadow: `5px 7px hsl(${dailyColorValues[0]}, ${
            dailyColorValues[1]
          }%, ${genContrastingLit(dailyColorValues[2])}%)`,
        }}
      >
        <p
          id="hue-text"
          className="color-text"
          style={{
            color: `hsl(${dailyColorValues[0]}, ${
              dailyColorValues[1]
            }%, ${genContrastingLit(dailyColorValues[2])}%)`,
          }}
        >{`Hue: ${dailyColorValues[0]}`}</p>
        <p
          id="hue-text"
          className="color-text"
          style={{
            color: `hsl(${dailyColorValues[0]}, ${
              dailyColorValues[1]
            }%, ${genContrastingLit(dailyColorValues[2])}%)`,
          }}
        >{`Saturation: ${dailyColorValues[1]}%`}</p>
        <p
          id="hue-text"
          className="color-text"
          style={{
            color: `hsl(${dailyColorValues[0]}, ${
              dailyColorValues[1]
            }%, ${genContrastingLit(dailyColorValues[2])}%)`,
          }}
        >{`Lightness: ${dailyColorValues[2]}%`}</p>
      </div>
    </div>
  );
};

export default DailyRandomColor;
