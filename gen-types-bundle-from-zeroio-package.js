const fs = require('fs');
const { typeBundleForPolkadot } = require('@zeroio/type-definitions');

fs.writeFileSync(
	'zeroTypesBundle.json',
	`${JSON.stringify(
		{
			types: {},
			typesAlias: {},
			versions: typeBundleForPolkadot.types,
		},
		null,
		2,
	)}`,
);
