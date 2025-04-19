import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DataLoader from "../lottie/loader"
import NoData from "../svgs/no-data"

export function TableContent({
  loading,
  columns,
  rows,
  page,
  pagesize,
  sliced,
}: any) {
  return (
    <>
      {loading ? (
        <div className="w-full flex justify-center items-center py-8">
          <DataLoader />
        </div>
      ) : rows?.length === 0 ? (
        <div className="w-full flex justify-center items-center py-8">
          <NoData />
        </div>
      ) : (
        <div className="w-full rounded-[12px] inline-flex flex-col items-start gap-[18px] bg-[#FBF8E6] border border-[#E5E9EB] shadow-[0px_1px_2px_0px_#1018280D] py-6 px-4 my-4">
          <Table>
            <TableHeader>
              <TableRow>
                {columns?.map((column: any, index: number) => {
                  return (
                    <TableHead
                      key={index}
                      align={column.align ? column.align : "left"}
                    >
                      {column.label}
                    </TableHead>
                  )
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              {sliced
                ? rows
                    .slice(page * pagesize, page * pagesize + pagesize)
                    .map((row: any, index: number) => {
                      return (
                        <TableRow key={index + 1}>
                          {columns.map((column: any) => {
                            const value = row[column.id]
                            return (
                              <TableCell key={column.id} className="">
                                {value}
                              </TableCell>
                            )
                          })}
                        </TableRow>
                      )
                    })
                : rows?.map((row: any, index: number) => {
                    return (
                      <TableRow key={index + 1}>
                        {columns.map((column: any, index: number) => {
                          const value = row[column.id]
                          return (
                            <TableCell key={index} align={column.align}>
                              {value}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  )
}
