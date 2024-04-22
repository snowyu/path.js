[path.js](../README.md) / [Exports](../modules.md) / [win](../modules/win.md) / WinPath

# Class: WinPath

[win](../modules/win.md).WinPath

A subclass of `Path` that provides functionality specific to Windows file systems.

## Hierarchy

- [`Path`](path.Path.md)

  ↳ **`WinPath`**

## Table of contents

### Constructors

- [constructor](win.WinPath.md#constructor)

### Properties

- [\_delimiter](win.WinPath.md#_delimiter)
- [\_sep](win.WinPath.md#_sep)
- [\_splitPathReStr](win.WinPath.md#_splitpathrestr)
- [delimiter](win.WinPath.md#delimiter)
- [isWindows](win.WinPath.md#iswindows)
- [sep](win.WinPath.md#sep)
- [splitPathRe](win.WinPath.md#splitpathre)
- [splitPathReStr](win.WinPath.md#splitpathrestr)
- [isWindows](win.WinPath.md#iswindows-1)

### Methods

- [\_isSame](win.WinPath.md#_issame)
- [\_makeLong](win.WinPath.md#_makelong)
- [basename](win.WinPath.md#basename)
- [cwd](win.WinPath.md#cwd)
- [dirname](win.WinPath.md#dirname)
- [extname](win.WinPath.md#extname)
- [format](win.WinPath.md#format)
- [isAbsolute](win.WinPath.md#isabsolute)
- [join](win.WinPath.md#join)
- [normalize](win.WinPath.md#normalize)
- [normalizeArray](win.WinPath.md#normalizearray)
- [normalizeUNCRoot](win.WinPath.md#normalizeuncroot)
- [parse](win.WinPath.md#parse)
- [relative](win.WinPath.md#relative)
- [replaceExt](win.WinPath.md#replaceext)
- [resolve](win.WinPath.md#resolve)
- [resolveArray](win.WinPath.md#resolvearray)
- [splitPath](win.WinPath.md#splitpath)
- [statPath](win.WinPath.md#statpath)
- [toArray](win.WinPath.md#toarray)
- [trimArray](win.WinPath.md#trimarray)
- [updateSplitPathRe](win.WinPath.md#updatesplitpathre)

## Constructors

### constructor

• **new WinPath**(): [`WinPath`](win.WinPath.md)

#### Returns

[`WinPath`](win.WinPath.md)

#### Overrides

[Path](path.Path.md).[constructor](path.Path.md#constructor)

#### Defined in

[win/index.js:13](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L13)

## Properties

### \_delimiter

• **\_delimiter**: `string`

The default path delimiter character.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[_delimiter](path.Path.md#_delimiter)

#### Defined in

[path.js:611](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L611)

___

### \_sep

• **\_sep**: `string`

The default path separator character.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[_sep](path.Path.md#_sep)

#### Defined in

[path.js:602](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L602)

___

### \_splitPathReStr

• **\_splitPathReStr**: `string`

A string representation of the regular expression used to split paths.
Contains the placeholder "&SEP&" which will be replaced with the actual
path separator character.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[_splitPathReStr](path.Path.md#_splitpathrestr)

#### Defined in

[path.js:622](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L622)

___

### delimiter

• **delimiter**: `string`

The path delimiter character.

#### Inherited from

[Path](path.Path.md).[delimiter](path.Path.md#delimiter)

#### Defined in

[path.js:85](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L85)

___

### isWindows

• **isWindows**: `boolean`

Returns whether the current operating system is Windows.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[isWindows](path.Path.md#iswindows)

#### Defined in

[path.js:583](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L583)

___

### sep

• **sep**: `string`

The path separator character.

#### Inherited from

[Path](path.Path.md).[sep](path.Path.md#sep)

#### Defined in

[path.js:75](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L75)

[path.js:78](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L78)

___

### splitPathRe

• **splitPathRe**: `RegExp`

#### Inherited from

[Path](path.Path.md).[splitPathRe](path.Path.md#splitpathre)

#### Defined in

[path.js:111](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L111)

___

### splitPathReStr

• **splitPathReStr**: `string`

A string representation of the regular expression used to split paths.
Must include the placeholder "&SEP&" which will be replaced with the actual
path separator character.

#### Inherited from

[Path](path.Path.md).[splitPathReStr](path.Path.md#splitpathrestr)

#### Defined in

[path.js:94](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L94)

___

### isWindows

▪ `Static` **isWindows**: `boolean`

Indicates whether the current operating system is Windows.

**`Memberof`**

Path

**`Static`**

#### Inherited from

[Path](path.Path.md).[isWindows](path.Path.md#iswindows-1)

#### Defined in

[path.js:631](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L631)

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

#### Overrides

[Path](path.Path.md).[_isSame](path.Path.md#_issame)

#### Defined in

[win/index.js:39](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L39)

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

#### Overrides

[Path](path.Path.md).[_makeLong](path.Path.md#_makelong)

#### Defined in

[win/index.js:143](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L143)

___

### basename

▸ **basename**(`path`, `ext?`): `string`

Retrieves the last portion of a path, typically a file name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to extract the base name from. |
| `ext?` | `string` | An optional extension to remove from the base name. |

#### Returns

`string`

- The base name of the path.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[basename](path.Path.md#basename)

#### Defined in

[path.js:466](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L466)

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

#### Overrides

[Path](path.Path.md).[cwd](path.Path.md#cwd)

#### Defined in

[win/index.js:27](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L27)

___

### dirname

▸ **dirname**(`path`): `string`

Retrieves the directory name of a given path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to extract the directory name from. |

#### Returns

`string`

- The directory name.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[dirname](path.Path.md#dirname)

#### Defined in

[path.js:444](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L444)

___

### extname

▸ **extname**(`path`): `string`

Retrieves the extension of a given path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to extract the extension from. |

#### Returns

`string`

- The extension of the path.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[extname](path.Path.md#extname)

#### Defined in

[path.js:502](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L502)

___

### format

▸ **format**(`pathObject`): `string`

Formats a path object into a path string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pathObject` | `any` | An object containing path components to format. |

#### Returns

`string`

- The formatted path string.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[format](path.Path.md#format)

#### Defined in

[path.js:513](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L513)

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

#### Overrides

[Path](path.Path.md).[isAbsolute](path.Path.md#isabsolute)

#### Defined in

[win/index.js:132](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L132)

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

#### Overrides

[Path](path.Path.md).[join](path.Path.md#join)

#### Defined in

[win/index.js:169](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L169)

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

#### Overrides

[Path](path.Path.md).[normalize](path.Path.md#normalize)

#### Defined in

[win/index.js:188](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L188)

___

### normalizeArray

▸ **normalizeArray**(`parts`, `allowAboveRoot?`): `string`[]

Normalizes an array of path components, resolving "." and ".." elements, and
optionally allowing paths above the root directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parts` | `string`[] | An array of path components to normalize. |
| `allowAboveRoot?` | `boolean` | Whether to allow paths above the root directory. |

#### Returns

`string`[]

- The normalized array of path components.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[normalizeArray](path.Path.md#normalizearray)

#### Defined in

[path.js:158](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L158)

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

[win/index.js:51](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L51)

___

### parse

▸ **parse**(`pathString`): `any`

Parses a path string into an object containing its component parts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pathString` | `string` | The path string to parse. |

#### Returns

`any`

- An object containing the parsed path components.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[parse](path.Path.md#parse)

#### Defined in

[path.js:542](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L542)

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

#### Overrides

[Path](path.Path.md).[relative](path.Path.md#relative)

#### Defined in

[win/index.js:291](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L291)

___

### replaceExt

▸ **replaceExt**(`path`, `ext`): `string`

Replaces the extension of a given path with a new extension.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path whose extension to replace. |
| `ext` | `string` | The new extension. |

#### Returns

`string`

- The path with the replaced extension.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[replaceExt](path.Path.md#replaceext)

#### Defined in

[path.js:483](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L483)

___

### resolve

▸ **resolve**(`...args`): `string`

Resolves a sequence of paths or path segments into an absolute path. It takes
an arbitrary number of arguments and returns the resolved path as a string.
If no arguments are provided, the current working directory is used as the
starting point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`

- The resolved absolute path.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[resolve](path.Path.md#resolve)

#### Defined in

[path.js:331](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L331)

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

#### Overrides

[Path](path.Path.md).[resolveArray](path.Path.md#resolvearray)

#### Defined in

[win/index.js:216](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L216)

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

#### Overrides

[Path](path.Path.md).[splitPath](path.Path.md#splitpath)

#### Defined in

[win/index.js:93](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L93)

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

[win/index.js:112](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L112)

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

#### Overrides

[Path](path.Path.md).[toArray](path.Path.md#toarray)

#### Defined in

[win/index.js:62](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/win/index.js#L62)

___

### trimArray

▸ **trimArray**(`arr`): `any`[]

Removes leading and trailing null or empty elements from an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `any`[] | The array to trim. |

#### Returns

`any`[]

- The trimmed array.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[trimArray](path.Path.md#trimarray)

#### Defined in

[path.js:211](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L211)

___

### updateSplitPathRe

▸ **updateSplitPathRe**(): `RegExp`

Updates the internal split path regular expression using the current
`splitPathReStr` property, replacing the placeholder "&SEP&" with the actual
path separator character.

#### Returns

`RegExp`

- The updated split path regular expression.

**`Memberof`**

Path

**`Instance`**

#### Inherited from

[Path](path.Path.md).[updateSplitPathRe](path.Path.md#updatesplitpathre)

#### Defined in

[path.js:110](https://github.com/snowyu/path.js/blob/d99f7d146a1759ca42719ad3a7dded5404fe6ec5/src/path.js#L110)
