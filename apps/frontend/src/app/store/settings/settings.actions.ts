export namespace SettingsActions {
    export class FcmAccepted {
        public static readonly type = '[SeetingsActions] Update Fcm Accepted';
        constructor(public readonly isFcmAccepted: boolean) { }
    }
    export class UploadImage {
        public static readonly type = '[SeetingsActions] Upload Image';
        constructor(public readonly imageForm: FormData) { }
    }

    export class SetDarkMode {
        static readonly type = '[SeetingsActions] Set Dark Mode';
        constructor(public isDarkMode: any) { }
    }
    export class SetSavedLanguage {
        static readonly type = '[SeetingsActions] Set Saved Language';
        constructor(public savedLanguage: string) { }
    }
    export class ClearSavedLanguage {
        static readonly type = '[SeetingsActions] Clear Saved Language';
    }
}
