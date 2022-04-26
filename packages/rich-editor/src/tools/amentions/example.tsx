import React from "react";
import ReactDOM from "react-dom";

import { Mention } from "./Mention";
import { Suggestion } from "./Suggestion";

import { createMentionsPlugin } from "./createMentionPlugin";

import "./main.scss";
import { Slate, useSlate } from "slate-react";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const LIST_MENTIONS = [
  { id: 1, handle: "@andrew" },
  { id: 2, handle: "@matthew" },
  { id: 3, handle: "@james" },
];

function App() {
  const [state, setState] = React.useState(initialValue);
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState(LIST_MENTIONS);
  const editor = useSlate();

  const addMention = (mention) => {
    setOpen(false);
    return mentionPlugin.addMention(mention, state).insertText(" ");
  };

  const onCollapseMentions = () => {
    setOpen(false);
  };

  const onInsertMention = () => {
    return addMention(suggestions[index]);
  };

  const onSeekMentions = (delta) => {
    let newIndex = index + delta;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= suggestions.length) newIndex = suggestions.length - 1;

    setIndex(newIndex);
  };

  const onTriggerMentions = () => {
    setIndex(0);
    setOpen(true);
  };

  const mentionPlugin = createMentionsPlugin({
    Mention,
    trigger: "@",
    type: "user",
    onCollapse: onCollapseMentions,
    onTrigger: onTriggerMentions,
    onSeek: onSeekMentions,
    onInsert: onInsertMention,
  });

  const onClickAddMention = (mention) => onChange(addMention(mention).apply());

  const onChange = (state) => {
    setState(state);
  };

  return (
    <ul className={`suggestions ${open ? "open" : ""}`}>
      {suggestions.map((suggestion, idx) => (
        <Suggestion
          key={suggestion.id}
          data={suggestion}
          selected={index === idx}
          onClick={onClickAddMention}
        />
      ))}
    </ul>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
