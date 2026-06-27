import Text from "~/components/text";

type PageTitle = {
  number: "01" | "02" | "03";
  title: string;
};

const PageTitle = ({ number, title }: PageTitle) => (
  <Text
    as="h1"
    className="flex gap-6 uppercase"
    mobile="preset-6"
    tablet="preset-5"
    desktop="preset-5"
  >
    <Text as="span" className="opacity-25">
      {number}
    </Text>
    <Text as="span">{title}</Text>
  </Text>
);

export default PageTitle;
