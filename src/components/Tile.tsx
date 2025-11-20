import React from "react";

type TileProps = {
    title?: string;
    children?: React.ReactNode;
};

/**
 * Main display box used to show content when a nav item is selected.
 *
 * Usage:
 * <Tile title="Dashboard">
 *   ...content...
 * </Tile>
 */
const Tile: React.FC<TileProps> = ({ title, children }) => {
    return (
        <div
            aria-label={title ?? "tile"}
            className='h-90 gap-6 p-5 h-auto border-solid rounded-lg shadow-sm bg-white'
        >
            <div>{children}</div>
        </div>
    );
};

export default Tile;
