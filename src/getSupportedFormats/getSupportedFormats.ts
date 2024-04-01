export async function getSupportedFormats(): Promise<string[]> {
    try {
        if ('BarcodeDetector' in window) {
            return await (window as any).BarcodeDetector.getSupportedFormats();
        } 

        throw new Error('Barcode Detection API is not supported in this browser');
        
    } catch (error: any) {
        console.error('Error getting supported formats:', error.message);
        throw error;
    }
}
