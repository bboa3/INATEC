-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "email" TEXT,
    "tel" TEXT,
    "tel2" TEXT,
    "born" TIMESTAMP(3),
    "class_id" TEXT NOT NULL,
    "bi_id" TEXT,
    "gender_id" INTEGER,
    "address_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lessons" (
    "id" TEXT NOT NULL,
    "day_week" TEXT NOT NULL,
    "start_at" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3) NOT NULL,
    "teacher_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "discipline" TEXT NOT NULL,
    "email" TEXT,
    "tel" TEXT,
    "tel2" TEXT,
    "born" TIMESTAMP(3),
    "bi_id" TEXT,
    "gender_id" INTEGER,
    "address_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chats" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pdf" TEXT,
    "by_teacher" BOOLEAN NOT NULL,
    "lesson_Id" TEXT NOT NULL,
    "student_Id" TEXT,
    "teacher_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "chat_Id" TEXT NOT NULL,
    "student_Id" TEXT,
    "teacher_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genders" (
    "id" SERIAL NOT NULL,
    "gender" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bi" (
    "id" TEXT NOT NULL,
    "issued_in" TEXT NOT NULL,
    "issuance_date" TIMESTAMP(3) NOT NULL,
    "expiry_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "province_id" INTEGER NOT NULL,
    "district_id" INTEGER NOT NULL,
    "bairro_id" INTEGER NOT NULL,
    "block" INTEGER,
    "house" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provinces" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "districts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "Zip_code" INTEGER,
    "province_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bairros" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "district_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students.username_unique" ON "students"("username");

-- CreateIndex
CREATE UNIQUE INDEX "students.email_unique" ON "students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_bi_id_unique" ON "students"("bi_id");

-- CreateIndex
CREATE UNIQUE INDEX "students_address_id_unique" ON "students"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "classes.course_unique" ON "classes"("course");

-- CreateIndex
CREATE UNIQUE INDEX "teachers.email_unique" ON "teachers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_bi_id_unique" ON "teachers"("bi_id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_address_id_unique" ON "teachers"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "genders.gender_unique" ON "genders"("gender");

-- CreateIndex
CREATE UNIQUE INDEX "address_province_id_unique" ON "address"("province_id");

-- CreateIndex
CREATE UNIQUE INDEX "address_district_id_unique" ON "address"("district_id");

-- CreateIndex
CREATE UNIQUE INDEX "provinces.name_unique" ON "provinces"("name");

-- CreateIndex
CREATE UNIQUE INDEX "bairros.name_unique" ON "bairros"("name");

-- AddForeignKey
ALTER TABLE "students" ADD FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD FOREIGN KEY ("bi_id") REFERENCES "bi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD FOREIGN KEY ("gender_id") REFERENCES "genders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lessons" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lessons" ADD FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD FOREIGN KEY ("bi_id") REFERENCES "bi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD FOREIGN KEY ("gender_id") REFERENCES "genders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD FOREIGN KEY ("lesson_Id") REFERENCES "lessons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD FOREIGN KEY ("student_Id") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD FOREIGN KEY ("chat_Id") REFERENCES "chats"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD FOREIGN KEY ("student_Id") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD FOREIGN KEY ("province_id") REFERENCES "provinces"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD FOREIGN KEY ("district_id") REFERENCES "districts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD FOREIGN KEY ("bairro_id") REFERENCES "bairros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "districts" ADD FOREIGN KEY ("province_id") REFERENCES "provinces"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bairros" ADD FOREIGN KEY ("district_id") REFERENCES "districts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
