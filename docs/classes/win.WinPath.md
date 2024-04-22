[path.js](../README.md) / [Exports](../modules.md) / [win](../modules/win.md) / WinPath

# Class: WinPath

[win](../modules/win.md).WinPath

A subclass of `Path` that provides functionality specific to Windows file systems.

 WinPath

## Table of contents

### Constructors

- [constructor](win.WinPath.md#constructor)

### Methods

- [\_isSame](win.WinPath.md#_issame)
- [\_makeLong](win.WinPath.md#_makelong)
- [cwd](win.WinPath.md#cwd)
- [isAbsolute](win.WinPath.md#isabsolute)
- [join](win.WinPath.md#join)
- [normalize](win.WinPath.md#normalize)
- [normalizeUNCRoot](win.WinPath.md#normalizeuncroot)
- [relative](win.WinPath.md#relative)
- [resolveArray](win.WinPath.md#resolvearray)
- [splitPath](win.WinPath.md#splitpath)
- [statPath](win.WinPath.md#statpath)
- [toArray](win.WinPath.md#toarray)

## Constructors

### constructor

• **new WinPath**(): [`WinPath`](win.WinPath.md)

A subclass of `Path` that provides functionality specific to Windows file systems.

 WinPath

#### Returns

[`WinPath`](win.WinPath.md)

#### Defined in

[win/index.js:17](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L17)

## Methods

### \_isSame

▸ **_isSame**(`aDir1`, `aDir2`): `boolean`

Checks if two directory paths are the same, ignoring case differences.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aDir1` | `string` | The first directory path to compare. |
| `aDir2` | `string` | The second directory path to compare. |

#### Returns

`boolean`

- `true` if the paths are the same (case-insensitive), `false` otherwise.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:45](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L45)

___

### \_makeLong

▸ **_makeLong**(`path`): `string`

Makes a long Windows path from a given path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to convert. |

#### Returns

`string`

- The long Windows path representation.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:156](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L156)

___

### cwd

▸ **cwd**(): `string`

Retrieves the current working directory by calling `process.cwd()` and normalizing
the path for Windows by replacing any consecutive slashes or backslashes with a single backslash.

#### Returns

`string`

- The normalized current working directory for Windows.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:32](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L32)

___

### isAbsolute

▸ **isAbsolute**(`path`): `boolean`

Determines whether a given path is absolute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to check. |

#### Returns

`boolean`

- `true` if the path is absolute, `false` otherwise.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:143](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L143)

___

### join

▸ **join**(`...args`): `string`

Joins all given path segments into a single path, taking into account Windows-specific rules.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`

- The joined path.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:184](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L184)

___

### normalize

▸ **normalize**(`path`): `string`

Normalizes a given path, resolving '.' and '..' segments, and ensuring correct slashes for Windows.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to normalize. |

#### Returns

`string`

- The normalized path.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:204](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L204)

___

### normalizeUNCRoot

▸ **normalizeUNCRoot**(`device`): `string`

Normalizes a UNC root path by removing leading slashes or backslashes and replacing
any consecutive slashes or backslashes with a single backslash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | `string` | The UNC root path to normalize. |

#### Returns

`string`

- The normalized UNC root path.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:58](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L58)

___

### relative

▸ **relative**(`from`, `to`): `string`

Computes the relative path from one path to another, considering Windows-specific rules.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | The starting path. |
| `to` | `string` | The destination path. |

#### Returns

`string`

- The relative path from `from` to `to`.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:310](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L310)

___

### resolveArray

▸ **resolveArray**(`...args`): `string`[]

Resolves a sequence of paths or path segments into an absolute path, considering Windows-specific rules.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`[]

- An array representing the resolved absolute path.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:234](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L234)

___

### splitPath

▸ **splitPath**(`filename`): `string`[]

Splits a given path into its device, directory, base, and extension components.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | The path to split. |

#### Returns

`string`[]

- An array containing the device, directory, base, and extension components.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:102](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L102)

___

### statPath

▸ **statPath**(`path`): `Object`

Analyzes a given path and returns an object containing information about it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to analyze. |

#### Returns

`Object`

- An object containing device, isUnc, isAbsolute, and tail properties.

| Name | Type |
| :------ | :------ |
| `device` | `string` |
| `isAbsolute` | `boolean` |
| `isUnc` | `boolean` |
| `tail` | `string` |

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:122](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L122)

___

### toArray

▸ **toArray**(`aPath`): `string`[]

Converts a given path into an array of path segments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aPath` | `string` | The path to convert. |

#### Returns

`string`[]

- An array containing the path segments.

**`Memberof`**

WinPath

**`Instance`**

#### Defined in

[win/index.js:70](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/win/index.js#L70)
