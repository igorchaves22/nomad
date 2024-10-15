import { Meta, StoryObj } from "@storybook/react";
import { FlexList } from ".";

const meta = {
    title: "Components/Shared/FlexList",
    component: FlexList,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "O componente `FlexList` é um contêiner flexível para renderizar uma lista de itens. Ele envolve seus filhos em um elemento <ul>, permitindo fácil personalização de itens de lista usando propriedades flexbox CSS. Este componente é útil para criar layouts responsivos e organizados para listas de forma limpa e eficiente."
            }
        }
    },
    argTypes: {
        children: {
            description: "The list items to be rendered inside the FlexList.",
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
        children: (
            <>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </>
        )
    }
};
