import { Editor, Range, Transforms } from "slate";
import {
  Button,
  Portal,
  Avatar,
  Box,
  contrast,
  Loading,
  Popover,
  Typography,
  useTheme,
  Flex,
  Container,
  colorWithSeed,
} from "@wipsie/ui";
import React from "react";
import { BaseRange } from "slate";
import { useFocused, useSelected } from "slate-react";
import { insertMention } from "./MentionsUtils";
import { MentionsPluginConstructor } from "./Mentions.types";

export class MentionsPlugin {
  // This is where we define the plugin's type
  public elementType = "mention";

  // This is how the plugin render inside the editor
  public renderElement = ({
    attributes,
    children,
    element,
    getUserUrl,
    accessToken,
    matchPrefix,
  }) => {
    const selected = useSelected();
    const focused = useFocused();
    const theme = useTheme();

    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState(null);
    const handlePopoverData = () => {
      if (!getUserUrl) {
        throw new Error("getUserUrl is not defined");
      }

      const url = `${getUserUrl}${element?.id}`;
      if (!data && !isLoading) {
        setIsLoading(true);
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken ? `Bearer ${accessToken}` : "",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setIsLoading(false);
            if (data?.error) return;
            setData(data);
          });
      }
    };

    return (
      <Popover
        arrow
        position="top"
        content={
          <Flex
            p={1}
            fullWidth
            align="center"
            direction="row"
            contentEditable={false}
          >
            {isLoading && (
              <Loading size="small" color={theme.palette.background} />
            )}

            {!isLoading && data && (
              <>
                {/* Aspect ratio 1:1 div */}
                <Avatar
                  src={
                    data?.profile?.avatar
                      ? data?.profile?.avatar?.startsWith("data:image") ||
                        data?.profile?.avatar?.startsWith("http")
                        ? data?.profile?.avatar
                        : `${this.mediaUrl}/${data?.profile?.avatar}?size=${this.mediaSize}`
                      : null
                  }
                  alt={data?.name}
                  backgroundColor={colorWithSeed(data?.username)}
                  xs="small"
                  style={{
                    marginRight: "0.5rem",
                  }}
                />
                <Box p={0}>
                  <Typography
                    variant="body1"
                    color={contrast(theme.palette.text)}
                  >
                    {data?.name}
                  </Typography>

                  <a
                    href={
                      this.profileUrl
                        ? `${this.profileUrl}/${data?.username}`
                        : "#"
                    }
                    target="_blank"
                  >
                    <Typography variant="body1" color={theme.palette.subtext}>
                      {matchPrefix}
                      {data?.username}
                    </Typography>
                  </a>
                </Box>
              </>
            )}

            {!isLoading && !data && (
              <Typography variant="body1" color={contrast(theme.palette.text)}>
                No data found
              </Typography>
            )}
          </Flex>
        }
        spacing={0.5}
      >
        <span
          {...attributes}
          contentEditable={false}
          onMouseEnter={handlePopoverData}
          // data-cy={`mention-${element.character.replace(" ", "-")}`}
          style={{
            padding: "3px 3px 2px",
            margin: "1px 1px",
            verticalAlign: "baseline",
            display: "inline-block",
            borderRadius: "5px",
            fontSize: "0.9em",
            backgroundColor: theme.palette.primary[500],
            color: contrast(theme.palette.primary[500]),
            boxShadow:
              selected && focused
                ? `0 0 0 2px ${theme.palette.primary[300]}`
                : "none",
          }}
        >
          {matchPrefix}
          {element?.key}
          {children}
        </span>
      </Popover>
    );
  };

  // This is the plugin startup method, all variables returned here will be available in the plugin
  public usePlugin = () => {
    const inFocus = useFocused();
    const [search, setSearch] = React.useState("");
    const [target, setTarget] = React.useState<BaseRange | undefined>();
    const [index, setIndex] = React.useState(0);
    const [styleMentions, setStyle] = React.useState({});
    const [charsList, setCharsList] = React.useState([]);

    return {
      inFocus,
      search,
      target,
      index,
      styleMentions,
      charsList,
      setSearch,
      setTarget,
      setIndex,
      setStyle,
      setCharsList,
      getUserUrl: this.getUserUrl,
      accessToken: this.accessToken,
      searchUrl: this.searchUrl,
      matchRegex: this.matchRegex,
      matchPrefix: this.matchPrefix,
    };
  };

  // This is where we define the plugin's behavior when the user types
  public onChange = ({
    editor,
    search,
    setSearch,
    setTarget,
    setIndex,
    setCharsList,
    searchUrl,
    accessToken,
    matchRegex,
  }) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection);
      const wordBefore = Editor.before(editor, start, { unit: "word" });
      const before = wordBefore && Editor.before(editor, wordBefore);
      const beforeRange = before && Editor.range(editor, before, start);
      const beforeText = beforeRange && Editor.string(editor, beforeRange);
      const beforeMatch = beforeText && beforeText.match(matchRegex);
      const after = Editor.after(editor, start);
      const afterRange = Editor.range(editor, start, after);
      const afterText = Editor.string(editor, afterRange);
      const afterMatch = afterText.match(/^(\s|$)/);

      if (beforeMatch && afterMatch) {
        setTarget(beforeRange);
        setSearch(beforeMatch[1]);
        setIndex(0);

        if (!searchUrl) throw new Error("searchUrl is required for mentions");

        let url = `${searchUrl}${beforeMatch[1]}`;

        if (beforeMatch[1] !== search) {
          fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: accessToken ? `Bearer ${accessToken}` : "",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setCharsList(
                data?.content.map((user) => ({
                  key: user?.username,
                  title: user?.name,
                  id: user?.id,
                  avatar:  user?.profile?.avatar ? user?.profile?.avatar?.startsWith("data:image") ||
                  user?.profile?.avatar?.startsWith("http")
                      ? user?.profile?.avatar
                      : `${this.mediaUrl}/${user?.profile?.avatar}?size=${this.mediaSize}`
                  : null,
                }))
              );
            });
        }

        return;
      }
    }

    setTarget(null);
  };

  // This is where we define some behavior when the user presses a key
  public onKeyDown = (
    event: any,
    { editor, target, index, charsList, setSearch, setTarget, setIndex }
  ) => {
    if (target) {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          const prevIndex = index >= charsList.length - 1 ? 0 : index + 1;
          setIndex(prevIndex);
          break;
        case "ArrowUp":
          event.preventDefault();
          const nextIndex = index <= 0 ? charsList.length - 1 : index - 1;
          setIndex(nextIndex);
          break;
        case "Tab":
        case "Enter":
          event.preventDefault();
          Transforms.select(editor, target);
          insertMention(editor, charsList[index]);
          setTarget(null);
          setSearch("");
          break;
        case "Escape":
          event.preventDefault();
          setTarget(null);
          setSearch("");
          break;
      }
    }
  };

  // This is the plugin render method, if it has any
  public renderComponent = ({
    target,
    charsList,
    styleMentions,
    index,
    editor,
    setIndex,
    setStyle,
    inFocus,
    setTarget,
    setSearch,
    matchPrefix,
  }) => {
    const ref = React.useRef<HTMLDivElement | null>();
    const { selection } = editor;

    const handleSetIndex = (i) => {
      setIndex(i);
    };

    // Visibility effect
    React.useEffect(() => {
      const el = ref?.current;

      if (!el) {
        return;
      }

      const domSelection = window.getSelection();
      const domRange = domSelection.getRangeAt(0);
      const rect = domRange.getBoundingClientRect();
      setStyle({
        top: `${rect.top + window.pageYOffset + 24}px`,
        opacity: 1,
        left: `${
          rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
        }px`,
      });
    }, [editor, inFocus, selection, ref, window?.getSelection()]);

    return (
      <>
        {target && charsList.length > 0 && (
          <Portal id="wipsie-mentions" visible={true}>
            <div
              ref={ref}
              onMouseDown={(e) => {
                e.preventDefault(); // prevent toolbar from taking focus away from editor
              }}
              style={{
                position: "absolute",
                pointerEvents: "none",
                zIndex: 1,
                ...styleMentions,
              }}
            >
              <Container
                p={1}
                variant="neumorphic"
                shape="rounded"
                onMouseDown={(e) => {
                  e.preventDefault(); // prevent toolbar from taking focus away from editor
                }}
              >
                {charsList.map((listItem, i) => (
                  <Button
                    key={listItem?.key}
                    onMouseEnter={() => handleSetIndex(i)}
                    size="small"
                    shape="rounded"
                    variant="ghost"
                    align="left"
                    fullWidth
                    active={i === index}
                    onClick={() => {
                      Transforms.select(editor, target);
                      insertMention(editor, charsList[index]);
                      setTarget(null);
                      setSearch("");
                    }}
                    style={{
                      cursor: "pointer",
                      pointerEvents: "auto",
                    }}
                  >
                    <Avatar
                      src={listItem?.avatar}
                      alt={listItem?.title}
                      backgroundColor={colorWithSeed(listItem?.key)}
                      xs="mini"
                    />
                    &nbsp;
                    <Typography color="primary" variant="body1">
                      <b>{listItem?.title}</b>
                    </Typography>
                    &nbsp;
                    <Typography color="subtext" variant="body1">
                      <b>
                        {matchPrefix}
                        {listItem?.key}
                      </b>
                    </Typography>
                  </Button>
                ))}
              </Container>
            </div>
          </Portal>
        )}
      </>
    );
  };

  // This is where we setup the plugin external options
  constructor(props: MentionsPluginConstructor) {
    const {
      getUserUrl,
      accessToken,
      searchUrl,
      matchRegex,
      matchPrefix,
      renderElement,
      mediaUrl,
      mediaSize = "32",
      profileUrl,
    } = props;
    this.getUserUrl = getUserUrl;
    this.accessToken = accessToken;
    this.searchUrl = searchUrl;
    this.matchRegex = matchRegex || this.matchRegex;
    this.matchPrefix = matchPrefix || this.matchPrefix;
    this.renderElement = renderElement || this.renderElement;
    this.mediaUrl = mediaUrl || this.mediaUrl;
    this.mediaSize = mediaSize || this.mediaSize;
    this.profileUrl = profileUrl || this.profileUrl;
  }

  private searchUrl: string;
  private getUserUrl: string;
  private accessToken: string;
  private matchRegex: RegExp = /^@(\w+)$/;
  private matchPrefix: string = "@";
  private mediaUrl: string;
  private mediaSize: string;
  private profileUrl: string;
}
