import React from "react";
import { Button } from '@/components/ui/button'
import { LoaderCircleIcon } from "lucide-react";

export default function LoadingButton() {
  return (
    <Button disabled>
      <LoaderCircleIcon size={16} aria-hidden="true" className="animate-spin" />
      Loading
    </Button>
  );
}
