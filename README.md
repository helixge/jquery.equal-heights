# jquery.equal-heights
jQuery plugin for making elements equal height. Bu default UI will be updated at time of the execution and addtitionaly on the following events:
* document.ready
* window.load
* window.resize
* load event of every image file found under the selected items
* load event of additional image files gives thorugh **options.imageSelector** property

## Example
$('.row .col-md4').equalHeights({ /* options and callbacks */});

## Options
The following options can be supplied as arguments

### extraHeight
Numeric value.
Will add additional amount of extra heights in pixels after setting the height
Default value is **0**.

### useOuterHeight
Boolean value.
When set to true will use outerHeight() to determine content height. When set to false will use height().
Default value is **false**.

### callOnce
Boolean value.
When set to true heights will be equalized only once: Document.Ready, Window.Load and Window.Resize events will not trigger the UI update.
Default value is **false**.

### imageSelector
String value.
Will add an **onload** event handler on the selector and trigger the heights update. It isuseful when heigts need to be retriggered after ceratin images are loaded that are outside of the main selector.
Default value is **null**

## Callbacks
### processed
Function is executed after each UI update.
No input parameters are supplied.
No return values is expected

### doProcessing
Function is executed before each UI update.
No input parameters are supplied
Expected return type is boolean. When true is returned, UI will be processed. When false is returned UI will not be processed. This callbacck is useful when you need to conditionally set equal heights (ex. based on media query or screen resolution)


## Functions
### process
Will instruct plugin to recalculate heights immediately.
#### example:
```
var eh = $('your-element-selector').equalHeights();
eh.process();
```
