import { motion } from "framer-motion"

export default function Cake() {
  return (
    <motion.div
      className="absolute bottom-10 right-10"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <div className="w-40 h-40 bg-yellow-200 rounded-lg relative">
        <div className="absolute w-full h-1/2 bg-pink-300 top-0 rounded-t-lg"></div>
        <div className="absolute w-4 h-16 bg-red-500 left-1/2 -top-16 transform -translate-x-1/2">
          <div className="w-4 h-4 bg-yellow-500 rounded-full absolute -top-2 animate-pulse"></div>
        </div>
      </div>
    </motion.div>
  )
}

