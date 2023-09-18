-- AlterTable
ALTER TABLE "User" ADD COLUMN     "notesId" TEXT,
ADD COLUMN     "taskId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_notesId_fkey" FOREIGN KEY ("notesId") REFERENCES "Notes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
