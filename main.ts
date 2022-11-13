for (let x = 0; x <= 16; x++) {
    for (let y = 0; y <= 16; y++) {
        tileUtil.coverTile(tiles.getTileLocation(x, y), assets.tile`transparency16`)
    }
}
