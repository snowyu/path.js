[path.js](../README.md) / [Exports](../modules.md) / [path](../modules/path.md) / Path

# Class: Path

[path](../modules/path.md).Path

The Path Class for handling file path operations.

## Hierarchy

- **`Path`**

  ↳ [`PosixPath`](posix.PosixPath.md)

  ↳ [`WinPath`](win.WinPath.md)

## Table of contents

### Constructors

- [constructor](path.Path.md#constructor)

### Properties

- [\_delimiter](path.Path.md#_delimiter)
- [\_sep](path.Path.md#_sep)
- [\_splitPathReStr](path.Path.md#_splitpathrestr)
- [delimiter](path.Path.md#delimiter)
- [isWindows](path.Path.md#iswindows)
- [sep](path.Path.md#sep)
- [splitPathRe](path.Path.md#splitpathre)
- [splitPathReStr](path.Path.md#splitpathrestr)
- [isWindows](path.Path.md#iswindows-1)

### Methods

- [\_isSame](path.Path.md#_issame)
- [\_join](path.Path.md#_join)
- [\_makeLong](path.Path.md#_makelong)
- [basename](path.Path.md#basename)
- [cwd](path.Path.md#cwd)
- [dirname](path.Path.md#dirname)
- [extname](path.Path.md#extname)
- [format](path.Path.md#format)
- [isAbsolute](path.Path.md#isabsolute)
- [join](path.Path.md#join)
- [normalize](path.Path.md#normalize)
- [normalizeArray](path.Path.md#normalizearray)
- [parse](path.Path.md#parse)
- [relative](path.Path.md#relative)
- [replaceExt](path.Path.md#replaceext)
- [resolve](path.Path.md#resolve)
- [resolveArray](path.Path.md#resolvearray)
- [splitPath](path.Path.md#splitpath)
- [toArray](path.Path.md#toarray)
- [trimArray](path.Path.md#trimarray)
- [updateSplitPathRe](path.Path.md#updatesplitpathre)

## Constructors

### constructor

• **new Path**(`aOptions`): [`Path`](path.Path.md)

Constructs a new Path instance for handling file path operations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aOptions` | `any` | Initialization options for the Path instance. If a string is provided, it sets the 'sep' property. If an object is provided, it can contain properties 'sep', 'delimiter', and 'splitPathReStr' to initialize respective instance properties. |

#### Returns

[`Path`](path.Path.md)

#### Defined in

[path.js:16](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L16)

## Properties

### \_delimiter

• **\_delimiter**: `string`

The default path delimiter character.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:611](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L611)

___

### \_sep

• **\_sep**: `string`

The default path separator character.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:602](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L602)

___

### \_splitPathReStr

• **\_splitPathReStr**: `string`

A string representation of the regular expression used to split paths.
Contains the placeholder "&SEP&" which will be replaced with the actual
path separator character.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:622](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L622)

___

### delimiter

• **delimiter**: `string`

The path delimiter character.

#### Defined in

[path.js:85](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L85)

___

### isWindows

• **isWindows**: `boolean`

Returns whether the current operating system is Windows.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:583](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L583)

___

### sep

• **sep**: `string`

The path separator character.

#### Defined in

[path.js:75](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L75)

[path.js:78](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L78)

___

### splitPathRe

• **splitPathRe**: `RegExp`

#### Defined in

[path.js:111](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L111)

___

### splitPathReStr

• **splitPathReStr**: `string`

A string representation of the regular expression used to split paths.
Must include the placeholder "&SEP&" which will be replaced with the actual
path separator character.

#### Defined in

[path.js:94](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L94)

___

### isWindows

▪ `Static` **isWindows**: `boolean`

Indicates whether the current operating system is Windows.

**`Memberof`**

Path

**`Static`**

#### Defined in

[path.js:631](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L631)

## Methods

### \_isSame

▸ **_isSame**(`aDir1`, `aDir2`): `boolean`

Compares two directories for equality.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aDir1` | `string` | The first directory to compare. |
| `aDir2` | `string` | The second directory to compare. |

#### Returns

`boolean`

- True if the directories are the same, false otherwise.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:399](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L399)

___

### \_join

▸ **_join**(`...args`): `string`[]

Joins an arbitrary number of path segments together into a single path.
It accepts both strings and arrays of strings as input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`[]

- An array of joined path segments.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:351](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L351)

___

### \_makeLong

▸ **_makeLong**(`path`): `string`

Converts a given path to a long UNC path, if applicable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to convert. |

#### Returns

`string`

- The converted long UNC path, or the original path if not applicable.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:571](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L571)

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

#### Defined in

[path.js:466](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L466)

___

### cwd

▸ **cwd**(): `string`

Retrieves the current working directory.

#### Returns

`string`

- The current working directory, represented as a dot ('.').

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:279](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L279)

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

#### Defined in

[path.js:444](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L444)

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

#### Defined in

[path.js:502](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L502)

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

#### Defined in

[path.js:513](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L513)

___

### isAbsolute

▸ **isAbsolute**(`path`): `boolean`

Checks if a given path is an absolute path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to check. |

#### Returns

`boolean`

- True if the path is absolute, false otherwise.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:244](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L244)

___

### join

▸ **join**(`...args`): `string`

Joins an arbitrary number of path segments together into a single normalized path.
It accepts both strings and arrays of strings as input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`

- The normalized joined path.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:384](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L384)

___

### normalize

▸ **normalize**(`path`): `string`

Normalizes a given path, resolving "." and ".." elements, removing unnecessary
slashes, and ensuring that the path starts with the correct separator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to normalize. |

#### Returns

`string`

- The normalized path.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:256](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L256)

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

#### Defined in

[path.js:158](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L158)

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

#### Defined in

[path.js:542](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L542)

___

### relative

▸ **relative**(`from`, `to`): `string`

Computes the relative path from one path to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `string` | The starting path. |
| `to` | `string` | The destination path. |

#### Returns

`string`

- The relative path from `from` to `to`.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:411](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L411)

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

#### Defined in

[path.js:483](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L483)

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

#### Defined in

[path.js:331](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L331)

___

### resolveArray

▸ **resolveArray**(`...args`): `string`[]

Resolves a sequence of paths or path segments into an absolute path. It takes
an arbitrary number of arguments and returns the resolved path as an array.
If no arguments are provided, the current working directory is used as the
starting point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`[]

- An array representing the resolved absolute path.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:293](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L293)

___

### splitPath

▸ **splitPath**(`filename`): `string`[]

Splits a given filename into parts using the current split path regular expression.
Returns an array containing the matched parts, excluding the first element (the entire match).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | The filename to split. |

#### Returns

`string`[]

- An array of path parts extracted from the filename.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:122](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L122)

___

### toArray

▸ **toArray**(`aPath`): `string`[]

Converts a given path string into an array by splitting it using the current
path separator. Removes leading and trailing separators from the resulting array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aPath` | `string` | The path string to convert. |

#### Returns

`string`[]

- An array of path components without leading or trailing separators.

**`Memberof`**

Path

**`Instance`**

#### Defined in

[path.js:134](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L134)

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

#### Defined in

[path.js:211](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L211)

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

#### Defined in

[path.js:110](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L110)
