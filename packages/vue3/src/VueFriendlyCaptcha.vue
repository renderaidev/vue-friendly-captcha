<template>
    <div
        ref="captcha"
        class="vue-friendly-captcha frc-captcha"
        :class="{ dark }"
    />
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from 'vue';

    import { WidgetInstance } from 'friendly-challenge';

    export default defineComponent({
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

        emits: ['ready', 'started', 'done', 'error'],

        setup(props, { emit }) {
            const captcha = ref();
            const widget = ref<WidgetInstance>();

            const onReady = () => {
                emit('ready', widget);
            };

            const onStarted = () => {
                emit('started', widget);
            };

            const onDone = (solution: string) => {
                emit('done', solution);
            };

            const onError = (error: Error) => {
                emit('error', error);
            };

            const init = () => {
                widget.value?.init();
            };

            const start = () => {
                widget.value?.start();
            };

            const reset = () => {
                widget.value?.reset();
            };

            const destroy = () => {
                widget.value?.destroy();
            };

            const isValid = () => {
                return widget.value?.valid || false;
            };

            watch(captcha, () => {
                if (widget.value) {
                    widget.value.reset();
                }

                if (!widget.value && captcha.value) {
                    widget.value = new WidgetInstance(captcha.value, {
                        sitekey: props.sitekey,
                        startMode: props.startMode as any,
                        language: props.language as any,
                        solutionFieldName: props.solutionFieldName as any,
                        puzzleEndpoint: props.puzzleEndpoint,
                        readyCallback: onReady,
                        startedCallback: onStarted,
                        doneCallback: onDone,
                        errorCallback: onError,
                    });
                }
            });

            return {
                captcha,
                widget,

                init,
                start,
                reset,
                destroy,
                isValid,
            };
        },
    });
</script>
