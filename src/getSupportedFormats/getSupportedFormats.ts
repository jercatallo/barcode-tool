type BarcodeFormats = {
    detector: string[];
    generator: string[];
};

export async function getSupportedFormats(): Promise<BarcodeFormats> {
    try {
        const types: BarcodeFormats = {
            detector: [],
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
