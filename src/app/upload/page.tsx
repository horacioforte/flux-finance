import { BottomNav } from "@/components/bottom-nav";
import { Logo } from "@/components/logo";
import { DropZone } from "@/components/upload/drop-zone";
import { ImportList } from "@/components/upload/import-list";
import { SpreadsheetModeCard } from "@/components/upload/spreadsheet-mode-card";
import { recentImports } from "@/lib/upload-mock-data";

export default function UploadPage() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-lg px-4 pb-28 pt-6 sm:max-w-2xl sm:px-6">
        <header className="mb-6 flex items-center justify-between gap-4">
          <Logo />
          <h1 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
            Upload
          </h1>
        </header>

        <section className="mb-4" aria-label="Enviar extratos">
          <DropZone />
        </section>

        <div className="mb-4 flex flex-col gap-4">
          <SpreadsheetModeCard />
          <ImportList imports={recentImports} />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
