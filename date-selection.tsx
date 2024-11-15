'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDown } from 'lucide-react'

export default function Component() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  
  const availableDates = [
    { date: "11月16日 (土)", time: "16:00〜19:00" },
    { date: "11月17日 (日)", time: "16:00〜19:00" },
    { date: "11月18日 (月)", time: "16:00〜19:00" },
    { date: "11月20日 (水)", time: "16:00〜19:00" },
    { date: "11月21日 (木)", time: "16:00〜19:00" },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Card className="w-full max-w-md mx-auto rounded-3xl">
        <div className="p-4 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="text-sm font-medium text-gray-600">
              終了
            </Button>
            <div className="text-sm text-gray-600">
              23:47
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold">日付</h1>
            <p className="text-sm text-gray-600">
              ご都合のよい日付をお選びください。
            </p>
          </div>

          {/* Date Selection */}
          <div className="space-y-4">
            <Select>
              <SelectTrigger className="w-full p-4 text-left border rounded-xl">
                <div className="flex justify-between items-center">
                  <SelectValue placeholder="予約可能な日付" />
                  <ChevronDown className="h-4 w-4" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべての日付</SelectItem>
                <SelectItem value="available">予約可能な日付のみ</SelectItem>
              </SelectContent>
            </Select>

            <RadioGroup
              value={selectedDate}
              onValueChange={setSelectedDate}
              className="space-y-3"
            >
              {availableDates.map((slot, index) => (
                <label
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border cursor-pointer hover:bg-gray-50"
                >
                  <div className="space-y-1">
                    <div className="font-medium">{slot.date}</div>
                    <div className="text-sm text-gray-500">{slot.time}</div>
                  </div>
                  <RadioGroupItem value={`${index}`} className="h-5 w-5" />
                </label>
              ))}
            </RadioGroup>
          </div>

          {/* Next Button */}
          <div className="pt-4">
            <Button
              className="w-full bg-black text-white rounded-xl py-6"
              disabled={!selectedDate}
            >
              次へ
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
