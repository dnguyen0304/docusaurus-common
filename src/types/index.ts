import type { KeySequence } from 'react-hotkeys';

export type KeyMap<T extends string> = {
    [key in T]: KeySequence;
};

export type KeyHandlers<T extends string> = {
    [key in T]: (
        keyboardEvent?: KeyboardEvent | undefined,
    ) => void;
};
