<template>
        <template v-if="name==='arrow-down'">
            <svg :width="size" :height="size" viewBox="0 0 24 24" :fill="fill" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 9L12.5 15L18.5 9" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </template>
</template>

<script>
export default {
    name: "c-icon",
    props: {
        name: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default: 16,
            required: false
        },
        fill: {
            type: String,
            default: "currentColor",
            required: false
        }
    }
}
</script>