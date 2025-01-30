"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import Balloons from "./components/Balloons"
import Cake from "./components/Cake"
import Flowers from "./components/Flowers"
import { Button } from "@/components/ui/button"
import { Engine } from "tsparticles-engine"

const poem = `
In a world of millions, I found my light,
A soul so warm, so pure, so bright.
With every laugh, with every glance,
You turn life into a beautiful dance.

Your smile—like sunrise after the rain,
Washes away my worries, my pain.
Your voice—a melody soft and true,
A song that my heart beats to.

I still remember, clear as day,
How seasoning bottles went astray.
Your pizza drowned in a spicy sea,
Yet you laughed, and so did we.

And oh, the time you placed an order,
But sent it off to some wrong corner.
We thought our dinner was lost for good,
Yet somehow, it found its way back like it should!

You worry about the smallest things,
Overthinking what the future brings.
But love, you shine in every way,
And I'll be here to say, "It's okay."

At 22, you're a star in bloom,
A garden of dreams, a light in the gloom.
Strong yet gentle, bold yet kind,
A rarest love, a rarest mind.

If I could, I'd pause the time,
Hold this moment, make it mine.
But years will pass, and time will fly,
Yet, my love for you will never die.

So here's to you, my heart, my fate,
To all our tomorrows, let's celebrate.
Happy Birthday, Janhvi, my love so true,
This world is lucky to have you.
`

const poemLines = poem.split("\n")

export default function BirthdaySurprise() {
  const [currentLine, setCurrentLine] = useState(0)
  const [showFullPoem, setShowFullPoem] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev < poemLines.length - 1 ? prev + 1 : prev))
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const particlesInit = async (main: Engine) => {
    await loadFull(main)
  }

  const renderPoemLine = (line: string, index: number) => {
    const isEmptyLine = line.trim() === ""
    const isLastLineOfStanza = poemLines[index + 1]?.trim() === ""

    return (
      <p key={index} className={`text-lg ${isEmptyLine ? "mb-8" : isLastLineOfStanza ? "mb-2" : "mb-1"}`}>
        {line}
      </p>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-500 flex flex-col items-center justify-center overflow-hidden relative p-4">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 200 },
            color: { value: "#ffffff" },
            shape: { type: "star" },
            opacity: { value: 0.7, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1 },
          },
        }}
      />
      <Balloons />
      <Flowers />
      <div className="z-10 text-center p-8 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-pink-600">Happy Birthday, Janhvi!</h1>
        <div className="mb-6">
          <div className="w-64 h-64 mx-auto bg-gray-300 rounded-full mb-4 overflow-hidden">
            {/* Placeholder for image */}
            <img
  src="https://media.licdn.com/dms/image/v2/D5603AQG4-ExT1MmZpw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708336672941?e=1743638400&v=beta&t=d2HtHvl5OTBaijhCl3MXivYhFPB8F9IV9MJPpCoFAG4"
  alt="Janhvi"
  className="w-full h-full object-cover rounded-full"
/>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {showFullPoem ? (
            <motion.div
              key="full-poem"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-80 overflow-y-auto text-left pr-4 custom-scrollbar"
            >
              {poemLines.map(renderPoemLine)}
            </motion.div>
          ) : (
            <motion.div
              key="animated-poem"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-80 overflow-hidden"
            >
              {poemLines.slice(0, currentLine + 1).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {renderPoemLine(line, index)}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <Button onClick={() => setShowFullPoem(!showFullPoem)} className="mt-4">
          {showFullPoem ? "Show Animated Poem" : "Read Full Poem"}
        </Button>
      </div>
      <Cake />
    </div>
  )
}

