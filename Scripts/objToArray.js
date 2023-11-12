// const nativeNames = Object.values(nativeName)
// const native = nativeNames.map(name => {
//     return name.common
// });

export default function convertToArray(obj, type) {
    const values = Object.values(obj)
    const array = values.map(value => {
        if (type) {
            return value[type]
        } else {
            return value
        }
    })
    return array
}


