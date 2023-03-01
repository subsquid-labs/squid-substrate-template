import type {Result, Option} from './support'

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
  __kind: 'Free'
}

export interface BalanceStatus_Reserved {
  __kind: 'Reserved'
}

export type CurrencyId = CurrencyId_Token | CurrencyId_ForeignAsset

export interface CurrencyId_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface CurrencyId_ForeignAsset {
  __kind: 'ForeignAsset'
  value: number
}

export type MemberState = MemberState_Inactive | MemberState_Active | MemberState_Pending | MemberState_Kicked | MemberState_Banned | MemberState_Exited

export interface MemberState_Inactive {
  __kind: 'Inactive'
}

export interface MemberState_Active {
  __kind: 'Active'
}

export interface MemberState_Pending {
  __kind: 'Pending'
}

export interface MemberState_Kicked {
  __kind: 'Kicked'
}

export interface MemberState_Banned {
  __kind: 'Banned'
}

export interface MemberState_Exited {
  __kind: 'Exited'
}

export type OrgType = OrgType_Individual | OrgType_Company | OrgType_Dao | OrgType_Hybrid

export interface OrgType_Individual {
  __kind: 'Individual'
}

export interface OrgType_Company {
  __kind: 'Company'
}

export interface OrgType_Dao {
  __kind: 'Dao'
}

export interface OrgType_Hybrid {
  __kind: 'Hybrid'
}

export type AccessModel = AccessModel_Open | AccessModel_Voting | AccessModel_Prime

export interface AccessModel_Open {
  __kind: 'Open'
}

export interface AccessModel_Voting {
  __kind: 'Voting'
}

export interface AccessModel_Prime {
  __kind: 'Prime'
}

export type FeeModel = FeeModel_NoFees | FeeModel_Reserve | FeeModel_Transfer

export interface FeeModel_NoFees {
  __kind: 'NoFees'
}

export interface FeeModel_Reserve {
  __kind: 'Reserve'
}

export interface FeeModel_Transfer {
  __kind: 'Transfer'
}

export type PropertyType = PropertyType_Experience | PropertyType_Trust | PropertyType_Reputation

export interface PropertyType_Experience {
  __kind: 'Experience'
}

export interface PropertyType_Trust {
  __kind: 'Trust'
}

export interface PropertyType_Reputation {
  __kind: 'Reputation'
}

export interface IdentityInfo {
  additional: [Data, Data][]
  display: Data
  legal: Data
  web: Data
  riot: Data
  email: Data
  pgpFingerprint: (Uint8Array | undefined)
  image: Data
  twitter: Data
}

export interface AccountData {
  free: bigint
  reserved: bigint
  miscFrozen: bigint
  feeFrozen: bigint
}

export type BattlepassState = BattlepassState_DRAFT | BattlepassState_ACTIVE | BattlepassState_ENDED

export interface BattlepassState_DRAFT {
  __kind: 'DRAFT'
}

export interface BattlepassState_ACTIVE {
  __kind: 'ACTIVE'
}

export interface BattlepassState_ENDED {
  __kind: 'ENDED'
}

export interface Battlepass {
  creator: Uint8Array
  orgId: Uint8Array
  name: Uint8Array
  cid: Uint8Array
  season: number
  price: number
  collectionId: number
}

export type OrgState = OrgState_Inactive | OrgState_Active | OrgState_Locked

export interface OrgState_Inactive {
  __kind: 'Inactive'
}

export interface OrgState_Active {
  __kind: 'Active'
}

export interface OrgState_Locked {
  __kind: 'Locked'
}

export interface Org {
  index: number
  creator: Uint8Array
  prime: Uint8Array
  name: Uint8Array
  cid: Uint8Array
  orgType: OrgType
  feeModel: FeeModel
  membershipFee: (bigint | undefined)
  govCurrency: CurrencyId
  payCurrency: CurrencyId
  accessModel: AccessModel
  memberLimit: number
  created: number
  mutated: number
}

export interface Campaign {
  index: number
  orgId: Uint8Array
  name: Uint8Array
  owner: Uint8Array
  admin: Uint8Array
  deposit: bigint
  start: number
  expiry: number
  cap: bigint
  protocol: FlowProtocol
  governance: FlowGovernance
  cid: Uint8Array
  tokenSymbol: (Uint8Array | undefined)
  tokenName: (Uint8Array | undefined)
  created: number
}

export type CampaignState = CampaignState_Created | CampaignState_Active | CampaignState_Paused | CampaignState_Succeeded | CampaignState_Failed | CampaignState_Locked

export interface CampaignState_Created {
  __kind: 'Created'
}

export interface CampaignState_Active {
  __kind: 'Active'
}

export interface CampaignState_Paused {
  __kind: 'Paused'
}

export interface CampaignState_Succeeded {
  __kind: 'Succeeded'
}

export interface CampaignState_Failed {
  __kind: 'Failed'
}

export interface CampaignState_Locked {
  __kind: 'Locked'
}

export interface Entity {
  account: Uint8Array
  index: bigint
  cid: Uint8Array
  created: number
  mutated: number
}

export interface EntityProperty {
  value: bigint
  mutated: number
}

export interface Type_746 {
  index: number
  owner: Uint8Array
  title: Uint8Array
  cid: Uint8Array
  orgId: Uint8Array
  campaignId: (Uint8Array | undefined)
  proposalType: ProposalType
  deposit: bigint
  start: number
  expiry: number
  amount: (bigint | undefined)
  currencyId: (CurrencyId | undefined)
  beneficiary: (Uint8Array | undefined)
  slashingRule: SlashingRule
}

export type ProposalState = ProposalState_Created | ProposalState_Active | ProposalState_Accepted | ProposalState_Rejected | ProposalState_Expired | ProposalState_Aborted | ProposalState_Finalized

export interface ProposalState_Created {
  __kind: 'Created'
}

export interface ProposalState_Active {
  __kind: 'Active'
}

export interface ProposalState_Accepted {
  __kind: 'Accepted'
}

export interface ProposalState_Rejected {
  __kind: 'Rejected'
}

export interface ProposalState_Expired {
  __kind: 'Expired'
}

export interface ProposalState_Aborted {
  __kind: 'Aborted'
}

export interface ProposalState_Finalized {
  __kind: 'Finalized'
}

export interface Type_752 {
  index: number
  unit: Unit
  ayes: [Uint8Array, bigint, (bigint | undefined)][]
  nays: [Uint8Array, bigint, (bigint | undefined)][]
  scale: Scale
  eligible: bigint
  participating: bigint
  yes: bigint
  no: bigint
  quorum: (number | undefined)
  majority: Majority
}

export interface AccountInfo {
  nonce: number
  consumers: number
  providers: number
  sufficients: number
  data: AccountData
}

export interface Type_714 {
  free: bigint
  reserved: bigint
  frozen: bigint
}

export interface Weight {
  refTime: bigint
  proofSize: bigint
}

export interface Schedule {
  limits: Limits
  instructionWeights: InstructionWeights
  hostFnWeights: HostFnWeights
}

export interface TrackInfo {
  name: string
  maxDeciding: number
  decisionDeposit: bigint
  preparePeriod: number
  decisionPeriod: number
  confirmPeriod: number
  minEnactmentPeriod: number
  minApproval: Curve
  minSupport: Curve
}

export interface BlockLength {
  max: Type_420
}

export interface BlockWeights {
  baseBlock: Weight
  maxBlock: Weight
  perClass: Type_417
}

export interface RuntimeDbWeight {
  read: bigint
  write: bigint
}

export interface RuntimeVersion {
  specName: string
  implName: string
  authoringVersion: number
  specVersion: number
  implVersion: number
  apis: [Uint8Array, number][]
  transactionVersion: number
  stateVersion: number
}

export type TokenSymbol = TokenSymbol_ZERO | TokenSymbol_PLAY | TokenSymbol_GAME | TokenSymbol_DOT

export interface TokenSymbol_ZERO {
  __kind: 'ZERO'
}

export interface TokenSymbol_PLAY {
  __kind: 'PLAY'
}

export interface TokenSymbol_GAME {
  __kind: 'GAME'
}

export interface TokenSymbol_DOT {
  __kind: 'DOT'
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
  __kind: 'None'
}

export interface Data_Raw0 {
  __kind: 'Raw0'
  value: Uint8Array
}

export interface Data_Raw1 {
  __kind: 'Raw1'
  value: Uint8Array
}

export interface Data_Raw2 {
  __kind: 'Raw2'
  value: Uint8Array
}

export interface Data_Raw3 {
  __kind: 'Raw3'
  value: Uint8Array
}

export interface Data_Raw4 {
  __kind: 'Raw4'
  value: Uint8Array
}

export interface Data_Raw5 {
  __kind: 'Raw5'
  value: Uint8Array
}

export interface Data_Raw6 {
  __kind: 'Raw6'
  value: Uint8Array
}

export interface Data_Raw7 {
  __kind: 'Raw7'
  value: Uint8Array
}

export interface Data_Raw8 {
  __kind: 'Raw8'
  value: Uint8Array
}

export interface Data_Raw9 {
  __kind: 'Raw9'
  value: Uint8Array
}

export interface Data_Raw10 {
  __kind: 'Raw10'
  value: Uint8Array
}

export interface Data_Raw11 {
  __kind: 'Raw11'
  value: Uint8Array
}

export interface Data_Raw12 {
  __kind: 'Raw12'
  value: Uint8Array
}

export interface Data_Raw13 {
  __kind: 'Raw13'
  value: Uint8Array
}

export interface Data_Raw14 {
  __kind: 'Raw14'
  value: Uint8Array
}

export interface Data_Raw15 {
  __kind: 'Raw15'
  value: Uint8Array
}

export interface Data_Raw16 {
  __kind: 'Raw16'
  value: Uint8Array
}

export interface Data_Raw17 {
  __kind: 'Raw17'
  value: Uint8Array
}

export interface Data_Raw18 {
  __kind: 'Raw18'
  value: Uint8Array
}

export interface Data_Raw19 {
  __kind: 'Raw19'
  value: Uint8Array
}

export interface Data_Raw20 {
  __kind: 'Raw20'
  value: Uint8Array
}

export interface Data_Raw21 {
  __kind: 'Raw21'
  value: Uint8Array
}

export interface Data_Raw22 {
  __kind: 'Raw22'
  value: Uint8Array
}

export interface Data_Raw23 {
  __kind: 'Raw23'
  value: Uint8Array
}

export interface Data_Raw24 {
  __kind: 'Raw24'
  value: Uint8Array
}

export interface Data_Raw25 {
  __kind: 'Raw25'
  value: Uint8Array
}

export interface Data_Raw26 {
  __kind: 'Raw26'
  value: Uint8Array
}

export interface Data_Raw27 {
  __kind: 'Raw27'
  value: Uint8Array
}

export interface Data_Raw28 {
  __kind: 'Raw28'
  value: Uint8Array
}

export interface Data_Raw29 {
  __kind: 'Raw29'
  value: Uint8Array
}

export interface Data_Raw30 {
  __kind: 'Raw30'
  value: Uint8Array
}

export interface Data_Raw31 {
  __kind: 'Raw31'
  value: Uint8Array
}

export interface Data_Raw32 {
  __kind: 'Raw32'
  value: Uint8Array
}

export interface Data_BlakeTwo256 {
  __kind: 'BlakeTwo256'
  value: Uint8Array
}

export interface Data_Sha256 {
  __kind: 'Sha256'
  value: Uint8Array
}

export interface Data_Keccak256 {
  __kind: 'Keccak256'
  value: Uint8Array
}

export interface Data_ShaThree256 {
  __kind: 'ShaThree256'
  value: Uint8Array
}

export type FlowProtocol = FlowProtocol_Grant | FlowProtocol_Raise | FlowProtocol_Lend | FlowProtocol_Loan | FlowProtocol_Share | FlowProtocol_Pool

export interface FlowProtocol_Grant {
  __kind: 'Grant'
}

export interface FlowProtocol_Raise {
  __kind: 'Raise'
}

export interface FlowProtocol_Lend {
  __kind: 'Lend'
}

export interface FlowProtocol_Loan {
  __kind: 'Loan'
}

export interface FlowProtocol_Share {
  __kind: 'Share'
}

export interface FlowProtocol_Pool {
  __kind: 'Pool'
}

export type FlowGovernance = FlowGovernance_No | FlowGovernance_Yes

export interface FlowGovernance_No {
  __kind: 'No'
}

export interface FlowGovernance_Yes {
  __kind: 'Yes'
}

export type ProposalType = ProposalType_General | ProposalType_Withdrawal | ProposalType_Spending

export interface ProposalType_General {
  __kind: 'General'
}

export interface ProposalType_Withdrawal {
  __kind: 'Withdrawal'
}

export interface ProposalType_Spending {
  __kind: 'Spending'
}

export type SlashingRule = SlashingRule_Automated | SlashingRule_Tribunal

export interface SlashingRule_Automated {
  __kind: 'Automated'
}

export interface SlashingRule_Tribunal {
  __kind: 'Tribunal'
}

export type Unit = Unit_Account | Unit_Token

export interface Unit_Account {
  __kind: 'Account'
}

export interface Unit_Token {
  __kind: 'Token'
}

export type Scale = Scale_Linear | Scale_Quadratic

export interface Scale_Linear {
  __kind: 'Linear'
}

export interface Scale_Quadratic {
  __kind: 'Quadratic'
}

export type Majority = Majority_Simple | Majority_Relative | Majority_Absolute

export interface Majority_Simple {
  __kind: 'Simple'
}

export interface Majority_Relative {
  __kind: 'Relative'
}

export interface Majority_Absolute {
  __kind: 'Absolute'
}

export interface Limits {
  eventTopics: number
  stackHeight: (number | undefined)
  globals: number
  locals: number
  parameters: number
  memoryPages: number
  tableSize: number
  brTableSize: number
  subjectLen: number
  callDepth: number
  payloadLen: number
}

export interface InstructionWeights {
  version: number
  fallback: number
  i64Const: number
  i64Load: number
  i64Store: number
  select: number
  if: number
  br: number
  brIf: number
  brTable: number
  brTablePerEntry: number
  call: number
  callIndirect: number
  callIndirectPerParam: number
  callPerLocal: number
  localGet: number
  localSet: number
  localTee: number
  globalGet: number
  globalSet: number
  memoryCurrent: number
  memoryGrow: number
  i64Clz: number
  i64Ctz: number
  i64Popcnt: number
  i64Eqz: number
  i64Extendsi32: number
  i64Extendui32: number
  i32Wrapi64: number
  i64Eq: number
  i64Ne: number
  i64Lts: number
  i64Ltu: number
  i64Gts: number
  i64Gtu: number
  i64Les: number
  i64Leu: number
  i64Ges: number
  i64Geu: number
  i64Add: number
  i64Sub: number
  i64Mul: number
  i64Divs: number
  i64Divu: number
  i64Rems: number
  i64Remu: number
  i64And: number
  i64Or: number
  i64Xor: number
  i64Shl: number
  i64Shrs: number
  i64Shru: number
  i64Rotl: number
  i64Rotr: number
}

export interface HostFnWeights {
  caller: bigint
  isContract: bigint
  codeHash: bigint
  ownCodeHash: bigint
  callerIsOrigin: bigint
  address: bigint
  gasLeft: bigint
  balance: bigint
  valueTransferred: bigint
  minimumBalance: bigint
  blockNumber: bigint
  now: bigint
  weightToFee: bigint
  gas: bigint
  input: bigint
  inputPerByte: bigint
  return: bigint
  returnPerByte: bigint
  terminate: bigint
  random: bigint
  depositEvent: bigint
  depositEventPerTopic: bigint
  depositEventPerByte: bigint
  debugMessage: bigint
  setStorage: bigint
  setStoragePerNewByte: bigint
  setStoragePerOldByte: bigint
  setCodeHash: bigint
  clearStorage: bigint
  clearStoragePerByte: bigint
  containsStorage: bigint
  containsStoragePerByte: bigint
  getStorage: bigint
  getStoragePerByte: bigint
  takeStorage: bigint
  takeStoragePerByte: bigint
  transfer: bigint
  call: bigint
  delegateCall: bigint
  callTransferSurcharge: bigint
  callPerClonedByte: bigint
  instantiate: bigint
  instantiateTransferSurcharge: bigint
  instantiatePerSaltByte: bigint
  hashSha2256: bigint
  hashSha2256PerByte: bigint
  hashKeccak256: bigint
  hashKeccak256PerByte: bigint
  hashBlake2256: bigint
  hashBlake2256PerByte: bigint
  hashBlake2128: bigint
  hashBlake2128PerByte: bigint
  ecdsaRecover: bigint
  ecdsaToEthAddress: bigint
  reentranceCount: bigint
  accountReentranceCount: bigint
  instantiationNonce: bigint
}

export type Curve = Curve_LinearDecreasing | Curve_SteppedDecreasing | Curve_Reciprocal

export interface Curve_LinearDecreasing {
  __kind: 'LinearDecreasing'
  length: number
  floor: number
  ceil: number
}

export interface Curve_SteppedDecreasing {
  __kind: 'SteppedDecreasing'
  begin: number
  end: number
  step: number
  period: number
}

export interface Curve_Reciprocal {
  __kind: 'Reciprocal'
  factor: bigint
  xOffset: bigint
  yOffset: bigint
}

export interface Type_420 {
  normal: number
  operational: number
  mandatory: number
}

export interface Type_417 {
  normal: WeightsPerClass
  operational: WeightsPerClass
  mandatory: WeightsPerClass
}

export interface WeightsPerClass {
  baseExtrinsic: Weight
  maxExtrinsic: (Weight | undefined)
  maxTotal: (Weight | undefined)
  reserved: (Weight | undefined)
}
