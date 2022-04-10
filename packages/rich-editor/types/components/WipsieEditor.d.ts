import React from "react";
import { ToolBarType } from "./Toolbar.types";
import "./wipsie-editor.css";
export declare type EditorProps = {
    id: string;
    initialValue?: string;
    value: string;
    onChange: (value: string) => void;
    width?: string;
    debug?: boolean;
    toolbar?: ToolBarType;
    backgroundColor?: string;
    editorBackgroundColor?: string;
    toolbarBackgroundColor?: string;
};
export declare const WipsieEditor: React.FC<EditorProps>;
