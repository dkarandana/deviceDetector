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

Usage
-----

`dev-` is a body class in html file and replacement mechanism will replace the `dev-<<currentdevice>>` by using jQuery attr method.

You don't ever need to worry about other body classes detector will only update this context  `/(^|\s)dev-\S+/g` 

```js
  bodyClass.replace(/(^|\s)dev-\S+/g,'dev-'+ device);
```
