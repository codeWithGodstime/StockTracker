import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { ScrollArea } from "@/components/ui/scroll-area"; // Import ScrollArea
import React from "react";
  

  type AddButtonProps = {
    form: React.ReactElement,
    text: string
  }
  
  export function AddButton(props: AddButtonProps) {
    
  
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{props.text}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          {/* Scrollable Area */}
          <ScrollArea className="h-[400px] max-h-[400px]">
            {props.form}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
  }
  