// TODO: remove any
interface Pallet {
	name: string;
	callHandlers: Record<string, (context: any, block: any, call: any, name: string) => Promise<void> >;
	eventHandlers: Record<string, (context: any, block: any, event: any, name: string) => Promise<void> >;
}

export { Pallet };
