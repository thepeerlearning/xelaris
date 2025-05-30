"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { deleteStudent, getStudents } from "@/lib/redux"
import { useAppDispatch } from "@/lib/redux/hooks"
import React from "react"

export type StripeTypes = {
  appearance: {
    theme: "stripe"
    variables: {
      colorPrimary: string
    }
  }
}

export default function DeleteStudent({ id }: { id: string }) {
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const dispatch = useAppDispatch()

  function handleDelete() {
    setLoading(true)
    dispatch(deleteStudent({ id }))
      .unwrap()
      .then(() => {
        setLoading(false)
        setOpen(false)
        dispatch(getStudents())
      })
      .catch(() => {
        setLoading(false)
      })
    return false
  }

  const handleClose = () => setOpen(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="w-[160px] h-[40px] py-4 px-[19px] normal-case font-normal font-inter text-[14px]/[20.3px] text-error hover:text-white bg-transparent hover:bg-primary hover:scale-[1.008] border border-solid border-primary transform transition duration-300 ease-in-out rounded-lg flex justify-center items-center cursor-pointer"
        >
          Delete student
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full flex flex-col gap-5 justify-center items-center">
        <DialogTitle className="w-full font-inter font-normal text-[19px]/[28px] tracking-[0.2px] text-left text-secondary uppercase">
          Delete Student
        </DialogTitle>
        <div className="w-full px-3 flex flex-col justify-center items-center">
          <p className="font-normal font-inter text-secondary text-sm/[24px]">
            Are you sure you want to continue?
          </p>
          <p className="italic font-normal font-inter text-sm/[24px] text-primary py-2">
            This action is permanent and cannot be undone!
          </p>
        </div>
        <div className="w-full flex gap-2 items-center justify-center mt-4">
          <Button
            variant="ghost"
            className="w-1/2 py-[10px] px-[18px] h-[43px] bg-transparent hover:bg-transparent border border-primary"
            disabled={loading}
            onClick={handleClose}
          >
            Cancel
          </Button>

          <Button
            className="w-1/2 py-[10px] px-[18px] h-[43px]"
            disabled={loading}
            onClick={handleDelete}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
