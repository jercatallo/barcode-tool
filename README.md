## barcode-tool

`barcode-tool` is a lightweight npm package that utilizes the Barcode Detection API to enable barcode scanning directly in web browsers. Easily integrate barcode scanning functionality into your web applications for inventory management, product identification, and more.

## Supported Barcode Formats

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


## Installation

You can install the `barcode-tool` via npm:

```bash
npm install barcode-tool
```

or importing the package with script tag via JSDelivr CDN:
```html
<head>
    <script src="https://cdn.jsdelivr.net/npm/barcode-tool@1.0.3/dist/cjs/index.js"></script>
</head>
```

## Methods 
<strong>detectBarcode </strong> 
- method for getting the value in the provided barcode image.

##### Parameters
Name | Type | Description
-------|-------------------|----
`image` | HTMLElement <br>Blob<br> HTMLCanvasElement<br> HTMLImageElement<br> HTMLVideoElement<br> ImageBitmap<br> ImageData<br> SVGImageElement <br>  VideoFrame <br> OffscreenCanvas |   The image containing the barcode.
`formats` | string[] (optional) | 	Optional array of barcode formats to detect.

<strong>getSupportedFormats </strong> 
- method that specify all of the barcode formats that are available for detection.

## Sample usage with package manager/bundler

 
##### Sample Usage
```javascript
import { detectBarcode } from 'barcode-tool';

const handleDetectBarcode = async () => {
    try {
        const imageElement = document.getElementById('barcode-image');

         // Specify optional formats to detect
        const formats = ['ean_13', 'qr_code'];
        const barcodes = await detectBarcode({ image: imageElement, formats });
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

## Sample usage with script tag
```html
<head>
    <script src="https://cdn.jsdelivr.net/npm/barcode-tool@1.0.3/dist/cjs/index.js"></script>
</head>


<img id="imageEl" src="your-image-element.jpg" />

<script>
    const handleDetectBarcode = async () => {
        try {
            const imageElement = document.getElementById('imageEl');
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
    window.onload = function () {
        // Document is ready
        console.log('Document is ready');
        getBarcodes();
        handleGetSupportedFormats();
    };
</script>
```

## Using Web APIs

This package utilizes the Barcode Detection API provided by modern web browsers to perform barcode scanning directly in the browser environment. It's important to note the following regarding the use of web APIs:

- **Compliance with Terms of Service**: Ensure that your usage of web APIs, including the Barcode Detection API, complies with the terms of service provided by the respective browser vendors (e.g., Google, Mozilla). Review and adhere to any usage restrictions or requirements specified in the terms of service.

- **Official Documentation**: Rely on the official documentation provided by the browser vendors for implementing and using their APIs. This ensures that you're using the APIs correctly and in accordance with their intended usage.

- **Attribution**: If required by the terms of service or if you want to give credit to the browser vendors, include proper attribution in your documentation or README file. This shows transparency and respect for the API providers.

- **Stay Updated**: Keep track of any updates or changes to the APIs by regularly reviewing the official documentation. This helps ensure that your package remains compliant with any changes made by the API providers.

For more information on using web APIs and compliance with terms of service, refer to the documentation provided by the respective browser vendors.

# License

See the [LICENSE](https://github.com/jercatallo/barcode-tool/blob/main/LICENSE) file

