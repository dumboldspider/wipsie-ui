import { useState } from "react";

const useEditing = () => {
  const [isEditing, setIsEditing] = useState(false);
  return { isEditing, setIsEditing };
};
export default useEditing;
