import { type ReactNode } from 'react';

// type InfoBoxProps = {
//     mode: 'hint' | 'warning';
//     children: ReactNode;
// }

type HintBoxProps = {
    mode: 'hint';
    children: ReactNode;
}

type WarningBoxProps = {
    mode: 'warning';
    children: ReactNode;
    severity: 'low' | 'medium' | 'high'
}

const InfoBox = (props: HintBoxProps | WarningBoxProps) => {
    const { children, mode } = props;
    if (mode === 'hint') {
        return (
            <aside className='infobox infobox-hint'>
                <p>{children}</p>
            </aside>
        )
    }
    return (
        <aside className={`infobox infobox-warning warning--${props.severity}`}>
            {mode === 'warning' ? <h2>Warning</h2> : null}
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox
