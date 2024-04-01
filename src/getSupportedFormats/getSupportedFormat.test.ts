import { getSupportedFormats } from './getSupportedFormats';

// Mock the BarcodeDetector with a static method
const mockBarcodeDetector = {
    getSupportedFormats: jest.fn().mockResolvedValue(['ean_13', 'qr_code']),
};

describe('getSupportedFormats', () => {
    it('should return an array of supported formats when BarcodeDetector is supported', async() => {
        // Mock BarcodeDetector API
        (window as any).BarcodeDetector = mockBarcodeDetector;

        const supportedFormats = await getSupportedFormats();
        expect(supportedFormats).toEqual(['ean_13', 'qr_code']);
    });

    it('should throw an error when BarcodeDetector is not supported', async() => {
        delete (window as any).BarcodeDetector;

        await expect(getSupportedFormats()).rejects.toThrowError('Barcode Detection API is not supported in this browser');
    });
});
