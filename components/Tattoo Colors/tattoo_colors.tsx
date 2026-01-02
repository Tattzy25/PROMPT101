import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { CommandDialog, CommandInput, CommandList, CommandEmpty } from "@/components/ui/command";

export function TattooColors() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="default"
          className="rounded-full"
        >
          Colors
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Colors Commands</DialogTitle>
        <CommandDialog>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
          </CommandList>
        </CommandDialog>
      </DialogContent>
    </Dialog>
  );
}
