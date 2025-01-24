# webos
An open source, modern, lightweight and customizable css/javascript library to manage the DOM as a MacOS-like window
manager. This library is based on <a href="https://github.com/nextapps-de/winbox/tree/master">WinBox.js</a>.

WebOS is meant to work on desktop with a minimum resolution of 1280×720px. Do not post issue for display in smaller resolution.

<a target="_blank" href="https://github.com/nextapps-de/winbox/blob/master/LICENSE.md"><img
        src="https://img.shields.io/npm/l/winbox.svg"></a>

#### Compatibility
<div style="width: 100%; text-align: center;">
    <table class="bc-table bc-table-web">
        <thead>
            <tr class="bc-platforms">
                <td></td>
                <th class="bc-platform bc-platform-desktop" colspan="5" title="desktop"><span
                        class="icon icon-desktop"></span><span class="visually-hidden">desktop</span></th>
            </tr>
            <tr class="bc-browsers">
                <td></td>
                <th class="bc-browser bc-browser-chrome">
                    <div class="bc-head-txt-label bc-head-icon-chrome">Chrome</div>
                    <div class="bc-head-icon-symbol icon icon-chrome"></div>
                </th>
                <th class="bc-browser bc-browser-edge">
                    <div class="bc-head-txt-label bc-head-icon-edge">Edge</div>
                    <div class="bc-head-icon-symbol icon icon-edge"></div>
                </th>
                <th class="bc-browser bc-browser-firefox">
                    <div class="bc-head-txt-label bc-head-icon-firefox">Firefox</div>
                    <div class="bc-head-icon-symbol icon icon-simple-firefox"></div>
                </th>
                <th class="bc-browser bc-browser-opera">
                    <div class="bc-head-txt-label bc-head-icon-opera">Opera</div>
                    <div class="bc-head-icon-symbol icon icon-opera"></div>
                </th>
                <th class="bc-browser bc-browser-safari">
                    <div class="bc-head-txt-label bc-head-icon-safari">Safari</div>
                    <div class="bc-head-icon-symbol icon icon-safari"></div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="bc-feature bc-feature-depth-0" scope="row">
                    <div class="bc-table-row-header"><code>WebOS</code></div>
                </th>
                <td class="bc-support bc-browser-chrome bc-supports-yes bc-has-history" aria-expanded="false">
                    <div class="bcd-cell-text-wrapper"><div class="bcd-cell-text-copy"><span class="bc-browser-name">Chrome >= 106.0</span></div>
                </td>
                <td class="bc-support bc-browser-edge bc-supports-yes bc-has-history" aria-expanded="false">
                    <div class="bcd-cell-text-wrapper"><div class="bcd-cell-text-copy"><span class="bc-browser-name">Edge >= 116.0</span></div>
                </td>
                <td class="bc-support bc-browser-firefox bc-supports-yes bc-has-history" aria-expanded="false">
                    <div class="bcd-cell-text-wrapper"><div class="bcd-cell-text-copy"><span class="bc-browser-name">Firefox >= 134.0</span></div>
                </td>
                <td class="bc-support bc-browser-opera bc-supports-yes bc-has-history" aria-expanded="false">
                    <div class="bcd-cell-text-wrapper"><div class="bcd-cell-text-copy"><span class="bc-browser-name">Opera >= 115.0</span></div>
                </td>
                <td class="bc-support bc-browser-safari bc-supports-yes bc-has-history" aria-expanded="false">
                    <div class="bcd-cell-text-wrapper"><div class="bcd-cell-text-copy"><span class="bc-browser-name">Safari >= 17.4</span></div>
                </td>
            </tr>
        </tbody>
    </table>
</div>




## Demo

The demo is available <a href="https://oceansolutions.fr/webos/demo/index.html" target="_blank">here</a>. The code of the demo is available in the ```demo``` directory of the WebOS repository. No support is provided for the demo.

Thanks to <a href="https://oceansolutions.fr" target="_blank">oceansolutions.fr</a> for the hosting of the demo.

It demonstrates the following features:
 - dock
 - menubar
 - pad
 - singe-window apps
 - external website embeding (provided the target website has a compatible <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors" target="_blank">frame-ancestors</a> policy.)
 - new tab URL opening

## Getting Started

### Get the latest stable build

<table style="width: 100%;">
    <tr>
        <td colspan="2">
            <b><u>Non-Bundle:</u></b> (js and css are separated, js includes icons as base64)
        </td>
    </tr>
    <tr>
        <td>winbox.min.js</td>
        <td><a href="https://raw.githubusercontent.com/oceansolutionsfr/webos/refs/heads/main/dist/latest/webos.min.js" target="_blank">Download</a></td>
    </tr>
    <tr>
        <td>winbox.min.css</td>
        <td><a href="https://raw.githubusercontent.com/oceansolutionsfr/webos/refs/heads/main/dist/latest/webos.min.css" target="_blank">Download</a></td>
    </tr>
    <tr>
        <td colspan="2">
           <b><u>Sources:</u></b>  (js and css are separated, js includes icons as base64)
        </td>
    </tr>
    <tr>
        <td>ES6 Modules</td>
        <td><a href="https://raw.githubusercontent.com/oceansolutionsfr/webos/refs/heads/main/src/js/webos.css" target="_blank">Download</a></td>
    </tr>
    <tr>
        <td>CSS File (source)</td>
        <td><a href="https://raw.githubusercontent.com/oceansolutionsfr/webos/refs/heads/main/src/css/webos.css" target="_blank">Download</a></td>
    </tr>
</table>


### Include in your HTML

> The use of WebOS requires the <a href="https://github.com/nextapps-de/winbox">winbox.js</a> library (for compatibility reasons, the use of ```lib/winbox.bundle.js``` in highly recommanded), the WebOS CSS and JS latest distribution release.

A best practice is to load the winbox library as async and import the WebOS library:
```html
<html>
<head>
    <link rel="stylesheet" href="./css/webos.min.css">
    <link rel="preload" href="./js/winbox.bundle.js" as="script">
</head>
<body>
    <!--    
    HTML CONTENT
    -->

    <!-- BOTTOM OF BODY -->
    <script src="./js/winbox.bundle.js" async></script>
    
    <!-- EMEBED OR EXTERNAL CUSTOM SCRIPTS -->
    <script type="module" defer>
        import {WebOS} from "./js/webos.min.js"

        // YOUR CODE HERE

    </script>
</body>
</html>
```


## References

### repository structure
the WebOS repository has the following structure:
```

├── cli/        // node.js CLI utils (versioning, packaging)
├── dist/       // distribution version
├── demo/       // example HTML page using WebOS
├── lib/        // third party dependencies
└── src/        // PHP 8.3 Rest APIs entry point source code
    ├── css/    // WebOS css styles
    └── js/     // WebOS javascript sources
```


### JavaScript References


# Support WebOS

sponsor on Paypal: <a href="https://www.paypal.com/ncp/payment/3DY454BLJ8TVW">donate</a>