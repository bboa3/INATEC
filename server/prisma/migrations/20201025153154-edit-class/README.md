# Migration `20201025153154-edit-class`

This migration has been generated by Arlindo jose at 10/25/2020, 5:31:54 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Schedule" DROP CONSTRAINT "Schedule_classId_fkey"

ALTER TABLE "public"."Class" ADD COLUMN "schedule" jsonb   NOT NULL 

DROP TABLE "public"."Schedule"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201025143357-edit-schedule..20201025153154-edit-class
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
@@ -30,20 +30,11 @@
   course   String
   time     String 
   year     String
   user     Users[]
-  schedule Schedule
+  schedule Json
 }
-model Schedule {
-  id         String   @id @default(uuid())
-  weekdays   Json     
-  discipline String
-  teacher    String
-  class      Class    @relation(fields: [classId], references: [id])
-  classId    String
-}
-
 model Subjets {
   id          String   @id @default(uuid())
   titleTipe   String
   title       String
```

