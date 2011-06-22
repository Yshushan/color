var Color = require("../color"),
    assert = require("assert");

// Color() argument
assert.deepEqual(Color("#0A1E19").rgb(), {r: 10, g: 30, b: 25});
assert.deepEqual(Color("rgb(10, 30, 25)").rgb(), {r: 10, g: 30, b: 25});
assert.deepEqual(Color("rgba(10, 30, 25, 0.4)").rgb(), {r: 10, g: 30, b: 25, a: 0.4});
assert.deepEqual(Color("rgb(4%, 12%, 10%)").rgb(), {r: 10, g: 31, b: 26});
assert.deepEqual(Color("rgba(4%, 12%, 10%, 0.4)").rgb(), {r: 10, g: 31, b: 26, a: 0.4});
assert.deepEqual(Color("blue").rgb(), {r: 0, g: 0, b: 255});
assert.deepEqual(Color("hsl(120, 50%, 60%)").hsl(), {h: 120, s: 50, l: 60});
assert.deepEqual(Color("hsla(120, 50%, 60%, 0.4)").hsl(), {h: 120, s: 50, l: 60, a: 0.4});

assert.deepEqual(Color({r: 10, g: 30, b: 25}).rgb(), {r: 10, g: 30, b: 25});
assert.deepEqual(Color({h: 10, s: 30, l: 25}).hsl(), {h: 10, s: 30, l: 25});
assert.deepEqual(Color({h: 10, s: 30, v: 25}).hsv(), {h: 10, s: 30, v: 25});
assert.deepEqual(Color({c: 10, m: 30, y: 25, k: 10}).cmyk(), {c: 10, m: 30, y: 25, k: 10});

assert.deepEqual(Color({red: 10, green: 30, blue: 25}).rgb(), {r: 10, g: 30, b: 25});
assert.deepEqual(Color({hue: 10, saturation: 30, lightness: 25}).hsl(), {h: 10, s: 30, l: 25});
assert.deepEqual(Color({hue: 10, saturation: 30, value: 25}).hsv(), {h: 10, s: 30, v: 25});
assert.deepEqual(Color({cyan: 10, magenta: 30, yellow: 25, black: 10}).cmyk(), {c: 10, m: 30, y: 25, k: 10});

// setters
assert.deepEqual(Color().rgb(10, 30, 25).rgb(), {r: 10, g: 30, b: 25});
assert.deepEqual(Color().rgb(10, 30, 25, 0.4).rgb(), {r: 10, g: 30, b: 25, a: 0.4});
assert.deepEqual(Color().rgb([10, 30, 25]).rgb(), {r: 10, g: 30, b: 25});
assert.deepEqual(Color().rgb([10, 30, 25, 0.4]).rgb(), {r: 10, g: 30, b: 25, a: 0.4});
assert.deepEqual(Color().rgb({r: 10, g: 30, b: 25}).rgb(), {r: 10, g: 30, b: 25});
assert.deepEqual(Color().rgb({r: 10, g: 30, b: 25, a: 0.4}).rgb(), {r: 10, g: 30, b: 25, a: 0.4});
assert.deepEqual(Color().rgb({red: 10, green: 30, blue: 25}).rgb(), {r: 10, g: 30, b: 25});
assert.deepEqual(Color().rgb({red: 10, green: 30, blue: 25, alpha: 0.4}).rgb(), {r: 10, g: 30, b: 25, a: 0.4});

assert.deepEqual(Color().hsl([360, 10, 10]).hsl(), {h: 360, s: 10, l: 10});
assert.deepEqual(Color().hsv([360, 10, 10]).hsv(), {h: 360, s: 10, v: 10});
assert.deepEqual(Color().cmyk([10, 10, 10, 10]).cmyk(), {c: 10, m: 10, y: 10, k: 10});


// translations
assert.deepEqual(Color().rgb(10, 30, 25).rgb(), {r: 10, g: 30, b: 25});
assert.deepEqual(Color().rgb(10, 30, 25).hsl(), {h: 165, s: 50, l: 8});
assert.deepEqual(Color().rgb(10, 30, 25).hsv(), {h: 165, s: 67, v: 12});
assert.deepEqual(Color().rgb(10, 30, 25).cmyk(), {c: 67, m: 0, y: 17, k: 88});

// Array getters
assert.deepEqual(Color({r: 10, g: 20, b: 30}).rgbArray(), [10, 20, 30]);
assert.deepEqual(Color({h: 10, s: 20, l: 30}).hslArray(), [10, 20, 30]);
assert.deepEqual(Color({h: 10, s: 20, v: 30}).hsvArray(), [10, 20, 30]);
assert.deepEqual(Color({c: 10, m: 20, y: 30, k: 40}).cmykArray(), [10, 20, 30, 40]);

// Channel getters/setters
assert.equal(Color({r: 10, g: 20, b: 30, a: 0.4}).alpha(), 0.4);
assert.equal(Color({r: 10, g: 20, b: 30, a: 0.4}).alpha(0.7).alpha(), 0.7);
assert.equal(Color({r: 10, g: 20, b: 30}).red(), 10);
assert.equal(Color({r: 10, g: 20, b: 30}).red(100).red(), 100);
assert.equal(Color({r: 10, g: 20, b: 30}).green(), 20);
assert.equal(Color({r: 10, g: 20, b: 30}).green(200).green(), 200);
assert.equal(Color({r: 10, g: 20, b: 30}).blue(), 30);
assert.equal(Color({r: 10, g: 20, b: 30}).blue(60).blue(), 60);
assert.equal(Color({h: 10, s: 20, l: 30}).hue(), 10);
assert.equal(Color({h: 10, s: 20, l: 30}).hue(100).hue(), 100);

// Translate with channel setters
assert.deepEqual(Color({r: 0, g: 0, b: 0}).lightness(50).hsl(), {h: 0, s: 0, l: 50});
assert.deepEqual(Color({r: 0, g: 0, b: 0}).red(50).green(50).hsv(), {h: 60, s: 100, v: 20});

// CSS String getters
assert.equal(Color("rgb(10, 30, 25)").hexString(), "#0A1E19")
assert.equal(Color("rgb(10, 30, 25)").rgbString(), "rgb(10, 30, 25)")
assert.equal(Color("rgb(10, 30, 25, 0.4)").rgbString(), "rgba(10, 30, 25, 0.4)")
assert.equal(Color("rgb(10, 30, 25)").percentString(), "rgb(4%, 12%, 10%)")
assert.equal(Color("rgb(10, 30, 25, 0.3)").percentString(), "rgba(4%, 12%, 10%, 0.3)")
assert.equal(Color("rgb(10, 30, 25)").hslString(), "hsl(165, 50%, 8%)")
assert.equal(Color("rgb(10, 30, 25, 0.3)").hslString(), "hsla(165, 50%, 8%, 0.3)")
assert.equal(Color("rgb(0, 0, 255)").keyword(), "blue")
assert.strictEqual(Color("rgb(10, 30, 25)").keyword(), undefined)


// Manipulators
assert.deepEqual(Color({r: 67, g: 122, b: 134}).greyscale().rgb(), {r: 107, g: 107, b: 107});
assert.deepEqual(Color({r: 67, g: 122, b: 134}).negate().rgb(), {r: 188, g: 133, b: 121});
assert.deepEqual(Color({h: 100, s: 50, l: 60}).lighten(0.5).hsl(), {"h": 100,"s": 50,"l": 90});
assert.deepEqual(Color({h: 100, s: 50, l: 60}).darken(0.5).hsl(), {"h": 100,"s": 50,"l": 30});