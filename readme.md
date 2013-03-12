#CSSfilter.js

##About
CSSfilter.js helps you, adding CSS filters to Images (or other Elements)

##Use
``` document.getElementById('id').cssfilter('blur', 5); ```  adds a 5px blur effect   
``` document.getElementById('id').cssfilter('bright', 50); ```  make the element 50% brighter   
``` ... ```   
``` document.getElementById('id').cssfilter('hue', 90); ```  changes the hue rotation to 90°   
``` document.getElementById('id').cssfilter('sat', 50); ```  changes the saturation to 50%   

``` document.getElementById('id').cssfilter('render'); ```  adds the styles to the element   
``` document.getElementById('id').cssfilter('reset'); ```  delets all configs   

these filters are available: ```blur```, ```brightness```, ```contrast```, ```grayscale```, ```hue-rotate```, ```saturate```, ```sepia```, ```invert```, ```opacity```   
you can use .cssfilter() on elements and on itself:   
```document.getElementById('id').cssfilter('blur', 5).cssfilter('hue', 90).cssfilter('render')```

##License
Copyright (c) 2013 Simon Waldherr
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
