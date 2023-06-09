declare module foundry {
    module data {
        interface SceneSource {
            _id: string;
            name: string;

            // Navigation
            active: boolean;
            navigation: boolean;
            navOrder: number;
            navName: string;

            // Canvas Dimensions
            img: VideoFilePath;
            foreground: VideoFilePath;
            thumb: ImageFilePath;
            width: number;
            height: number;
            padding: number;
            initial: {
                x: number;
                y: number;
                scale: number;
            };

            backgroundColor: HexColorString;

            grid: GridData;

            shiftX: number;
            shiftY: number;

            // Vision and Lighting Configuration
            tokenVision: boolean;
            fogExploration: boolean;
            fogReset: string;
            globalLight: boolean;
            globalLightThreshold: number;
            hasGlobalThreshold: boolean;
            darkness: number;

            // Embedded Collections
            drawings: DrawingSource[];
            tokens: TokenSource[];
            lights: AmbientLightSource[];
            notes: NoteSource[];
            sounds: AmbientSoundSource[];
            templates: MeasuredTemplateSource[];
            tiles: TileSource[];
            walls: WallSource[];

            // Linked Documents
            playlist: PlaylistSource | null;
            playlistSound: PlaylistSoundSource | null;
            journal: documents.JournalEntrySource | null;
            weather: string;

            // Permissions
            folder: string | null;
            sort: number;
            ownership: Record<string, DocumentOwnershipLevel>;
            flags: Record<string, Record<string, unknown>>;
        }

        interface GridData {
            /** The type of grid, a number from CONST.GRID_TYPES. */
            type: GridType;
            /** The grid size which represents the width (or height) of a single grid space. */
            size: number;
            /** A string representing the color used to render the grid lines. */
            color: HexColorString;
            /** A number between 0 and 1 for the opacity of the grid lines. */
            alpha: number;
            /** The number of distance units which are represented by a single grid space. */
            distance: number;
            /** A label for the units of measure which are used for grid distance. */
            units: string;
        }

        class SceneData<
            TDocument extends documents.BaseScene = documents.BaseScene
        > extends abstract.DocumentData<TDocument> {
            static override defineSchema(): abstract.DocumentSchema;

            // Linked Documents
            playlist: documents.BasePlaylist | null;
            playlistSound: documents.BasePlaylistSound | null;
            journal: documents.BaseJournalEntry | null;
        }

        interface SceneData extends Omit<SceneSource, "flags" | "tokens" | "playlist" | "playlistSound" | "journal"> {
            _source: SceneSource;
        }
    }
}
