import { ReactNode } from "react";

type SectionProp = {
  title?: string;
  children: ReactNode;
};

const Section = ({ children, title }: SectionProp) => {
  return (
    <section>
      <h2>{title}</h2>
      <h2>{children}</h2>
    </section>
  );
};

export default Section;
