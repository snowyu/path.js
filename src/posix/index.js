import { inherits } from 'inherits-ex';

import { Path } from '../path';

/**
 * A subclass of `Path` that provides functionality specific to POSIX-compliant
 * systems (e.g., Linux, macOS).
 *
 * @class PosixPath
 * @constructor
 * @extends Path
 */
export function PosixPath() {
  PosixPath.__super__.constructor.call(this);
}

/**
 * Retrieves the current working directory by calling `process.cwd()`.
 *
 * @memberof PosixPath
 * @instance
 * @returns {string} - The current working directory as returned by `process.cwd()`.
 */
PosixPath.prototype.cwd = function() {
  return process.cwd();
};

inherits(PosixPath, Path);

/**
 * The exported `PosixPath` class.
 *
 * @typedef {PosixPath} default
 */
export default PosixPath;
