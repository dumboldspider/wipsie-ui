// Generated with util/create-component.js
import React, { useState } from "react";
import classnames from "classnames";
// import useTheme from "../../hooks/useTheme";
import { RatingProps } from "./Rating.types";

export const Rating: React.FC<RatingProps> = (props) => {
  const {
    children,
    className,
    initialValue = 0,
    onChange = () => {},
    readOnly = false,
    size = "medium",
    ...otherProps
  } = props;

  const [value, setValue] = useState(initialValue);

  const handleClick = (value) => {
    if (readOnly) return;
    setValue(value);
    onChange(value);
  };

  function handleSizeWidth() {
    switch (size as any) {
      case "xlarge":
        return 55;
      case "large":
        return 40;
      case "small":
        return 20;
      case "mini":
        return 15;
      case "medium":
      default:
        return 30;
    }
  }

  function handleSizeHeight() {
    switch (size as any) {
      case "xlarge":
        return 48;
      case "large":
        return 35;
      case "small":
        return 17;
      case "mini":
        return 13;
      case "medium":
      default:
        return 26;
    }
  }

  function handleSizeHalf() {
    switch (size as any) {
      case "xlarge":
        return 26;
      case "large":
        return 19;
      case "small":
        return 9;
      case "mini":
        return 7;
      case "medium":
      default:
        return 14;
    }
  }

  function handleHover() {
    if (readOnly) return "";
    return `opacity: 1;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2015%2014%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3ESolid%20Star%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Order-Details---Order-final---Not-reviewed%22%20transform%3D%22translate%28-108.000000%2C%20-385.000000%29%22%20fill%3D%22%23FEC844%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28108.000000%2C%20316.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%2069.000000%29%22%20id%3D%22Star-7%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%227.5%2011.25%203.09161061%2013.5676275%203.93353806%208.65881373%200.367076128%205.18237254%205.2958053%204.46618627%207.5%200%209.7041947%204.46618627%2014.6329239%205.18237254%2011.0664619%208.65881373%2011.9083894%2013.5676275%20%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");`;
  }
  function handleHoverActive() {
    if (readOnly) return "";
    return `opacity: 1;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2015%2014%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3ESolid%20Star%20%E2%80%93%20Light%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Order-Details---Order-final---Not-reviewed%22%20transform%3D%22translate%28-108.000000%2C%20-385.000000%29%22%20fill%3D%22%23FFE39C%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28108.000000%2C%20316.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%2069.000000%29%22%20id%3D%22Star-7%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%227.5%2011.25%203.09161061%2013.5676275%203.93353806%208.65881373%200.367076128%205.18237254%205.2958053%204.46618627%207.5%200%209.7041947%204.46618627%2014.6329239%205.18237254%2011.0664619%208.65881373%2011.9083894%2013.5676275%20%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");`;
  }

  return (
    <div
      data-testid="Wps-Rating"
      className={classnames("Wps-Rating", className)}
      {...otherProps}
    >
      <div className="ratingControl">
        <input
          type="checkbox"
          id="rating-5"
          name="rating"
          value="5"
          checked={value === 5}
        />
        <label
          className="ratingControl-stars ratingControl-stars--5"
          onClick={() => handleClick(5)}
        >
          5
        </label>
        <input
          type="checkbox"
          id="rating-45"
          name="rating"
          value="4.5"
          checked={value === 4.5}
        />
        <label
          className="ratingControl-stars ratingControl-stars--45 ratingControl-stars--half"
          onClick={() => handleClick(4.5)}
        >
          45
        </label>
        <input
          type="checkbox"
          id="rating-4"
          name="rating"
          value="4"
          checked={value === 4}
        />
        <label
          className="ratingControl-stars ratingControl-stars--4"
          onClick={() => handleClick(4)}
        >
          4
        </label>
        <input
          type="checkbox"
          id="rating-35"
          name="rating"
          value="3.5"
          checked={value === 3.5}
        />
        <label
          className="ratingControl-stars ratingControl-stars--35 ratingControl-stars--half"
          onClick={() => handleClick(3.5)}
        >
          35
        </label>
        <input
          type="checkbox"
          id="rating-3"
          name="rating"
          value="3"
          checked={value === 3}
        />
        <label
          className="ratingControl-stars ratingControl-stars--3"
          onClick={() => handleClick(3)}
        >
          3
        </label>
        <input
          type="checkbox"
          id="rating-25"
          name="rating"
          value="2.5"
          checked={value === 2.5}
        />
        <label
          className="ratingControl-stars ratingControl-stars--25 ratingControl-stars--half"
          onClick={() => handleClick(2.5)}
        >
          2.5
        </label>
        <input
          type="checkbox"
          id="rating-2"
          name="rating"
          value="2"
          checked={value === 2}
        />
        <label
          className="ratingControl-stars ratingControl-stars--2"
          onClick={() => handleClick(2)}
        >
          2
        </label>
        <input
          type="checkbox"
          id="rating-15"
          name="rating"
          value="1.5"
          checked={value === 1.5}
        />
        <label
          className="ratingControl-stars ratingControl-stars--15 ratingControl-stars--half"
          onClick={() => handleClick(1.5)}
        >
          1.5
        </label>
        <input
          type="checkbox"
          id="rating-1"
          name="rating"
          value="1"
          checked={value === 1}
        />
        <label
          className="ratingControl-stars ratingControl-stars--1"
          onClick={() => handleClick(1)}
        >
          1
        </label>
        <input
          type="checkbox"
          id="rating-05"
          name="rating"
          value="0.5"
          checked={value === 0.5}
        />
        <label
          className="ratingControl-stars ratingControl-stars--05 ratingControl-stars--half"
          onClick={() => handleClick(0.5)}
        >
          0.5
        </label>
      </div>
      <style jsx>{`
        .Wps-Rating {
          color: black;
        }
        @import url(https://fonts.googleapis.com/css?family=Francois+One);
        @import url(https://fonts.googleapis.com/css?family=PT+Sans);
        .ratingControl {
          position: relative;
          width: ${handleSizeWidth() * 5}px;
          height: ${handleSizeHeight()}px;
          user-select: none;
          margin: 0 auto;
        }
        .ratingControl input {
          visibility: hidden;
        }
        .ratingControl-stars {
          position: absolute;
          top: 0;
          width: ${handleSizeWidth()}px;
          height: ${handleSizeHeight()}px;
          background-image: url("data:image/svg+xml;
	charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2015%2014%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3EEmpty%20Star%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Order-Details---Order-final---Not-reviewed%22%20transform%3D%22translate%28-108.000000%2C%20-385.000000%29%22%20fill%3D%22%23D5D5D5%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28108.000000%2C%20316.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%2069.000000%29%22%20id%3D%22Star-7%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%227.5%2011.25%203.09161061%2013.5676275%203.93353806%208.65881373%200.367076128%205.18237254%205.2958053%204.46618627%207.5%200%209.7041947%204.46618627%2014.6329239%205.18237254%2011.0664619%208.65881373%2011.9083894%2013.5676275%20%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");
          background-size: auto ${handleSizeHeight()}px;
          background-repeat: no-repeat;
          cursor: ${readOnly ? "auto" : "pointer"};
          text-indent: 100%;
          white-space: nowrap;
          overflow: hidden;
          opacity: 0.4;
        }
        .ratingControl-stars:hover,
        .ratingControl-stars:hover ~ .ratingControl-stars {
          ${handleHover()}
        }

        input:checked ~ .ratingControl-stars {
          opacity: 1;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2015%2014%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3ESolid%20Star%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Order-Details---Order-final---Not-reviewed%22%20transform%3D%22translate%28-108.000000%2C%20-385.000000%29%22%20fill%3D%22%23FEC844%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%28108.000000%2C%20316.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%280.000000%2C%2069.000000%29%22%20id%3D%22Star-7%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%227.5%2011.25%203.09161061%2013.5676275%203.93353806%208.65881373%200.367076128%205.18237254%205.2958053%204.46618627%207.5%200%209.7041947%204.46618627%2014.6329239%205.18237254%2011.0664619%208.65881373%2011.9083894%2013.5676275%20%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");
        }

        .ratingControl-stars:active,
        .ratingControl-stars:active ~ .ratingControl-stars,
        input:checked ~ .ratingControl-stars:active {
          ${handleHoverActive()}
        }
        .ratingControl-stars--05 {
          left: ${handleSizeWidth() * 0}px;
        }
        .ratingControl-stars--1 {
          left: ${handleSizeWidth() * 0}px;
        }
        .ratingControl-stars--15 {
          left: ${handleSizeWidth() * 1}px;
        }
        .ratingControl-stars--2 {
          left: ${handleSizeWidth() * 1}px;
        }
        .ratingControl-stars--25 {
          left: ${handleSizeWidth() * 2}px;
        }
        .ratingControl-stars--3 {
          left: ${handleSizeWidth() * 2}px;
        }
        .ratingControl-stars--35 {
          left: ${handleSizeWidth() * 3}px;
        }
        .ratingControl-stars--4 {
          left: ${handleSizeWidth() * 3}px;
        }
        .ratingControl-stars--45 {
          left: ${handleSizeWidth() * 4}px;
        }
        .ratingControl-stars--5 {
          left: ${handleSizeWidth() * 4}px;
        }
        .ratingControl-stars--half {
          width: ${handleSizeHalf()}px;
        }
      `}</style>
      {children}
    </div>
  );
};
