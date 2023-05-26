import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Download, Send, Share, ZoomIn, ZoomOut } from "lucide-react";

export default function Demo() {
  const handleDownload = async () => {
    try {
      const response = await fetch("/api/generatePDF", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: "http://localhost:3000/app",
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf";
        a.click();
        URL.revokeObjectURL(url);
      } else {
        console.error("An error occurred while generating the PDF.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative rounded-full  bg-[rgba(0,0,0,0.8)] backdrop-blur-xl h-[50px] w-[220px] shadow-lg shadow-[rgba(0,0,0,0.3)]"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 rounded-xl transition duration-300 group-hover:opacity-100 px-4 items-center grid grid-cols-3"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(220,220,220,0.2),
              transparent 80%
            )
          `,
        }}
      >
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="circle h-[25px] w-[25px] bg-gradient-to-bl from-blue-500 to-cyan-500 border-2 cursor-pointer border-white rounded-full"
        ></motion.div>
        <div className="flex items-center gap-4 justify-center">
          <motion.div whileTap={{ scale: 0.8 }}>
            <ZoomIn className="text-[rgba(255,255,255,0.8)] hover:text-white transition-all duration-300 cursor-pointer" />
          </motion.div>
          <motion.div whileTap={{ scale: 0.8 }}>
            <ZoomOut className="text-[rgba(255,255,255,0.8)] hover:text-white transition-all duration-300 cursor-pointer" />
          </motion.div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <motion.div whileTap={{ scale: 0.8 }}>
            <Download
              onClick={handleDownload}
              className="text-[rgba(255,255,255,0.8)] hover:text-white transition-all duration-300 cursor-pointer"
            />
          </motion.div>
          {/* <motion.div whileTap={{ scale: 0.8 }}>
            <Send className="text-[rgba(255,255,255,0.8)] hover:text-white transition-all duration-300 cursor-pointer" />
          </motion.div> */}
        </div>
      </motion.div>
    </div>
  );
}
