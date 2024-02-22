-- CreateEnum
CREATE TYPE "ProductState" AS ENUM ('NEW', 'SEMI_NEW', 'SECOND_HAND');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MODERATOR');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "profilePicture" TEXT,
    "status" DECIMAL(65,30),
    "card" TEXT,
    "address" TEXT,
    "phone" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "hash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "photos" TEXT[],
    "features" TEXT[],
    "state" "ProductState" NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment" (
    "text" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id_user","id_product")
);

-- CreateTable
CREATE TABLE "answer" (
    "text" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INTEGER NOT NULL,
    "id_autor" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "answer_pkey" PRIMARY KEY ("id_autor","id_product")
);

-- CreateTable
CREATE TABLE "cart" (
    "valor_total" MONEY NOT NULL,
    "qnt_products" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "favorites" (
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "purchase" (
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" INTEGER NOT NULL,
    "valor_total" MONEY NOT NULL,

    CONSTRAINT "purchase_pkey" PRIMARY KEY ("date","id_user")
);

-- CreateTable
CREATE TABLE "products_on_cart" (
    "id_user" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "products_on_cart_pkey" PRIMARY KEY ("id_user","id_product")
);

-- CreateTable
CREATE TABLE "products_on_purchase" (
    "id_product" INTEGER NOT NULL,
    "date_purchase" TIMESTAMP(3) NOT NULL,
    "id_purchase" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "products_on_purchase_pkey" PRIMARY KEY ("id_product","date_purchase","id_purchase")
);

-- CreateTable
CREATE TABLE "_FavoritesToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_FavoritesToProduct_AB_unique" ON "_FavoritesToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoritesToProduct_B_index" ON "_FavoritesToProduct"("B");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_id_autor_id_product_fkey" FOREIGN KEY ("id_autor", "id_product") REFERENCES "comment"("id_user", "id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase" ADD CONSTRAINT "purchase_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_on_cart" ADD CONSTRAINT "products_on_cart_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "cart"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_on_cart" ADD CONSTRAINT "products_on_cart_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_on_purchase" ADD CONSTRAINT "products_on_purchase_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_on_purchase" ADD CONSTRAINT "products_on_purchase_date_purchase_id_purchase_fkey" FOREIGN KEY ("date_purchase", "id_purchase") REFERENCES "purchase"("date", "id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoritesToProduct" ADD CONSTRAINT "_FavoritesToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "favorites"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoritesToProduct" ADD CONSTRAINT "_FavoritesToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
