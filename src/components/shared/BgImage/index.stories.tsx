import { Meta, StoryObj } from "@storybook/react";
import { BgImage } from ".";

const meta = {
    title: "Components/Shared/BgImage",
    component: BgImage,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `BgImage` component renders a lazy-loaded image. It accepts the `src` and `alt` attributes, which are essential for displaying the image and providing accessibility information. The component is styled with a CSS class, allowing for easy customization."
            }
        }
    },
    argTypes: {
        src: {
            description: "The URL of the image to be displayed.",
            control: {
                type: "text"
            }
        },
        alt: {
            description: "The alternative text for the image, providing accessibility information.",
            control: {
                type: "text"
            }
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: "https://via.placeholder.com/300x200",
        alt: "Placeholder Image"
    }
};
