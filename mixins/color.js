export default {
    props: {
        color: {
            type: String,
            required: false,
            default: "primary"
        },
    },
    computed: {
        colorClasses() {
            const classes = []
            if (this.color && this.color.length > 0) classes.push(`color-${this.type}`)

            return classes
        }
    }
}