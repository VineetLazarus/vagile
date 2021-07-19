const theme = {
    default: {
        base : {
            color: 'sky',
            shade: '900'
        }
    },
    dark: {
        base : {
            color: 'gray',
            shade: '900'
        }
    },
    green: {
        base : {
            color: 'green',
            shade: '600'
        }
    }
}

export default function themer(mode) {
    return theme[mode]
}