import { motion } from "framer-motion"

const balloonColors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500"]

export default function Balloons() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-16 h-20 ${balloonColors[i % balloonColors.length]} rounded-full`}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-20px",
          }}
          animate={{
            y: [0, -1000],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-1 h-32 bg-gray-300 absolute left-1/2 bottom-0 transform -translate-x-1/2"></div>
        </motion.div>
      ))}
    </>
  )
}

