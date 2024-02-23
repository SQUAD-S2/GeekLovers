/*
  Warnings:

  - The primary key for the `answer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_autor` on the `answer` table. All the data in the column will be lost.
  - You are about to drop the column `id_product` on the `answer` table. All the data in the column will be lost.
  - The primary key for the `comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[commentId]` on the table `answer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `commentId` to the `answer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "answer" DROP CONSTRAINT "answer_id_autor_id_product_fkey";

-- AlterTable
ALTER TABLE "answer" DROP CONSTRAINT "answer_pkey",
DROP COLUMN "id_autor",
DROP COLUMN "id_product",
ADD COLUMN     "commentId" INTEGER NOT NULL,
ADD CONSTRAINT "answer_pkey" PRIMARY KEY ("commentId", "id_user");

-- AlterTable
ALTER TABLE "comment" DROP CONSTRAINT "comment_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "comment_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "answer_commentId_key" ON "answer"("commentId");

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
