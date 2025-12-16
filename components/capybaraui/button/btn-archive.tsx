import React from "react";
import { ArchiveIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArchiveButton() {
  return (
    <Button>
      <ArchiveIcon size={16} aria-hidden="true" />
      Archive
    </Button>
  );
}