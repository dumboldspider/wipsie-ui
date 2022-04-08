import React from "react";
import { Quill } from "react-quill";
import ReactDOMServer from "react-dom/server";
import QuillEditorToolbarStyle from "./QuillEditorToolbarStyle";
import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BoldOutlined,
  CodeOutlined,
  FontColorsOutlined,
  HighlightOutlined,
  ItalicOutlined,
  LinkOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
  PictureOutlined,
  RedoOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
  UndoOutlined,
  UnorderedListOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Typography } from "@wipsie/ui";
import getQuill from "./utils/useQuill";

// --------------------------------------------
// - Constants
// --------------------------------------------

const FONT_FAMILY = ["Roboto", "Raleway", "Montserrat", "Lato", "Rubik"];

const FONT_SIZE = [
  "8px",
  "9px",
  "10px",
  "12px",
  "14px",
  "16px",
  "20px",
  "24px",
  "32px",
  "42px",
  "54px",
  "68px",
  "84px",
  "98px",
];

const HEADINGS = [
  "Heading 1",
  "Heading 2",
  "Heading 3",
  "Heading 4",
  "Heading 5",
  "Heading 6",
];

export const formats = [
  "align",
  "background",
  "blockquote",
  "bold",
  "bullet",
  "code",
  "code-block",
  "color",
  "direction",
  "font",
  "formula",
  "header",
  "image",
  "indent",
  "italic",
  "link",
  "list",
  "script",
  "size",
  "strike",
  "table",
  "underline",
  "video",
];

// --------------------------------------------
// - Icons
// --------------------------------------------

const Size = Quill.import("attributors/style/size");
Size.whitelist = FONT_SIZE;
Quill.register(Size, true);

const Font = Quill.import("attributors/style/font");
Font.whitelist = FONT_FAMILY;
Quill.register(Font, true);

const Icons = Quill.import("ui/icons");
function renderIcon(icon: any) {
  return ReactDOMServer.renderToString(<Typography>{icon}</Typography>);
}

// Implement and register modules
Quill.register("modules/uploader", () => {});
// Quill.register("modules/counter", QuillCounter);

Icons.bold = renderIcon(<BoldOutlined />);
Icons.italic = renderIcon(<ItalicOutlined />);
Icons.underline = renderIcon(<UnderlineOutlined />);
Icons.strike = renderIcon(<StrikethroughOutlined />);
Icons.link = renderIcon(<LinkOutlined />);
Icons.image = renderIcon(<PictureOutlined />);
Icons.code = renderIcon(<CodeOutlined />);
Icons["code-block"] = renderIcon(<CodeOutlined />);
Icons.list.bullet = renderIcon(<UnorderedListOutlined />);
Icons.list.ordered = renderIcon(<OrderedListOutlined />);
Icons.indent["+1"] = renderIcon(<MenuUnfoldOutlined />);
Icons.indent["-1"] = renderIcon(<MenuFoldOutlined />);
// Icons.script.sub = renderIcon("X");
// Icons.script.super = renderIcon("Y");
// Icons.direction[""] = renderIcon(roundFormatTextdirectionLToR);
// Icons.direction.rtl = renderIcon(roundFormatTextdirectionRToL);
Icons.color = renderIcon(<FontColorsOutlined />);
Icons.background = renderIcon(<HighlightOutlined />);
Icons.video = renderIcon(<VideoCameraOutlined />);
// Icons.blockquote = renderIcon(roundFormatQuote);
// Icons.clean = renderIcon(roundFormatClear);
// Icons.formula = renderIcon(roundFunctions);
Icons.align[""] = renderIcon(<AlignLeftOutlined />);
Icons.align.center = renderIcon(<AlignCenterOutlined />);
Icons.align.justify = renderIcon(<MenuOutlined />);
Icons.align.right = renderIcon(<AlignRightOutlined />);

// --------------------------------------------
// - Types
// --------------------------------------------

export type ToolbarFormats = {
  align?: boolean;
  background?: boolean;
  blockquote?: boolean;
  bold?: boolean;
  bullet?: boolean;
  code?: boolean;
  color?: boolean;
  direction?: boolean;
  font?: boolean;
  formula?: boolean;
  header?: boolean;
  image?: boolean;
  indent?: boolean;
  italic?: boolean;
  link?: boolean;
  list?: boolean;
  size?: boolean;
  strike?: boolean;
  table?: boolean;
  underline?: boolean;
  video?: boolean;
  quote?: boolean;
  codeBlock?: boolean;
  clear?: boolean;
  history?: boolean;
  rtl?: boolean;
};

type EditorToolbarProps = {
  id: string;
  formats?: ToolbarFormats;
  toolbarBackgroundColor?: string;
};

// --------------------------------------------
// - Component
// --------------------------------------------

export default function QuillEditorToolbar({
  id,
  formats,
  toolbarBackgroundColor,
  ...other
}: EditorToolbarProps) {
  return (
    <QuillEditorToolbarStyle
      toolbarBackgroundColor={toolbarBackgroundColor}
      {...other}
    >
      <div id={id}>
        {/* Block for font, size, and headings */}
        {(formats?.font || formats?.size || formats?.header) && (
          <div className="ql-formats">
            {formats?.font && (
              <select className="ql-font" defaultValue="">
                <option value="">Font</option>
                {FONT_FAMILY.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            )}

            {formats?.size && (
              <select className="ql-size" defaultValue="16px">
                {FONT_SIZE.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            )}

            {formats?.header && (
              <select className="ql-header" defaultValue="">
                {HEADINGS.map((heading, index) => (
                  <option key={heading} value={index + 1}>
                    {heading}
                  </option>
                ))}
                <option value="">Normal</option>
              </select>
            )}
          </div>
        )}

        {/* Block for formatting (bold, italic, underline, strike) */}
        {(formats?.bold ||
          formats?.italic ||
          formats?.underline ||
          formats?.strike) && (
          <div className="ql-formats">
            {formats?.bold && <button type="button" className="ql-bold" />}
            {formats?.italic && <button type="button" className="ql-italic" />}
            {formats?.underline && (
              <button type="button" className="ql-underline" />
            )}
            {formats?.strike && <button type="button" className="ql-strike" />}
          </div>
        )}

        {/* Block for text color and background */}
        {(formats?.color || formats?.background) && (
          <div className="ql-formats">
            {formats?.color && <select className="ql-color" />}
            {formats?.background && <select className="ql-background" />}
          </div>
        )}

        {/* Block for indent, list and bullets  */}
        {(formats?.list || formats?.bullet || formats?.indent) && (
          <div className="ql-formats">
            {formats?.list && (
              <button type="button" className="ql-list" value="ordered" />
            )}
            {formats?.bullet && (
              <button type="button" className="ql-list" value="bullet" />
            )}
            {formats?.indent && (
              <button type="button" className="ql-indent" value="-1" />
            )}
            {formats?.indent && (
              <button type="button" className="ql-indent" value="+1" />
            )}
          </div>
        )}

        {/* Block for super-text and sub-text  */}
        {/* {!isSimple && (
          <div className="ql-formats">
            <button type="button" className="ql-script" value="super" />
            <button type="button" className="ql-script" value="sub" />
          </div>
        )} */}

        {/* Block for code and quote formatations */}
        {(formats?.code || formats?.quote) && (
          <div className="ql-formats">
            {formats?.code && (
              <button type="button" className="ql-code-block" />
            )}
            {formats?.quote && (
              <button type="button" className="ql-blockquote" />
            )}
          </div>
        )}

        {/* Block for align and direction */}
        {(formats?.align || formats?.rtl) && (
          <div className="ql-formats">
            {/* <button type="button" className="ql-direction" value="rtl" /> */}
            {formats?.align && <select className="ql-align" />}
          </div>
        )}

        {/* Block for media attachment */}
        {(formats?.link || formats?.image || formats?.video) && (
          <div className="ql-formats">
            {formats?.link && <button type="button" className="ql-link" />}
            {formats?.image && <button type="button" className="ql-image" />}
            {formats?.video && <button type="button" className="ql-video" />}
          </div>
        )}

        {/* Block for formula and clear formatting */}
        {/* <div className="ql-formats">
          {formats?.indent && <button type="button" className="ql-formula" />}
          <button type="button" className="ql-clean" />
        </div> */}

        {formats?.history && (
          <div className="ql-formats">
            <button type="button" className="ql-undo">
              <UndoOutlined />
            </button>
            <button type="button" className="ql-redo">
              <RedoOutlined />
            </button>
          </div>
        )}
      </div>
    </QuillEditorToolbarStyle>
  );
}

// --------------------------------------------
// - Custom Events
// --------------------------------------------

export const undoChange = () => {
  // @ts-ignore
  this.quill.history.undo();
};

export const redoChange = () => {
  // @ts-ignore
  this.quill.history.redo();
};

export const insertImage = () => {
  const quill = getQuill() as any;

  // prompt user for link
  const link = prompt("Enter a URL to insert");

  // if user entered a link
  if (link) {
    quill.insertEmbed(quill.getSelection().index, "image", link);
  }
};

export const insertVideo = (url: string) => {
  // @ts-ignore
  this.quill.insertEmbed(this.quill.getSelection().index, "video", url);
};
