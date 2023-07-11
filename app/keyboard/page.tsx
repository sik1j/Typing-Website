import Keyboard from "@/components/Keyboard/Keyboard";

type Params = {
};

const QWERTY = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/',
];

const AZERTY = [
    'A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'W', 'X', 'C', 'V', 'B', 'N', ',', ';', ':', '!',
];

const COLEMAK = [
    'Q', 'W', 'F', 'P', 'G', 'J', 'L', 'U', 'Y', ';',
    'A', 'R', 'S', 'T', 'D', 'H', 'N', 'E', 'I', 'O',
    'Z', 'X', 'C', 'V', 'B', 'K', 'M', ',', '.', '/',
];

export default function Test({ }: Params) {
    return (
        <div className="bg-white h-screen grid place-content-center">
            <div className="text-black">
                <div>
                    <span>w</span>
                    <span>o</span>
                    <span>r</span>
                    <span>m</span>
                </div>
            </div>
            <Keyboard keyboardLayout={COLEMAK}/>
        </div>
    );

}
