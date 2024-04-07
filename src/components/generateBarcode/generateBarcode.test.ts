import JsBarcode from 'jsbarcode';
import { generateBarcode } from './generateBarcode';

// Mocking JsBarcode library
jest.mock('jsbarcode');

describe('generateBarcode', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call JsBarcode with correct arguments', () => {
        const payload = {
            elementId: 'barcodeElement',
            value: '1234567890',
            options: {
                format: 'CODE128',
                width: 2,
                height: 100,
                displayValue: true,
            },
        };

        generateBarcode(payload);

        expect(JsBarcode).toHaveBeenCalledWith('#barcodeElement', '1234567890', {
            format: 'CODE128',
            width: 2,
            height: 100,
            displayValue: true,
        });
    });

    it('should call JsBarcode with default options when options are not provided', () => {
        const payload = {
            elementId: 'barcodeElement',
            value: '1234567890',
        };

        generateBarcode(payload);

        expect(JsBarcode).toHaveBeenCalledWith('#barcodeElement', '1234567890', {});
    });

    it('should call JsBarcode with only required arguments when options are empty', () => {
        const payload = {
            elementId: 'barcodeElement',
            value: '1234567890',
            options: {},
        };

        generateBarcode(payload);

        expect(JsBarcode).toHaveBeenCalledWith('#barcodeElement', '1234567890', {});
    });

    it('should throw an error when the barcode format is not supported', () => {
        const payload = {
            elementId: 'barcodeElement',
            value: '1234567890',
            options: {
                format: 'UNSUPPORTED_FORMAT', // Choose an unsupported format for testing
            },
        };

        expect(() => generateBarcode(payload)).toThrowError('Unsupported barcode format: UNSUPPORTED_FORMAT');
    });
});
