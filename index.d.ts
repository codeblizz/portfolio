

declare module "colorthief" {
    class ColorThief {
        getColor(img: HTMLImageElement | null): number[];
        getPalette(img: HTMLImageElement | null, colorCount?: number): number[][];
    }
    export default ColorThief;
}