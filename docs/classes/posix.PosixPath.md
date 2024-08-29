[path.js](../README.md) / [Exports](../modules.md) / [posix](../modules/posix.md) / PosixPath

# Class: PosixPath

[posix](../modules/posix.md).PosixPath

A subclass of `Path` that provides functionality specific to POSIX-compliant
systems (e.g., Linux, macOS).

## Hierarchy

- [`Path`](path.Path.md)

  ↳ **`PosixPath`**

## Table of contents

### Constructors

- [constructor](posix.PosixPath.md#constructor)

### Properties

- [\_delimiter](posix.PosixPath.md#_delimiter)
- [\_sep](posix.PosixPath.md#_sep)
- [\_splitPathReStr](posix.PosixPath.md#_splitpathrestr)
- [delimiter](posix.PosixPath.md#delimiter)
- [isWindows](posix.PosixPath.md#iswindows)
- [sep](posix.PosixPath.md#sep)
- [splitPathRe](posix.PosixPath.md#splitpathre)
- [splitPathReStr](posix.PosixPath.md#splitpathrestr)
- [isWindows](posix.PosixPath.md#iswindows-1)

### Methods

- [basename](posix.PosixPath.md#basename)
- [cwd](posix.PosixPath.md#cwd)
- [dirname](posix.PosixPath.md#dirname)
- [extname](posix.PosixPath.md#extname)
- [format](posix.PosixPath.md#format)
- [isAbsolute](posix.PosixPath.md#isabsolute)
- [join](posix.PosixPath.md#join)
- [normalize](posix.PosixPath.md#normalize)
- [normalizeArray](posix.PosixPath.md#normalizearray)
- [parse](posix.PosixPath.md#parse)
- [relative](posix.PosixPath.md#relative)
- [replaceExt](posix.PosixPath.md#replaceext)
- [resolve](posix.PosixPath.md#resolve)
- [resolveArray](posix.PosixPath.md#resolvearray)
- [splitPath](posix.PosixPath.md#splitpath)
- [toArray](posix.PosixPath.md#toarray)
- [trimArray](posix.PosixPath.md#trimarray)
- [updateSplitPathRe](posix.PosixPath.md#updatesplitpathre)

## Constructors

### constructor

• **new PosixPath**(): [`PosixPath`](posix.PosixPath.md)

#### Returns

[`PosixPath`](posix.PosixPath.md)

#### Overrides

[Path](path.Path.md).[constructor](path.Path.md#constructor)

#### Defined in

[posix/index.js:9](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/posix/index.js#L9)

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

[path.js:611](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L611)

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

#### Inherited from

[Path](path.Path.md).[_splitPathReStr](path.Path.md#_splitpathrestr)

#### Defined in

[path.js:622](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L622)

___

### delimiter

• **delimiter**: `string`

The path delimiter character.

#### Inherited from

[Path](path.Path.md).[delimiter](path.Path.md#delimiter)

#### Defined in

[path.js:85](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L85)

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

[path.js:583](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L583)

___

### sep

• **sep**: `string`

The path separator character.

#### Inherited from

[Path](path.Path.md).[sep](path.Path.md#sep)

#### Defined in

[path.js:75](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L75)

[path.js:78](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L78)

___

### splitPathRe

• **splitPathRe**: `RegExp`

#### Inherited from

[Path](path.Path.md).[splitPathRe](path.Path.md#splitpathre)

#### Defined in

[path.js:111](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L111)

___

### splitPathReStr

• **splitPathReStr**: `string`

A string representation of the regular expression used to split paths.
Must include the placeholder "&SEP&" which will be replaced with the actual
path separator character.

#### Inherited from

[Path](path.Path.md).[splitPathReStr](path.Path.md#splitpathrestr)

#### Defined in

[path.js:94](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L94)

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

[path.js:631](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L631)

## Methods

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

[path.js:466](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L466)

___

### cwd

▸ **cwd**(): `string`

Retrieves the current working directory by calling `process.cwd()`.

#### Returns

`string`

- The current working directory as returned by `process.cwd()`.

**`Memberof`**

PosixPath

**`Instance`**

#### Overrides

[Path](path.Path.md).[cwd](path.Path.md#cwd)

#### Defined in

[posix/index.js:19](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/posix/index.js#L19)

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

#### Inherited from

[Path](path.Path.md).[extname](path.Path.md#extname)

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

#### Inherited from

[Path](path.Path.md).[format](path.Path.md#format)

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

#### Inherited from

[Path](path.Path.md).[isAbsolute](path.Path.md#isabsolute)

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

#### Inherited from

[Path](path.Path.md).[join](path.Path.md#join)

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

#### Inherited from

[Path](path.Path.md).[normalize](path.Path.md#normalize)

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

#### Inherited from

[Path](path.Path.md).[normalizeArray](path.Path.md#normalizearray)

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

#### Inherited from

[Path](path.Path.md).[parse](path.Path.md#parse)

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

#### Inherited from

[Path](path.Path.md).[relative](path.Path.md#relative)

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

#### Inherited from

[Path](path.Path.md).[replaceExt](path.Path.md#replaceext)

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

#### Inherited from

[Path](path.Path.md).[resolve](path.Path.md#resolve)

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

#### Inherited from

[Path](path.Path.md).[resolveArray](path.Path.md#resolvearray)

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

#### Inherited from

[Path](path.Path.md).[splitPath](path.Path.md#splitpath)

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

#### Inherited from

[Path](path.Path.md).[toArray](path.Path.md#toarray)

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

#### Inherited from

[Path](path.Path.md).[trimArray](path.Path.md#trimarray)

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

#### Inherited from

[Path](path.Path.md).[updateSplitPathRe](path.Path.md#updatesplitpathre)

#### Defined in

[path.js:110](https://github.com/snowyu/path.js/blob/469789d52617c44019fccf4643e8126e37a697a3/src/path.js#L110)
