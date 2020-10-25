# Migration `20201025061901-create-user`

This migration has been generated by Arlindo jose at 10/25/2020, 8:19:01 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Users" (
"id" text   NOT NULL ,
"name" text   NOT NULL ,
"username" text   NOT NULL ,
"email" text   NOT NULL ,
"phone" text   NOT NULL ,
"gender" text   NOT NULL ,
"password" text   NOT NULL ,
"teacher" boolean   NOT NULL ,
"avatar" text   ,
"classId" text   NOT NULL ,
"created_at" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updated_at" timestamp(3)   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Class" (
"id" text   NOT NULL ,
"course" text   NOT NULL ,
"time" text   NOT NULL ,
"year" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Schedule" (
"id" text   NOT NULL ,
"time" text   NOT NULL ,
"discipline" text   NOT NULL ,
"teacher" text   NOT NULL ,
"weekdays" text   NOT NULL ,
"classId" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Subjets" (
"id" text   NOT NULL ,
"titleTipe" text   NOT NULL ,
"title" text   NOT NULL ,
"module" text   NOT NULL ,
"pdf" text   ,
"description" text   NOT NULL ,
"userId" text   NOT NULL ,
"created_at" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updated_at" timestamp(3)   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Users.username_unique" ON "public"."Users"("username")

CREATE UNIQUE INDEX "Users.email_unique" ON "public"."Users"("email")

CREATE UNIQUE INDEX "Schedule_classId_unique" ON "public"."Schedule"("classId")

ALTER TABLE "public"."Users" ADD FOREIGN KEY ("classId")REFERENCES "public"."Class"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Schedule" ADD FOREIGN KEY ("classId")REFERENCES "public"."Class"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Subjets" ADD FOREIGN KEY ("userId")REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201025061901-create-user
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,58 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+model Users {
+  id          String   @id @default(uuid())
+  name        String
+  username    String  @unique
+  email       String   @unique
+  phone       String
+  gender      String 
+  password    String
+  teacher     Boolean
+  avatar      String? 
+  subjets     Subjets[]
+  class       Class @relation(fields: [classId], references: [id])
+  classId     String
+  created_at  DateTime @default(now()) 
+  updated_at  DateTime @updatedAt
+}
+
+model Class {
+  id       String   @id @default(uuid())
+  course   String
+  time     String 
+  year     String
+  user     Users[]
+  schedule Schedule
+}
+
+model Schedule {
+  id         String   @id @default(uuid())
+  time       String 
+  discipline String
+  teacher    String
+  weekdays   String
+  class      Class    @relation(fields: [classId], references: [id])
+  classId    String
+}
+
+model Subjets {
+  id          String   @id @default(uuid())
+  titleTipe   String
+  title       String
+  module      String
+  pdf         String?
+  description String 
+  user        Users    @relation(fields: [userId], references: [id])
+  userId      String
+  created_at  DateTime @default(now()) 
+  updated_at  DateTime @updatedAt
+}
+
```

