const app = Vue.createApp({
    data() {
    return {
        bgColor: false,
        border: false,
        borderRadius: false,
        color: false,
        fontBold: false,
        fontItalic: false,
    };
    },
    methods: {},
    computed: {
    textAreaClass() {
        return {
        bgColor: this.bgColor,
        border: this.border,
        borderRadius: this.borderRadius,
        color: this.color,
        fontBold: this.fontBold,
        fontItalic: this.fontItalic,
        };
    },
    },
});

app.mount("body");
