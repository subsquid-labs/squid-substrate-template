export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}

export function StorageNotExistsWarn(handler: string, entity: string,  hashOrIndex: string | number) {
    return `Storage doesn't exist for ${entity}: ${hashOrIndex}`
}

export function ObjectNotExistsWarn(handler: string, entity: string, hashOrIndex: string | number) {
    return `Object doesn't exist for ${entity}: ${hashOrIndex}`
}

export function ObjectExistsWarn(handler: string, entity: string, hashOrIndex: string | number) {
    return `Object already exists for ${entity}: ${hashOrIndex}`
}