[path.js](../README.md) / [Exports](../modules.md) / [posix](../modules/posix.md) / PosixPath

# Class: PosixPath

[posix](../modules/posix.md).PosixPath

A subclass of `Path` that provides functionality specific to POSIX-compliant
systems (e.g., Linux, macOS).

 PosixPath

## Table of contents

### Constructors

- [constructor](posix.PosixPath.md#constructor)

### Methods

- [cwd](posix.PosixPath.md#cwd)

## Constructors

### constructor

• **new PosixPath**(): [`PosixPath`](posix.PosixPath.md)

A subclass of `Path` that provides functionality specific to POSIX-compliant
systems (e.g., Linux, macOS).

 PosixPath

#### Returns

[`PosixPath`](posix.PosixPath.md)

#### Defined in

[posix/index.js:13](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/posix/index.js#L13)

## Methods

### cwd

▸ **cwd**(): `string`

Retrieves the current working directory by calling `process.cwd()`.

#### Returns

`string`

- The current working directory as returned by `process.cwd()`.

**`Memberof`**

PosixPath

**`Instance`**

#### Defined in

[posix/index.js:24](https://github.com/snowyu/path.js/blob/0b279721994bc28f56f07c4268560d87eb72e0dd/src/posix/index.js#L24)
