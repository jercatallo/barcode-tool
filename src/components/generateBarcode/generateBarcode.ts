import JsBarcode from 'jsbarcode';
import { supportedBarcodeGeneratorFormats } from '../../constants/barcodes';

type SupportedBarcodeFormats = typeof supportedBarcodeGeneratorFormats[number];

type BarcodeOptions = {
    format?: SupportedBarcodeFormats;
    width?: number;
    height?: number;
    displayValue?: boolean
    text?: string;
    fontOptions?: string;
    font?: string;
    textAlign?: string;
    textPosition?: string;
    textMargin?: number;
    fontSize?: number;
    background?: string;
    lineColor?: string;
    margin?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number
    marginRight?: number;
    valid?: (valid: any) => void;
};

export const generateBarcode = (payload: { elementId: string; value: string; options?: BarcodeOptions }) => {
    const { elementId, value, options } = payload;
    if (!elementId) {
        throw new Error('image property is not provided');
    }

    if (!value) {
        throw new Error('value property is not provided');
    }

    if (options && options.format && !supportedBarcodeGeneratorFormats.includes(options.format)) {
        throw new Error(`Unsupported barcode format: ${options.format}`);
    }
    
    // Ensure options is always an object
    const mergedOptions: BarcodeOptions = options || {};

    // Generate barcode with merged options
    JsBarcode(`#${elementId}`, value, mergedOptions);
};
