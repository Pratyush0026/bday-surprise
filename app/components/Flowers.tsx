import { motion } from "framer-motion"

const flowerColors = ["text-red-500", "text-yellow-500", "text-pink-500", "text-purple-500", "text-blue-500"]

export default function Flowers() {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute text-4xl ${flowerColors[i % flowerColors.length]}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          ✿
        </motion.div>
      ))}
    </>
  )
}

