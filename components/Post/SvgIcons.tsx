import React from "react";

export const JsIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="20" height="20"
            viewBox="0 0 48 48" {...props}
        >
            <path fill="#ffd600" d="M6,42V6h36v36H6z">
            </path>
            <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z">
            </path>
        </svg>
    )
}


export const TsIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="20" height="20"
            viewBox="0 0 48 48" {...props}>
            <path fill="#1976d2" d="M6 6h36v36H6z" />
            <path
                fill="#fff"
                d="M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
            />
        </svg>
    );
}

export const CSSIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="20" height="20"
            viewBox="0 0 48 48" {...props}>
            <path fill="#0277BD" d="M41 5H7l3 34 14 4 14-4 3-34z" />
            <path fill="#039BE5" d="M24 8v31.9l11.2-3.2L37.7 8z" />
            <path fill="#FFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z" />
            <path
                fill="#EEE"
                d="M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
            />
        </svg>
    );
}

export const NpmIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <svg preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            width="14" height="14">
            <path d="M0 256V0h256v256z" fill="#C12127" />
            <path d="M48 48h160v160h-32V80h-48v128H48z" fill="#FFF" />
        </svg>
    );
}