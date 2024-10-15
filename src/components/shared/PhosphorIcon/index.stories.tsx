import { Meta, StoryObj } from "@storybook/react";
import { PhosphorIconsLibrary } from "~utils";
import { PhosphorIcon } from ".";

const meta = {
    title: "Components/Shared/PhosphorIcon",
    component: PhosphorIcon,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `PhosphorIcon` component renders icons from the Phosphor Icons library. It allows easy integration of multiple icons by dynamically selecting the desired icon component based on the icon prop."
            }
        }
    },
    argTypes: {
        icon: {
            description: "The name of the icon to render.",
            control: "select",
            options: Object.keys(PhosphorIconsLibrary)
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: "Package"
    }
};
