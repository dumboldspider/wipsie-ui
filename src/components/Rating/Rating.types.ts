// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { NormalSizes } from "../../config/propTypes";

export type RatingProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Star Size
     */
    size?: NormalSizes;
    /**
     *  Change event handler, take selected value as argument
     * */
    onChange?: (selectedIndex: number) => void;
    /**
     * Read only
     */
    readOnly?: boolean;
    /**
     * Selected initial value
     * */
    initialValue?: number;
  }
>;
