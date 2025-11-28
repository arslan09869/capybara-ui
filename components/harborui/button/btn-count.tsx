import React from "react";
import { Button } from '@/components/ui/button'

export default function CountButton() {
  return (
    <Button variant="outline" className="gap-3">
      Messages
      <span className="inline-flex h-5 items-center rounded border px-1 text-[10px] font-medium text-muted-foreground">
        18
      </span>
    </Button>
  );
}
