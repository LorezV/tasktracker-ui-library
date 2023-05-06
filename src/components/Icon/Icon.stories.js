import Icon from './Icon.vue';
import icons from "./icons";

export default {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: { type: "select" },
            options: icons
        }
    }
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const White = {
    args: {
        name: "arrow-down"
    },
};