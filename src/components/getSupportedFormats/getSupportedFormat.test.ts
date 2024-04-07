import { getSupportedFormats } from './getSupportedFormats';

// Mock the BarcodeDetector with a static method
const mockBarcodeDetector = {
    getSupportedFormats: jest.fn().mockResolvedValue(['ean_13', 'qr_code']),
};

describe('getSupportedFormats', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return an array of supported formats when BarcodeDetector is supported', async() => {
        // Mock BarcodeDetector API
        (window as any).BarcodeDetector = mockBarcodeDetector;

        const supportedFormats = await getSupportedFormats();
        expect(supportedFormats).toEqual({
            detector: ['ean_13', 'qr_code'],
            generator: [
                "CODE39",
                "CODE128", "CODE128A", "CODE128B", "CODE128C",
                "EAN13", "EAN8", "EAN5", "EAN2", "UPC", "UPCE",
                "ITF14",
                "ITF",
                "MSI", "MSI10", "MSI11", "MSI1010", "MSI1110",
                "pharmacode",
                "codabar",
                "GenericBarcode",
            ],
        });
    });

    it('should return an empty array for detector formats when BarcodeDetector is not supported', async() => {
        delete (window as any).BarcodeDetector;

        const supportedFormats = await getSupportedFormats();
        expect(supportedFormats.detector).toEqual([]);
    });

    it('should return generator formats even when BarcodeDetector is not supported', async() => {
        delete (window as any).BarcodeDetector;

        const supportedFormats = await getSupportedFormats();
        expect(supportedFormats.generator).toEqual([
            "CODE39",
            "CODE128", "CODE128A", "CODE128B", "CODE128C",
            "EAN13", "EAN8", "EAN5", "EAN2", "UPC", "UPCE",
            "ITF14",
            "ITF",
            "MSI", "MSI10", "MSI11", "MSI1010", "MSI1110",
            "pharmacode",
            "codabar",
            "GenericBarcode",
        ]);
    });

    it('should throw an error when BarcodeDetector throws an error', async() => {
        // Mock BarcodeDetector API to throw an error
        (window as any).BarcodeDetector = {
            getSupportedFormats: jest.fn().mockRejectedValue(new Error('Failed to get supported formats')),
        };

        await expect(getSupportedFormats()).rejects.toThrowError('Failed to get supported formats');
    });
});
