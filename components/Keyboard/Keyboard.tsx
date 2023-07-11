'use client'

import { useState, KeyboardEvent } from "react";
import Key from "../../components/Keyboard/Key"

type Props = {
    keyboardLayout: string[];
};


export default function Keyboard({keyboardLayout}: Props) {
    const [activeKeys, setActiveKeys] = useState(new Set<string>());

    enum KeyPress {
        Down,
        Up
    }

    function onKeyPress(event: KeyboardEvent<HTMLDivElement>,
        pressType: KeyPress
    ) {
        event.preventDefault();
        let s = new Set(activeKeys);
        if (pressType == KeyPress.Down) {
            s.add(event.code);
        }
        else {
            s.delete(event.code);
        }
        setActiveKeys(s);
    }

    function keyValueToKeyCode(keyValue: string) {
        switch (keyValue) {
            case ';': return 'Semicolon';
            case ',': return 'Comma';
            case '.': return 'Period';
            case '/': return 'Slash';
            default: return `Key${keyValue}`;
        }
    }

    function createKeyboardRow(row: number) {
        const QWERTY = [
            'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/',
        ];
        return keyboardLayout.slice((row - 1) * 10, row * 10).map((value, ind) => {
            value = value.toUpperCase();
            // let keyCode = `Key${value}`;
            let keyCode = keyValueToKeyCode(QWERTY[ind + (row-1) * 10]);
            return (
                <Key value={value} isPressed={activeKeys.has(keyCode)} key={ind} />
            )
        }
        )
    }

    return (
        // keyboard container
        <div className="grid gap-1.5 w-fit h-min"
            onKeyDown={(event) => onKeyPress(event, KeyPress.Down)}
            onKeyUp={(event) => onKeyPress(event, KeyPress.Up)}
            tabIndex={0} autoFocus={true}
        >
            <div className="flex flex-row  gap-1">
                {createKeyboardRow(1)}
            </div>
            <div className="flex flex-row  gap-1">
                <div className="w-1" />
                {createKeyboardRow(2)}
            </div>
            <div className="flex flex-row  gap-1">
                <div className="w-8" />
                {createKeyboardRow(3)}

            </div>
            <div className="flex flex-row  gap-1">
                <div className="w-[8.5rem]" />
                <Key value="Space" isPressed={activeKeys.has("Space")}/>
            </div>
        </div>
    );
}
