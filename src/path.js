import {defineProperty, escapeStringRegexp, isString, isArray, isObject, isNullOrUndefined} from 'util-ex'

/**
 * Constructs a new Path instance for handling file path operations.
 *
 * @class Path
 * @constructor
 * @param {string|object} aOptions - Initialization options for the Path instance.
 *   If a string is provided, it sets the 'sep' property. If an object is provided,
 *   it can contain properties 'sep', 'delimiter', and 'splitPathReStr' to initialize
 *   respective instance properties.
 */
export function Path(aOptions) {
  /**
   * The path separator character.
   * @type {string}
   */
  defineProperty(this, 'sep', undefined, {
    get: (function(_this) {
      return function() {
        return _this._sep;
      };
    })(this),
    set: (function(_this) {
      return function(value) {
        if (isString(value) && value.length === 1) {
          _this._sep = value;
          return _this.updateSplitPathRe();
        }
      };
    })(this)
  });

  /**
   * The path delimiter character.
   * @type {string}
   */
  defineProperty(this, 'delimiter', undefined, {
    get: (function(_this) {
      return function() {
        return _this._delimiter;
      };
    })(this),
    set: (function(_this) {
      return function(value) {
        if (isString(value) && value.length === 1) {
          return _this._delimiter = value;
        }
      };
    })(this)
  });

  /**
   * A string representation of the regular expression used to split paths.
   * Must include the placeholder "&SEP&" which will be replaced with the actual
   * path separator character.
   * @type {string}
   */
  defineProperty(this, 'splitPathReStr', undefined, {
    get: (function(_this) {
      return function() {
        return _this._splitPathReStr;
      };
    })(this),
    set: (function(_this) {
      return function(value) {
        if (isString(value) && _this._sepRe.test(value)) {
          _this._splitPathReStr = value;
          return _this.updateSplitPathRe();
        } else {
          throw new TypeError('It should be a string and include "&SEP&"');
        }
      };
    })(this)
  });
  if (isString(aOptions)) {
    this.sep = aOptions;
  } else if (isObject(aOptions)) {
    if (isString(aOptions.sep)) {
      this.sep = aOptions.sep;
    }
    if (isString(aOptions.delimiter)) {
      this.delimiter = aOptions.delimiter;
    }
    if (isString(aOptions.splitPathReStr)) {
      this.splitPathReStr = aOptions.splitPathReStr;
    }
  }
  if (!this.splitPathRe) {
    this.updateSplitPathRe();
  }
}

/**
 * Returns whether the current operating system is Windows.
 *
 * @memberof Path
 * @instance
 * @returns {boolean} - True if the OS is Windows, false otherwise.
 */
Path.prototype.isWindows = Path.isWindows;

/**
 * Updates the internal split path regular expression using the current
 * `splitPathReStr` property, replacing the placeholder "&SEP&" with the actual
 * path separator character.
 *
 * @memberof Path
 * @instance
 * @returns {RegExp} - The updated split path regular expression.
 */
Path.prototype.updateSplitPathRe = function() {
  return this.splitPathRe = new RegExp(this._splitPathReStr.replace(this._sepRe, escapeStringRegexp(this._sep)));
};

/**
 * Splits a given filename into parts using the current split path regular expression.
 * Returns an array containing the matched parts, excluding the first element (the entire match).
 *
 * @memberof Path
 * @instance
 * @param {string} filename - The filename to split.
 * @returns {string[]} - An array of path parts extracted from the filename.
 */
Path.prototype.splitPath = function(filename) {
  return this.splitPathRe.exec(filename).slice(1);
};

/**
 * Converts a given path string into an array by splitting it using the current
 * path separator. Removes leading and trailing separators from the resulting array.
 *
 * @memberof Path
 * @instance
 * @param {string} aPath - The path string to convert.
 * @returns {string[]} - An array of path components without leading or trailing separators.
 */
Path.prototype.toArray = function(aPath) {

  /*
  while aPath.length and aPath[0] is _sep
    aPath = aPath.substring(1)
  while aPath.length and aPath[aPath.length - 1] is _sep
    aPath = aPath.substring(0, aPath.length - 1)
    */
  if (aPath && aPath.length) {
    return this.trimArray(aPath.split(this.sep));
  } else {
    return [];
  }
};

/**
 * Normalizes an array of path components, resolving "." and ".." elements, and
 * optionally allowing paths above the root directory.
 *
 * @memberof Path
 * @instance
 * @param {string[]} parts - An array of path components to normalize.
 * @param {boolean} [allowAboveRoot=false] - Whether to allow paths above the root directory.
 * @returns {string[]} - The normalized array of path components.
 */
Path.prototype.normalizeArray = function(parts, allowAboveRoot) {
  var i, p, res, vSep;
  res = [];
  i = 0;
  vSep = this._sep;
  if (isNullOrUndefined(allowAboveRoot) && parts[0] && parts[0].length) {
    switch (parts[i][0]) {
      case '.':
        allowAboveRoot = true;
        i++;
        if (parts[i - 1].length === 1) {
          while (i < parts.length && parts[i] === '.') {
            i++;
          }
        }
        break;
      case vSep:
        allowAboveRoot = false;
        i++;
        if (parts[i - 1].length === vSep.length) {
          while (i < parts.length && parts[i] === vSep) {
            i++;
          }
        }
    }
  }
  while (i < parts.length) {
    p = parts[i];
    if (!p || p === '.') {
      i++;
      continue;
    }
    if (p === '..') {
      if (res.length && res[res.length - 1] !== '..') {
        res.pop();
      } else if (allowAboveRoot) {
        res.push('..');
      }
    } else {
      res.push(p);
    }
    i++;
  }
  return res;
};

/**
 * Removes leading and trailing null or empty elements from an array.
 *
 * @memberof Path
 * @instance
 * @param {any[]} arr - The array to trim.
 * @returns {any[]} - The trimmed array.
 */
Path.prototype.trimArray = function(arr) {
  var end, lastIndex, start;
  lastIndex = arr.length - 1;
  start = 0;
  while (start <= lastIndex) {
    if (arr[start]) {
      break;
    }
    start++;
  }
  end = lastIndex;
  while (end >= 0) {
    if (arr[end]) {
      break;
    }
    end--;
  }
  if (start === 0 && end === lastIndex) {
    return arr;
  }
  if (start > end) {
    return [];
  }
  return arr.slice(start, end + 1);
};

/**
 * Checks if a given path is an absolute path.
 *
 * @memberof Path
 * @instance
 * @param {string} path - The path to check.
 * @returns {boolean} - True if the path is absolute, false otherwise.
 */
Path.prototype.isAbsolute = function(path) {
  return path.charAt(0) === this._sep;
};

/**
 * Normalizes a given path, resolving "." and ".." elements, removing unnecessary
 * slashes, and ensuring that the path starts with the correct separator.
 *
 * @memberof Path
 * @instance
 * @param {string} path - The path to normalize.
 * @returns {string} - The normalized path.
 */
Path.prototype.normalize = function(path) {
  var isAbsPath, trailingSlash;
  isAbsPath = this.isAbsolute(path);
  trailingSlash = path && path[path.length - 1] === this._sep;
  path = this.normalizeArray(path.split(this._sep), !isAbsPath).join(this._sep);
  if (!path && !isAbsPath) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += this._sep;
  }
  if (isAbsPath) {
    path = this._sep + path;
  }
  return path;
};

/**
 * Retrieves the current working directory.
 *
 * @memberof Path
 * @instance
 * @returns {string} - The current working directory, represented as a dot ('.').
 */
Path.prototype.cwd = function() {
  return '.';
};

/**
 * Resolves a sequence of paths or path segments into an absolute path. It takes
 * an arbitrary number of arguments and returns the resolved path as an array.
 * If no arguments are provided, the current working directory is used as the
 * starting point.
 *
 * @memberof Path
 * @instance
 * @param {...(string|string[])} paths - Paths or path segments to resolve.
 * @returns {string[]} - An array representing the resolved absolute path.
 */
Path.prototype.resolveArray = function() {
  var i, resolvedAbsolute, resolvedPath, vCwd, vPath;
  resolvedPath = [];
  vCwd = this.cwd();
  i = arguments.length;
  while (--i >= -1 && !resolvedAbsolute) {
    vPath = i >= 0 ? arguments[i] : vCwd;
    if (isArray(vPath)) {
      if (vPath.length === 0) {
        resolvedAbsolute = true;
      } else {
        resolvedPath = vPath.filter(Boolean).concat(resolvedPath);
        resolvedAbsolute = vPath[0] !== '.';
      }
      continue;
    } else if (vPath == null) {
      continue;
    } else if (!isString(vPath)) {
      throw new TypeError('Arguments to path.resolve must be string or array');
    }
    resolvedPath = vPath.split(this._sep).filter(Boolean).concat(resolvedPath);
    resolvedAbsolute = vPath.charAt(0) === this._sep;
  }
  resolvedPath = this.normalizeArray(resolvedPath, !resolvedAbsolute);
  resolvedPath.unshift(resolvedAbsolute ? this._sep : '.');
  return resolvedPath;
};

/**
 * Resolves a sequence of paths or path segments into an absolute path. It takes
 * an arbitrary number of arguments and returns the resolved path as a string.
 * If no arguments are provided, the current working directory is used as the
 * starting point.
 *
 * @memberof Path
 * @instance
 * @param {...(string|string[])} paths - Paths or path segments to resolve.
 * @returns {string} - The resolved absolute path.
 */
Path.prototype.resolve = function() {
  var resolvedPath, root;
  resolvedPath = this.resolveArray.apply(this, arguments);
  root = resolvedPath[0];
  if (root === '.') {
    root = '';
  }
  resolvedPath.shift(0, 1);
  return (root + resolvedPath.join(this._sep)) || '.';
};

/**
 * Joins an arbitrary number of path segments together into a single path.
 * It accepts both strings and arrays of strings as input.
 *
 * @memberof Path
 * @instance
 * @private
 * @param {...(string|string[])} paths - Path segments to join.
 * @returns {string[]} - An array of joined path segments.
 */
Path.prototype._join = function() {
  var i, result, segment, vPathSep;
  result = [];
  vPathSep = this._sep;
  i = -1;
  while (++i < arguments.length) {
    segment = arguments[i];
    if (isArray(segment)) {
      if (segment.length === 0) {
        segment = vPathSep;
      } else {
        segment = segment.filter(Boolean).join(vPathSep);
      }
    } else if (segment == null) {
      continue;
    } else if (!isString(segment)) {
      throw new TypeError('Arguments to path.join must be string or arrays');
    }
    if (segment) {
      result.push(segment);
    }
  }
  return result;
};

/**
 * Joins an arbitrary number of path segments together into a single normalized path.
 * It accepts both strings and arrays of strings as input.
 *
 * @memberof Path
 * @instance
 * @param {...(string|string[])} paths - Path segments to join.
 * @returns {string} - The normalized joined path.
 */
Path.prototype.join = function() {
  var result;
  result = this._join.apply(this, arguments);
  return this.normalize(result.join(this._sep));
};

/**
 * Compares two directories for equality.
 *
 * @memberof Path
 * @instance
 * @private
 * @param {string} aDir1 - The first directory to compare.
 * @param {string} aDir2 - The second directory to compare.
 * @returns {boolean} - True if the directories are the same, false otherwise.
 */

Path.prototype._isSame = function(aDir1, aDir2) {
  return aDir1 === aDir2;
};

/**
 * Computes the relative path from one path to another.
 *
 * @memberof Path
 * @instance
 * @param {string} from - The starting path.
 * @param {string} to - The destination path.
 * @returns {string} - The relative path from `from` to `to`.
 */
Path.prototype.relative = function(from, to) {
  var fromParts, i, length, outputParts, samePartsLength, toParts, vPathSep;
  vPathSep = this._sep;
  fromParts = this.resolveArray(from);
  toParts = this.resolveArray(to);
  fromParts.shift(0, 1);
  toParts.shift(0, 1);
  length = Math.min(fromParts.length, toParts.length);
  samePartsLength = length;
  i = -1;
  while (++i < length) {
    if (!this._isSame(fromParts[i], toParts[i])) {
      samePartsLength = i;
      break;
    }
  }
  outputParts = [];
  i = samePartsLength;
  while (i < fromParts.length) {
    outputParts.push('..');
    i++;
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join(vPathSep);
};

/**
 * Retrieves the directory name of a given path.
 *
 * @memberof Path
 * @instance
 * @param {string} path - The path to extract the directory name from.
 * @returns {string} - The directory name.
 */
Path.prototype.dirname = function(path) {
  var dir, result, root;
  result = this.splitPath(path);
  root = result[0];
  dir = result[1];
  if (!root && !dir) {
    return '.';
  }
  if (dir) {
    dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
};

/**
 * Retrieves the last portion of a path, typically a file name.
 *
 * @memberof Path
 * @instance
 * @param {string} path - The path to extract the base name from.
 * @param {string} [ext] - An optional extension to remove from the base name.
 * @returns {string} - The base name of the path.
 */
Path.prototype.basename = function(path, ext) {
  var f;
  f = this.splitPath(path)[2];
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


/**
 * Replaces the extension of a given path with a new extension.
 *
 * @memberof Path
 * @instance
 * @param {string} path - The path whose extension to replace.
 * @param {string} ext - The new extension.
 * @returns {string} - The path with the replaced extension.
 */
Path.prototype.replaceExt = function(path, ext) {
  var dir, f, oldExt, v;
  v = this.splitPath(path);
  f = v[2];
  dir = v[0] + v[1];
  oldExt = v[3];
  if (oldExt && f.substr(-1 * oldExt.length) === oldExt) {
    f = f.substr(0, f.length - oldExt.length);
  }
  return dir + f + ext;
};


/**
 * Retrieves the extension of a given path.
 *
 * @memberof Path
 * @instance
 * @param {string} path - The path to extract the extension from.
 * @returns {string} - The extension of the path.
 */
Path.prototype.extname = function(path) {
  return this.splitPath(path)[3];
};

/**
 * Formats a path object into a path string.
 *
 * @memberof Path
 * @instance
 * @param {object} pathObject - An object containing path components to format.
 * @returns {string} - The formatted path string.
 */
Path.prototype.format = function(pathObject) {
  var base, dir, root;
  if (!isObject(pathObject)) {
    throw new TypeError('Parameter \'pathObject\' must be an object, not ' + typeof pathObject);
  }
  root = pathObject.root || '';
  if (!isString(root)) {
    throw new TypeError('\'pathObject.root\' must be a string or undefined, not ' + typeof pathObject.root);
  }
  dir = pathObject.dir;
  if ((dir != null) && !isString(dir)) {
    throw new TypeError('\'pathObject.dir\' must be a string or undefined, not ' + typeof pathObject.dir);
  }
  base = pathObject.base || '';
  if (!dir) {
    dir = '';
  } else if (dir[dir.length - 1] !== this._sep) {
    dir += this._sep;
  }
  return dir + base;
};

/**
 * Parses a path string into an object containing its component parts.
 *
 * @memberof Path
 * @instance
 * @param {string} pathString - The path string to parse.
 * @returns {object} - An object containing the parsed path components.
 */
Path.prototype.parse = function(pathString) {
  var allParts;
  if (!isString(pathString)) {
    throw new TypeError('Parameter \'pathString\' must be a string, not ' + typeof pathString);
  }
  allParts = this.splitPath(pathString);
  if (!allParts || allParts.length !== 4) {
    throw new TypeError('Invalid path \'' + pathString + '\'');
  }
  allParts[1] = allParts[1] || '';
  allParts[2] = allParts[2] || '';
  allParts[3] = allParts[3] || '';
  return {
    root: allParts[0],
    dir: allParts[0] + allParts[1].slice(0, -1),
    base: allParts[2],
    ext: allParts[3],
    name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
  };
};

/**
 * Converts a given path to a long UNC path, if applicable.
 *
 * @memberof Path
 * @instance
 * @private
 * @param {string} path - The path to convert.
 * @returns {string} - The converted long UNC path, or the original path if not applicable.
 */
Path.prototype._makeLong = function(path) {
  return path;
};

/**
 * A regular expression pattern used to match path separators in various operations.
 *
 * @memberof Path
 * @instance
 * @private
 * @type {RegExp}
 */
Path.prototype._sepRe = /&SEP&/g;

/**
 * The default path separator character.
 *
 * @memberof Path
 * @instance
 * @type {string}
 */
Path.prototype._sep = '/';

/**
 * The default path delimiter character.
 *
 * @memberof Path
 * @instance
 * @type {string}
 */
Path.prototype._delimiter = ':';

/**
 * A string representation of the regular expression used to split paths.
 * Contains the placeholder "&SEP&" which will be replaced with the actual
 * path separator character.
 *
 * @memberof Path
 * @instance
 * @type {string}
 */
Path.prototype._splitPathReStr = '^(&SEP&?|)([\\s\\S]*?)((?:\\.{1,2}|[^' + '&SEP&]+?|)(\\.[^.&SEP&]*|))(?:[&SEP&]*)$';

/**
 * Indicates whether the current operating system is Windows.
 *
 * @memberof Path
 * @static
 * @type {boolean}
 */
Path.isWindows = process.platform === 'win32';

export default Path
