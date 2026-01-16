'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"

  export default function ButtonConfirm () {
    const checkOrder = () => {
        console.log(123);
    };

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {/* <Button variant="outline">Show Dialog</Button> */}
            <Button className=" cursor-pointer w-full py-2 rounded-full bg-red-500 text-white font-semibold">
                Đặt đơn
            </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Bạn có chắc chắn muốn thuê chứ ?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Bạn có chắc chắn muốn đặt đơn hàng này không? Vui lòng xác nhận để tiếp tục.
                    </AlertDialogDescription>
            </AlertDialogHeader>
          <AlertDialogFooter>
                <AlertDialogCancel>Huỷ</AlertDialogCancel>
                   
                    <AlertDialogAction asChild >
                        <Button onClick={checkOrder}>
                            Tiếp tục
                        </Button>
                    </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }