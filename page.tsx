'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GuestSelector() {
  const [guestCount, setGuestCount] = useState(3)

  const incrementGuests = () => {
    if (guestCount < 6) {
      setGuestCount(prev => prev + 1)
    }
  }

  const decrementGuests = () => {
    if (guestCount > 1) {
      setGuestCount(prev => prev - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white px-4 py-2 max-w-md mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      {/* Status Bar */}
      <div className="flex justify-between items-center mb-4 text-xs sm:text-sm">
        <span>23:47</span>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border border-black" />
        </div>
      </div>

      {/* Back Button */}
      <button className="text-sm text-gray-600 mb-8">戻る</button>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-4 sm:gap-6">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-2">ゲスト</h1>
          <p className="text-sm text-gray-600">
            ご自身を含め、最大6人まで追加できます。
          </p>
        </div>

        {/* Guest Illustration */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 my-2 sm:my-4">
          <Image
            src="/image/logo_1.jpg"
            alt="1 WEEK STAY BY NUDGE' ONE."
            width={128}
            height={128}
            className="object-contain w-full h-full"
            priority
          />
        </div>

        {/* Counter Section */}
        <div className="flex items-center gap-6 sm:gap-8 my-2 sm:my-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 sm:h-12 sm:w-12 border-2"
            onClick={decrementGuests}
            disabled={guestCount <= 1}
          >
            <Minus className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
          <span className="text-5xl sm:text-6xl font-light">{guestCount}</span>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 sm:h-12 sm:w-12 border-2"
            onClick={incrementGuests}
            disabled={guestCount >= 6}
          >
            <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>

        <div className="text-center">
          <div className="font-medium">大人</div>
          <div className="text-sm text-gray-600">13歳以上</div>
        </div>
      </div>

      {/* Next Button */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 left-4 max-w-md mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <Button className="w-full bg-black text-white rounded-lg py-4 sm:py-6">
          次へ
        </Button>
      </div>
    </div>
  )
}