import Input from './Input.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["primary", 'secondary', 'success', 'danger', 'warning', 'info']
        }
    },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const White = {
    args: {
        color: "primary"
    },
};