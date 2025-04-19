import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface CalloutProps {
  FirstActionButton?: string | React.ReactNode
  SecondActionButton?: string | React.ReactNode
  ThirdActionButton?: string | React.ReactNode
  FourthActionButton?: string | React.ReactNode
  icon?: React.ReactNode | undefined
}
export default function Callout({
  FirstActionButton,
  SecondActionButton,
  ThirdActionButton,
  FourthActionButton,
  icon,
}: CalloutProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{icon}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {FirstActionButton && (
          <div>
            {FirstActionButton}
            {SecondActionButton ? (
              <DropdownMenuSeparator className="border-[#F0F2F5]" />
            ) : null}
          </div>
        )}
        {SecondActionButton && (
          <div>
            {SecondActionButton}
            {ThirdActionButton ? (
              <DropdownMenuSeparator className="border-[#F0F2F5]" />
            ) : null}
          </div>
        )}

        {ThirdActionButton && (
          <div>
            {ThirdActionButton}
            {FourthActionButton ? (
              <DropdownMenuSeparator className="border-[#F0F2F5]" />
            ) : null}
          </div>
        )}

        {FourthActionButton && <div>{FourthActionButton}</div>}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
