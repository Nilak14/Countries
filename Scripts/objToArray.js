
export default function convertToArray(obj, type) {
    if (obj) {
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
    else return 'Not defined till Now'

}


