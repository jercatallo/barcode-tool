export type DetectBarcodeParams = {
    image: HTMLElement | Blob | HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | ImageBitmap | ImageData | SVGImageElement | undefined;
    formats?: string[];
};

export type Barcode = {
    format: string;
    rawValue: string;
};

export async function detectBarcode({ image, formats }: DetectBarcodeParams): Promise<Barcode[]> {
    if (!image) {
        throw new Error('image property is not provided');
    }

    if ('BarcodeDetector' in window) {
        const barcodeDetector = new (window as any).BarcodeDetector({
            formats,
        });
        const barcodes = await barcodeDetector.detect(image);
        return barcodes.map((barcode: any) => ({
            format: barcode.format,
            rawValue: barcode.rawValue,
        }));
    } 
    throw new Error('Barcode Detection API is not supported in this browser');
    
}

