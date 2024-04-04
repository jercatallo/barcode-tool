import JsBarcode from 'jsbarcode';

type BarcodeOptions = {
    format?: string;
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

    // Generate barcode with merged options
    JsBarcode(`#${elementId}`, value, options);
};
