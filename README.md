## barcode-tool

`barcode-tool` is a lightweight npm package that facilitates barcode generation and detection. It leverages the Barcode Detection API for barcode scanning directly in web browsers and provides an intuitive interface for generating various barcode formats. Seamlessly integrate barcode functionality into your web applications for tasks such as inventory management, product identification, and more.

## Supported Barcode Detector Formats

- aztec
- code_128
- code_39
- code_93
- codabar
- data_matrix
- ean_13
- ean_8
- itf
- pdf417
- qr_code
- upc_a
- upc_e
- unknown

## Supported Barcode Generator Formats
- CODE39
- CODE128
- CODE128A
- CODE128B
- CODE128C
- EAN13
- EAN8
- EAN5
- EAN2
- UPC
- UPCE
- ITF
- ITF14
- MSI10
- MSI11
- MSI1010
- MSI1110
- pharmacode
- codabar
- GenericBarcode

## Installation

You can install the `barcode-tool` via npm:

```bash
npm install barcode-tool
```

or via yarn:

```bash
yarn add barcode-tool
```

or importing the package with script tag via JSDelivr CDN:
```html
<head>
    <script src="https://cdn.jsdelivr.net/npm/barcode-tool@1.1.0/dist/cjs/index.js"></script>
</head>
```
    
Alternatively, you can import the package with a script tag using Unpkg CDN:
```html
<head>
    <script src="https://unpkg.com/barcode-tool@1.1.0/dist/cjs/index.js"></script>
</head>
```

## Methods 
#### detectBarcode
- Method for getting the value in the provided barcode image.

##### detectBarcode Parameters
Name | Type | Description
-------|-------------------|----
`payload` | Object | An object containing the following properties:
`image` | HTMLElement <br>Blob<br> HTMLCanvasElement<br> HTMLImageElement<br> HTMLVideoElement<br> ImageBitmap<br> ImageData<br> SVGImageElement |   The image containing the barcode.
`formats` | string[] (optional) | 	Optional array of barcode formats to detect.

<br/>

#### generateBarcode
- Method for generating barcode

##### generateBarcode Parameters
Name | Type | Description
-------|-------------------|----
`payload` | Object | An object containing the following properties:
`elementId` | string |   The image containing the barcode.
`value` | string | The value to encode in the barcode.
`options` | BarcodeOptions (optional) | Optional settings for customizing the appearance of the barcode.

<br/>

##### BarcodeOptions Parameter

| Name           | Type           | Description                                                |
|----------------|----------------|------------------------------------------------------------|
| `options.format`      | string (optional) | The format of the barcode. Default is auto.                |
| `options.width`       | number (optional) | The width of the barcode bars. Default is 2.               |
| `options.height`      | number (optional) | The height of the barcode bars. Default is 100.            |
| `options.displayValue`| boolean (optional)| Whether to display the value below the barcode. Default is true. |
| `options.text`        | string (optional) | Additional text to display below the barcode.             |
| `options.fontOptions` | string (optional) | Additional font options for the text below the barcode.   |
| `options.font`        | string (optional) | The font family for the text below the barcode. Default is monospace. |
| `options.textAlign`   | string (optional) | The alignment of the text below the barcode. Default is center. |
| `options.textPosition`| string (optional) | The position of the text below the barcode. Default is bottom. |
| `options.textMargin`  | number (optional) | The margin between the barcode and the text below it. Default is 2. |
| `options.fontSize`    | number (optional) | The font size for the text below the barcode. Default is 20. |
| `options.background`  | string (optional) | The background color of the barcode. Default is #ffffff.  |
| `options.lineColor`   | string (optional) | The color of the barcode bars. Default is #000000.        |
| `options.margin`      | number (optional) | The margin around the barcode. Default is 10.             |
| `options.marginTop`   | number (optional) | The top margin around the barcode.                        |
| `options.marginBottom`| number (optional) | The bottom margin around the barcode.                     |
| `options.marginLeft`  | number (optional) | The left margin around the barcode.                       |
| `options.marginRight` | number (optional) | The right margin around the barcode.                      |
| `options.valid`       | function (optional) | A callback function to validate the generated barcode.    |

<br/>

#### getSupportedFormats 
- Method that specify all of the barcode formats that are available for detection, and generation of barcodes.

## Sample usage with package manager/bundler

 
#### Sample Usage
```javascript
import { detectBarcode } from 'barcode-tool';

const handleDetectBarcode = async () => {
    try {
        const elementWithBarcode = document.getElementById('element-with-barcode');

         // Specify optional formats to detect
        const formats = ['ean_13', 'qr_code'];
        const barcodes = await detectBarcode({ image: elementWithBarcode, formats });
        console.log("handleDetectBarcode ~ barcodes:", barcodes)
    } catch (error) {
        console.error('Error on detecting barcodes:', error.message);
    }
}
```

```javascript
import { getSupportedFormats } from 'barcode-tool';

const handleGetSupportedFormats = async () => {
    try {
        const supportedFormats = await getSupportedFormats();
        console.log("handleGetSupportedFormats ~ supportedFormats:", supportedFormats)
    } catch (error) {
        console.log("handleGetSupportedFormats ~ error:", error)
    }
}

```

```javascript
import { generateBarcode } from 'barcode-tool';

const handleGenerateBarcode = () => {
    try {
        const payload = { elementId: 'barcode-container', value: 'your-barcode-value' };
        const options = { /* your BarcodeOptions here */ };
        generateBarcode({ ...payload, options });
    } catch (error) {
        console.error('Error generating barcode:', error.message);
    }
}

```

## Sample usage with script tag
```html
<head>
    <script src="https://cdn.jsdelivr.net/npm/barcode-tool@1.1.0/dist/cjs/index.js"></script>
</head>


<img id="element-with-barcode" src="your-barcode.jpg" />
<img id="barcode-container" src="" />

<script>
    const handleDetectBarcode = async () => {
        try {
            const elementWithBarcode = document.getElementById('element-with-barcode');

            // Specify optional formats to detect
            const formats = ['ean_13', 'qr_code'];
            const barcodes = await detectBarcode({ image: imageElement, formats });
            console.log("handleDetectBarcode ~ barcodes:", barcodes)
        } catch (error) {
            console.log("handleDetectBarcode ~ error:", error)
        }
    }

    const handleGetSupportedFormats = async () => {
        try {
            const supportedFormats = await getSupportedFormats();
            console.log("handleGetSupportedFormats ~ supportedFormats:", supportedFormats)
        } catch (error) {
            console.log("handleGetSupportedFormats ~ error:", error)
        }
    }

    const handleGenerateBarcode = () => {
        try {
            const payload = { elementId: 'barcode-container', value: 'your-barcode-value' };
            const options = { /* your BarcodeOptions here */ };
            generateBarcode({ ...payload, options });
        } catch (error) {
            console.error('Error generating barcode:', error.message);
        }
    }

    window.onload = function () {
        // Document is ready
        console.log('Document is ready');
        getBarcodes();
        handleGetSupportedFormats();
        handleGenerateBarcode();
    };
</script>
```

## Third-Party Softwares

barcode-tool is only made possible with the use and help of amazing open-source third-party softwares:

**Barcode Detection API**

**JsBarcode, [MIT](https://github.com/lindell/JsBarcode/blob/master/MIT-LICENSE.txt)**

* [JsBarcode](https://github.com/lindell/JsBarcode) Barcode generation library written in JavaScript that works in both the browser and on Node.js

# License

See the [LICENSE](https://github.com/jercatallo/barcode-tool/blob/main/LICENSE) file

