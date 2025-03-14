"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlaylistTables1710446400000 = void 0;
class CreatePlaylistTables1710446400000 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "playlists" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "user_id" uuid,
                CONSTRAINT "PK_playlists" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "playlist_materials" (
                "playlist_id" uuid NOT NULL,
                "material_id" uuid NOT NULL,
                CONSTRAINT "PK_playlist_materials" PRIMARY KEY ("playlist_id", "material_id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "playlists"
            ADD CONSTRAINT "FK_playlists_users"
            FOREIGN KEY ("user_id")
            REFERENCES "users"("id")
            ON DELETE CASCADE
            ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist_materials"
            ADD CONSTRAINT "FK_playlist_materials_playlists"
            FOREIGN KEY ("playlist_id")
            REFERENCES "playlists"("id")
            ON DELETE CASCADE
            ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist_materials"
            ADD CONSTRAINT "FK_playlist_materials_materials"
            FOREIGN KEY ("material_id")
            REFERENCES "materials"("id")
            ON DELETE CASCADE
            ON UPDATE NO ACTION
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "playlist_materials" DROP CONSTRAINT "FK_playlist_materials_materials"
        `);
        await queryRunner.query(`
            ALTER TABLE "playlist_materials" DROP CONSTRAINT "FK_playlist_materials_playlists"
        `);
        await queryRunner.query(`
            ALTER TABLE "playlists" DROP CONSTRAINT "FK_playlists_users"
        `);
        await queryRunner.query(`DROP TABLE "playlist_materials"`);
        await queryRunner.query(`DROP TABLE "playlists"`);
    }
}
exports.CreatePlaylistTables1710446400000 = CreatePlaylistTables1710446400000;
//# sourceMappingURL=1710446400000-CreatePlaylistTables.js.map