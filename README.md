# deviceDetector
Device detection mechanism will replace the body dev-<<device>> class by using javascript. 

### Detection mechanism depends on window.matchMedia
`window.matchMedia`

### Currently there is 5 type of device 
-------
- [mobile]
- [potrait]
- [landscape]
- [desktop]
- [wide]

```js
var size = {
		w: 'wide',
    d: 'desktop',
    l: 'landscape',
    p: 'potrait',
    m: 'mobile'
};

if (window.matchMedia("(max-width: 380px)").matches) {
		device = size.m;
	} else if (window.matchMedia("(max-width: 767px)").matches) {
		device = size.m;
	} else if (window.matchMedia("(min-width: 768px) and (max-width: 979px)").matches) {
		device = size.p;
	} else if (window.matchMedia("(min-width: 980px) and (max-width: 1279px)").matches) {
		device = size.l;
	} else if (window.matchMedia("(min-width:1280px) and (max-width:1800px)").matches) {
		device = size.d;
	} else {
		device = size.w;//extra large
	}
```
Usage
-----

`dev-` is a body class in html file and replacement mechanism will replace the `dev-<<currentdevice>>` by using jQuery attr method.

Why?
-----
You don't ever need to worry about other body classes detector will only update this context  `/(^|\s)dev-\S+/g` 

```js
  bodyClass.replace(/(^|\s)dev-\S+/g,'dev-'+ device);
```
