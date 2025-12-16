import React from "react";

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DeleteButton() {
  return (
    <Button variant="destructive">
      <Trash size={16} aria-hidden="true" />
      Delete
    </Button>
  );
}