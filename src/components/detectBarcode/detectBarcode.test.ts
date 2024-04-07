import { detectBarcode, DetectBarcodeParams, Barcode } from './detectBarcode'; // Import the function and types from your module

describe('detectBarcode', () => {
    it('should detect barcodes', async() => {
        // Mock BarcodeDetector class
        class MockBarcodeDetector {
            async detect(): Promise<any[]> {
                // Mock implementation
                return [
                    { format: 'code128', rawValue: '123456789' },
                    { format: 'qr', rawValue: 'https://example.com' },
                ];
            }
        }

        // Assign the mock implementation to window
        (window as any).BarcodeDetector = MockBarcodeDetector;

        const image = document.createElement('img');
        const formats = ['code128', 'qr'];
        const params: DetectBarcodeParams = { image, formats };

        const barcodes: Barcode[] = await detectBarcode(params);

        expect(barcodes).toHaveLength(2);
        expect(barcodes[0].format).toBe('code128');
        expect(barcodes[0].rawValue).toBe('123456789');
        expect(barcodes[1].format).toBe('qr');
        expect(barcodes[1].rawValue).toBe('https://example.com');
    });

    it('should throw an error if Barcode Detection API is not supported', async() => {
        // Mocking BarcodeDetector not supported in window
        delete (window as any).BarcodeDetector;

        const image = document.createElement('img');
        const formats = ['code128', 'qr'];
        const params: DetectBarcodeParams = { image, formats };

        await expect(detectBarcode(params)).rejects.toThrow('Barcode Detection API is not supported in this browser');
    });

    it('should throw an error if image property is not provided', async() => {
        const formats = ['code128', 'qr'];
        const params: DetectBarcodeParams = { image: undefined, formats };

        await expect(detectBarcode(params)).rejects.toThrow('image property is not provided');
    });
});
