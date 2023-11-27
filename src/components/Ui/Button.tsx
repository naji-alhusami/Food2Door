import { type ReactNode, type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  element: "button";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  element: "anchor";
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | AnchorProps) {
  //   const { element, children, ...otherProps } = props;

  if (props.element === "anchor") {
    return <a {...props}>{props.children}</a>;
  }

  return <button {...props}>{props.children}</button>;
}
