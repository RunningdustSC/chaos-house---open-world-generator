// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "NE Road":
            case "tile1":return tile1;
            case "SW Road":
            case "tile2":return tile2;
            case "SE Road":
            case "tile4":return tile4;
            case "NW Road":
            case "tile3":return tile3;
            case "Vertical Road":
            case "tile5":return tile5;
            case "Horizontal Road":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
