/*
  Warnings:

  - You are about to drop the column `refresh_token_expi` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "refresh_token_expi",
ADD COLUMN     "refresh_token_expires_in" INTEGER;
