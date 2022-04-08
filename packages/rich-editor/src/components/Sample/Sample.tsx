import React from "react";
import { Button } from "@wipsie/ui";
import styled from "styled-components";

const Test = styled(Button)(({ ...props }: any) => {
  return {
    backgroundColor: "red",
  };
});

import ReactMde, { Suggestion, SaveImageHandler, Command } from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const loadSuggestions = async (text: string) => {
  return new Promise<Suggestion[]>((accept, reject) => {
    setTimeout(() => {
      const suggestions: Suggestion[] = [
        {
          preview: "Andre",
          value: "@andre",
        },
        {
          preview: "Angela",
          value: "@angela",
        },
        {
          preview: "David",
          value: "@david",
        },
        {
          preview: "Louise",
          value: "@louise",
        },
      ].filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()));
      accept(suggestions);
    }, 250);
  });
};

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const customCommand: Command = {
  icon: () => (
    <span role="img" aria-label="nice">
      🤔
    </span>
  ),
  execute: (opts) => {
    opts.textApi.replaceSelection("NICE");
  },
};

export function Editor() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
    "write"
  );

  const save: SaveImageHandler = async function* (data: ArrayBuffer) {
    // Promise that waits for "time" milliseconds
    const wait = function (time: number) {
      return new Promise((a, r) => {
        setTimeout(() => a(1), time);
      });
    };

    // Upload "data" to your server
    // Use XMLHttpRequest.send to send a FormData object containing
    // "data"
    // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

    await wait(2000);
    // yields the URL that should be inserted in the markdown
    yield "https://picsum.photos/300";
    await wait(2000);

    // returns true meaning that the save was successful
    return true;
  };

  return (
    <div className="container">
      <ReactMde
        commands={{
          "says-nice": customCommand,
        }}
        toolbarCommands={[["bold", "italic"], ["says-nice"]]}
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        loadSuggestions={loadSuggestions}
        childProps={{
          writeButton: {
            tabIndex: -1,
          },
        }}
        paste={{
          saveImage: save,
        }}
      />
    </div>
  );
}

/**
 * Primary UI component for user interaction
 */
export const Button2 = ({
  backgroundColor = "primary",
  label = "test",
  ...props
}) => {
  return (
    <Button backgroundColor={backgroundColor} {...props}>
      <Test>{label}</Test>
    </Button>
  );
};
