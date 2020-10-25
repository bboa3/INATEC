# Migration `20201025065645-edit-class`

This migration has been generated by Arlindo jose at 10/25/2020, 8:56:46 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Class" ADD COLUMN "identity" text   NOT NULL 

CREATE UNIQUE INDEX "Class.identity_unique" ON "public"."Class"("identity")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201025061901-create-user..20201025065645-edit-class
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Users {
   id          String   @id @default(uuid())
@@ -25,8 +25,9 @@
 }
 model Class {
   id       String   @id @default(uuid())
+  identity String   @unique
   course   String
   time     String 
   year     String
   user     Users[]
```

