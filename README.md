### barcode-tool

`barcode-tool` is a lightweight npm package that utilizes the Barcode Detection API to enable barcode scanning directly in web browsers. Easily integrate barcode scanning functionality into your web applications for inventory management, product identification, and more.

#### Supported Barcode Formats

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


#### Installation

You can install the `barcode-tool` via npm:

```bash
npm install barcode-tool
```


#### Usage

<strong>detectBarcode </strong> 
- method for getting the value in the provided barcode image.

##### Parameters
Name | Type | Description
-------|-------------------|----
`image` | HTMLElement <br>Blob<br> HTMLCanvasElement<br> HTMLImageElement<br> HTMLVideoElement<br> ImageBitmap<br> ImageData<br> SVGImageElement <br>  VideoFrame <br> OffscreenCanvas |   The image containing the barcode.
`formats` | string[] (optional) | 	Optional array of barcode formats to detect.

 
##### Sample Usage
```
import { detectBarcode } from 'barcode-tool';

const imageElement = document.getElementById('barcode-image');

// Specify optional formats to detect
const formats = ['ean_13', 'qr_code'];

try {
    const barcodes = await detectBarcode({ image: imageElement, formats });
    console.log('Detected Barcodes:', barcodes);
} catch (error) {
    console.error('Error detecting barcodes:', error.message);
}
```



<strong>getSupportedFormats </strong> 
- method that specify all of the barcode formats that are available for detection.

##### Sample Usage
```
import { getSupportedFormats } from 'barcode-tool';

try {
    const supportedFormats = await getSupportedFormats();
    console.log('Supported Formats:', supportedFormats);
} catch (error) {
    console.error('Error getting supported formats:', error.message);
}
```

#### Using Web APIs

This package utilizes the Barcode Detection API provided by modern web browsers to perform barcode scanning directly in the browser environment. It's important to note the following regarding the use of web APIs:

- **Compliance with Terms of Service**: Ensure that your usage of web APIs, including the Barcode Detection API, complies with the terms of service provided by the respective browser vendors (e.g., Google, Mozilla). Review and adhere to any usage restrictions or requirements specified in the terms of service.

- **Official Documentation**: Rely on the official documentation provided by the browser vendors for implementing and using their APIs. This ensures that you're using the APIs correctly and in accordance with their intended usage.

- **Attribution**: If required by the terms of service or if you want to give credit to the browser vendors, include proper attribution in your documentation or README file. This shows transparency and respect for the API providers.

- **Stay Updated**: Keep track of any updates or changes to the APIs by regularly reviewing the official documentation. This helps ensure that your package remains compliant with any changes made by the API providers.

For more information on using web APIs and compliance with terms of service, refer to the documentation provided by the respective browser vendors.
