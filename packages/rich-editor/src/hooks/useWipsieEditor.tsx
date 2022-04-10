import { useEffect, useState } from "react";

// useWipsieEditor hook
export type UseWipsieEditorHookType = (id: string) => {
  editorElement: HTMLElement;
  editorField: HTMLElement;
};

export const useWipsieEditor: UseWipsieEditorHookType = (id) => {
  const [editorElement, setEditorElement] = useState<HTMLElement | null>(null);
  const [editorField, setEditorField] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!id) return;
    try {
      const element = document.getElementById(id);
      const field = element.querySelector(".wuire-content") as HTMLElement;
      if (element) {
        setEditorElement(element);
      }
      if (field) {
        setEditorField(field);
      }
    } catch {
      console.error("useWipsieEditor: id not found");
    }
  }, [document, id]);

  return { editorElement, editorField };
};
