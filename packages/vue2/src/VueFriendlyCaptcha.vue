<template>
    <div
        ref="captcha"
        class="vue-friendly-captcha frc-captcha"
        :class="{ dark }"
    />
</template>

<script>
    import { WidgetInstance } from 'friendly-challenge';

    export default {
        name: 'VueFriendlyCaptcha',
        props: {
            sitekey: {
                type: String,
                required: true,
            },
            dark: {
                type: Boolean,
                default: false,
            },
            startMode: {
                type: String,
                default: 'focus',
            },
            language: {
                type: String,
                default: 'en',
            },
            solutionFieldName: {
                type: String,
                default: 'frc-captcha-solution',
            },
            puzzleEndpoint: {
                type: String,
                default: 'https://api.friendlycaptcha.com/api/v1/puzzle',
            },
        },

        data() {
            return {
                widget: null,
            };
        },

        mounted() {
            if (!this.widget) {
                this.widget = new WidgetInstance(this.$refs.captcha, {
                    sitekey: this.sitekey,
                    startMode: this.startMode,
                    language: this.language,
                    solutionFieldName: this.solutionFieldName,
                    puzzleEndpoint: this.puzzleEndpoint,
                    readyCallback: this.onReady.bind(this),
                    startedCallback: this.onStarted.bind(this),
                    doneCallback: this.onDone.bind(this),
                    errorCallback: this.onError.bind(this),
                });
            }
        },

        destroyed() {
            if (this.widget) {
                this.widget.destroy();
            }
        },

        methods: {
            onReady() {
                this.$emit('ready');
            },

            onStarted() {
                this.$emit('started');
            },

            onDone(solution) {
                this.$emit('done', solution);
            },

            onError(error) {
                this.$emit('error', error);
            },

            init() {
                this.widget?.init();
            },

            start() {
                this.widget?.start();
            },

            reset() {
                this.widget?.reset();
            },

            destroy() {
                this.widget?.destroy();
            },

            isValid() {
                return this.widget?.valid || false;
            },
        },
    };
</script>
