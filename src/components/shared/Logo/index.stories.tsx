import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";

const meta = {
    title: "Components/Shared/Logo",
    component: Logo,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `Logo` component displays the application's logo using an imported SVG image. It supports lazy loading with the loading='lazy' attribute, optimizing page load performance. The image is assigned the logo CSS class, allowing for custom styling via the SCSS stylesheet."
            }
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
