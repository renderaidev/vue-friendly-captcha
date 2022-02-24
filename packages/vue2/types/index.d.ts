import Vue from 'vue';

declare class VueFriendlyCaptcha extends Vue {
    sitekey: string;
    startMode: 'focus' | 'auto' | 'none';
    dark: boolean;
    language:
        | 'en'
        | 'de'
        | 'nl'
        | 'fr'
        | 'it'
        | 'pt'
        | 'es'
        | 'ca'
        | 'ja'
        | 'da';
    solutionFieldName: string;
    puzzleEndpoint: string;

    init(): void;
    start(): void;
    reset(): void;
    destroy(): void;

    isValid(): boolean;
}

export default VueFriendlyCaptcha;
