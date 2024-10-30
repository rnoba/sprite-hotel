import { Vector2, Vector3 } from "./base.js";
const SPRITES = {
    tiles: [
        {
            start: new Vector2(0, 0),
            size: new Vector2(32, 32),
            offset: new Vector2(-16, -16)
        },
        {
            start: new Vector2(64, 0),
            size: new Vector2(16, 16),
            offset: new Vector2(-8, -8)
        },
        {
            start: new Vector2(64, 17),
            size: new Vector2(16, 24),
            offset: new Vector2(-8, -16)
        },
        {
            start: new Vector2(81, 0),
            size: new Vector2(32, 48),
            offset: new Vector2(-16, -32)
        },
        {
            start: new Vector2(114, 0),
            size: new Vector2(32, 32),
            offset: new Vector2(-16, -16)
        },
        {
            start: new Vector2(147, 0),
            size: new Vector2(32, 16),
            offset: new Vector2(-16, -1)
        },
        {
            start: new Vector2(147, 17),
            size: new Vector2(32, 16),
            offset: new Vector2(-16, -1)
        },
        {
            start: new Vector2(147, 34),
            size: new Vector2(32, 16),
            offset: new Vector2(-16, -1)
        },
        {
            start: new Vector2(0, 0),
            size: new Vector2(0, 0),
            offset: new Vector2(0, 0)
        },
        {
            start: new Vector2(131, 51),
            size: new Vector2(64, 32),
            offset: new Vector2(-32, -1)
        },
        // FIX
        {
            start: new Vector2(180, 0),
            size: new Vector2(48, 40),
            offset: new Vector2(-16, -16)
        },
        {
            start: new Vector2(229, 0),
            size: new Vector2(64, 48),
            offset: new Vector2(-32, -16)
        },
        {
            start: new Vector2(0, 80),
            size: new Vector2(32, 32),
            offset: new Vector2(-16, -20)
        },
        {
            start: new Vector2(32, 80),
            size: new Vector2(32, 32),
            offset: new Vector2(-16, -20)
        },
        {
            start: new Vector2(65, 80),
            size: new Vector2(32, 32),
            offset: new Vector2(-16, -16)
        },
    ],
    entities: [
        {
            start: new Vector2(33, 0),
            size: new Vector2(30, 31),
            offset: new Vector2(-16, -16)
        },
    ],
};
var ObjectKind;
(function (ObjectKind) {
    ObjectKind[ObjectKind["TILE"] = 0] = "TILE";
    ObjectKind[ObjectKind["ENTITY"] = 1] = "ENTITY";
    ObjectKind[ObjectKind["NONE"] = 2] = "NONE";
})(ObjectKind || (ObjectKind = {}));
const ObjectDefaultConfig = {
    position: new Vector3(0, 0, 0),
    sprite: SPRITES.tiles[0],
    kind: ObjectKind.TILE,
    label: "Tile",
    xy_span: new Vector2(1, 1),
    z_span: 1,
    can_stack: true,
    is_solid: true,
    snapping: {
        can_snap_top: (_) => true,
        can_snap_left: (_) => true,
        can_snap_right: (_) => true,
    }
};
const TILES = [
    Object.assign({}, ObjectDefaultConfig),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[4], z_span: 1, xy_span: new Vector2(1, 1) }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[5], z_span: 0.1, xy_span: new Vector2(1, 1), can_stack: true, is_solid: false, snapping: {
            can_snap_top: (_) => true,
            can_snap_left: (_) => false,
            can_snap_right: (_) => false,
        } }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[6], z_span: 0.1, xy_span: new Vector2(1, 1), can_stack: true, is_solid: false, snapping: {
            can_snap_top: (_) => true,
            can_snap_left: (_) => false,
            can_snap_right: (_) => false,
        } }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[7], z_span: 0.1, xy_span: new Vector2(1, 1), can_stack: true, is_solid: false, snapping: {
            can_snap_top: (_) => true,
            can_snap_left: (_) => false,
            can_snap_right: (_) => false,
        } }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[3], z_span: 2, xy_span: new Vector2(1, 1) }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[1], z_span: 0.5, xy_span: new Vector2(0.5, 0.5) }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[2], z_span: 1, xy_span: new Vector2(0.5, 0.5), snapping: {
            can_snap_top: (obj) => {
                //obj.position.z -= 0.1;
                //obj.position.x -= 0.1;
                return true;
            },
            can_snap_left: (_) => true,
            can_snap_right: (_) => true,
        } }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { position: new Vector3(0, 0, 0), sprite: SPRITES.tiles[8], kind: ObjectKind.NONE, xy_span: new Vector2(1, 1), z_span: 0.1, can_stack: false, is_solid: true, snapping: {
            can_snap_top: (_) => false,
            can_snap_left: (_) => false,
            can_snap_right: (_) => false,
        } }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[9], z_span: 0.1, xy_span: new Vector2(2, 2), can_stack: true, is_solid: false, snapping: {
            can_snap_top: (_) => true,
            can_snap_left: (_) => false,
            can_snap_right: (_) => false,
        } }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[10], z_span: 1, xy_span: new Vector2(2, 1), can_stack: true, is_solid: false, snapping: {
            can_snap_top: (_) => true,
            can_snap_left: (_) => false,
            can_snap_right: (_) => false,
        } }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[11], z_span: 1, xy_span: new Vector2(2, 2), can_stack: true, is_solid: false, snapping: {
            can_snap_top: (_) => true,
            can_snap_left: (_) => false,
            can_snap_right: (_) => false,
        } }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[12], z_span: 1, xy_span: new Vector2(0.5, 1), can_stack: true, is_solid: false, snapping: {
            can_snap_top: (_) => false,
            can_snap_left: (_) => false,
            can_snap_right: (_) => true,
        } }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[13], z_span: 1, xy_span: new Vector2(1, 0.5), can_stack: true, is_solid: false, snapping: {
            can_snap_top: (_) => false,
            can_snap_left: (_) => true,
            can_snap_right: (_) => false,
        } }),
    Object.assign(Object.assign({}, ObjectDefaultConfig), { sprite: SPRITES.tiles[14], z_span: 0.3, xy_span: new Vector2(1, 1), can_stack: true, is_solid: true, snapping: {
            can_snap_top: (_) => true,
            can_snap_left: (_) => false,
            can_snap_right: (_) => false,
        } }),
];
export { SPRITES, TILES, ObjectDefaultConfig, ObjectKind };
