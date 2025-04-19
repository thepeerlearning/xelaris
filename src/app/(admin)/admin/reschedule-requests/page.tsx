"use client"
import { TableContent } from "@/components/Table"
import DataLoader from "@/components/lottie/loader"
import NoData from "@/components/svgs/no-data"
import { getAdminReschedules } from "@/lib/redux"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { isEmpty } from "lodash"
import moment from "moment-timezone"
import React from "react"
import RespondToReschedule from "./_response"

const columns = [
  {
    id: "sn",
    label: " ",
    align: "left",
    minWidth: 20,
  },
  {
    id: "title",
    label: "Parent Name",
    minWidth: 500,
    align: "left",
  },
  {
    id: "email",
    label: "Parent Email",
    minWidth: 500,
    align: "left",
  },

  {
    id: "childname",
    label: "Child Name",
    minWidth: 100,
    align: "left",
  },
  {
    id: "date",
    label: "Requested On",
    minWidth: 100,
    align: "left",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    align: "left",
  },

  {
    id: "action",
    label: " ",
    minWidth: 100,
    align: "right",
  },
]
function createData(
  sn: number,
  title: string,
  email: string,
  childname: string,
  date: React.ReactNode,
  status: React.ReactNode,
  action: React.ReactNode
) {
  return {
    sn,
    title,
    email,
    childname,
    date,
    status,
    action,
  }
}

export default function BillingHistory() {
  const { schedules: data, loading }: any = useAppSelector(
    (state) => state.admin
  )
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getAdminReschedules())
  }, [dispatch])

  const rows =
    data?.length !== 0
      ? data?.map((row: any, i: number) =>
          createData(
            i + 1,
            row.parent_name,
            row.parent_email,
            row.child_name,
            moment(row.requested_date).format("llll"),
            row.status.toLowerCase() === "pending" ? (
              <div className="w-[80px] h-[30px] py-[2px] px-[6px] flex justify-center items-center gap-1 font-medium font-inter text-xs/[18px] bg-primary/10 rounded-full border border-solid border-primary/10 text-primary capitalize">
                {row.status}
              </div>
            ) : (
              <div className="w-[80px] h-[30px] py-[2px] px-[6px] flex justify-center items-center gap-1 font-medium font-inter text-xs/[18px] bg-[#ECFDF3] rounded-full border border-solid border-[#ABEFC6] text-[#067647] capitalize">
                {row.status}
              </div>
            ),
            <RespondToReschedule row={row} />
          )
        )
      : []
  return (
    <div className="w-full max-w-[1022px] flex flex-col gap-2">
      {loading ? (
        <DataLoader />
      ) : isEmpty(data) ? (
        <NoData message="No reschedule request available" />
      ) : (
        <div className="bg-white border border-solid border-[#EAECF0]">
          <TableContent columns={columns} rows={rows} />
        </div>
      )}
    </div>
  )
}
