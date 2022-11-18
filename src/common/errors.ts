export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}

export function StorageNotExistsWarn(entity: string, hashOrIndex: string | number) {
    return `Storage doesn't exist for ${entity}: ${hashOrIndex}`
}

export function ObjectNotExistsWarn(entity: string, hashOrIndex: string | number) {
    return `Object doesn't exist for ${entity}: ${hashOrIndex}`
}

export function ObjectExistsWarn(entity: string, hashOrIndex: string | number) {
    return `Object already exist for ${entity}: ${hashOrIndex}`
}