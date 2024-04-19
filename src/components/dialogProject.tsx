import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
export function DialogProject({ info, program }: { info; program }) {
	return (
		<Dialog>
			<DialogTrigger>info</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>¿Que es {program}?</DialogTitle>
					<DialogDescription>{info}</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
