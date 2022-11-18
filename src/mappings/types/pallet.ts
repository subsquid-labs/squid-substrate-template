// TODO: remove any
interface Pallet {
	name: string;
	extrinsicHandlers: Record<string, (context: any, store: any) => void >;
	eventHandlers: Record<string, (context: any, store: any) => void >;
}

export { Pallet };
