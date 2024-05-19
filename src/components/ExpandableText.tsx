import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [moreText, setMoreText] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = moreText ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        marginLeft={1}
        backgroundColor="yellow"
        color="black"
        onClick={() => setMoreText(!moreText)}
      >
        {moreText ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
