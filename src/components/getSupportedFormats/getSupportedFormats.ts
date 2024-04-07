import { supportedBarcodeGeneratorFormats } from "../../constants/barcodes";

type BarcodeFormats = {
    detector: string[];
    generator: string[];
};

export async function getSupportedFormats(): Promise<BarcodeFormats> {
    try {
        const types: BarcodeFormats = {
            detector: [],
            generator: supportedBarcodeGeneratorFormats,
        };

        // Check if BarcodeDetector is supported in the current environment
        if ('BarcodeDetector' in window) {
            // Retrieve supported formats using BarcodeDetector API
            const detector = (window as any).BarcodeDetector;
            if (detector && typeof detector.getSupportedFormats === 'function') {
                types.detector = await detector.getSupportedFormats();
            }
        }

        return types;
        
    } catch (error: any) {
        console.error('Error getting supported formats:', error.message);
        throw error;
    }
}
