import React from "react";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { GlassContainer } from "./GlassContainer";

export interface SegmentedPickerProps {
  options: string[];
  selected: number;
  onSelect: (index: number) => void;
}

const SegmentedPicker = (props: SegmentedPickerProps) => {
  return (
    <GlassContainer
      noTint
      rounded={9999999}
      p={2}
      mt={3}
      mb={5}
      position={"sticky"}
      top={"max(5px, env(safe-area-inset-top))"}
      zIndex={2}
    >
      <SimpleGrid columns={props.options.length} rounded={"lg"}>
        {props.options.map((option, index) => (
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            key={option}
            pos={"relative"}
          >
            {index === props.selected && (
              <GlassContainer
                pos={"absolute"}
                width={"calc(100% - 2px)"}
                height={"calc(100% - 2px)"}
                rounded={9999999}
                zIndex={0}
              />
            )}
            <Button onClick={() => props.onSelect(index)} variant={"unstyled"}>
              {option}
            </Button>
          </Flex>
        ))}
      </SimpleGrid>
    </GlassContainer>
  );
};

export default SegmentedPicker;
