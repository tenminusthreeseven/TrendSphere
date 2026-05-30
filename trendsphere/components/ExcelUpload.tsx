'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ExcelUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // 3D tilt effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log('File selected:', selectedFile.name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.name.endsWith('.xlsx') || droppedFile.name.endsWith('.xls') || droppedFile.name.endsWith('.csv'))) {
      setFile(droppedFile);
      console.log('File dropped:', droppedFile.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative z-50"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: isHovered ? -10 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        <div
          className={`w-[500px] backdrop-blur-xl rounded-3xl border-2 transition-all duration-500 overflow-hidden
            ${isDragging 
              ? 'border-lavender-accent bg-lavender-accent/20 scale-105' 
              : isHovered
              ? 'border-lavender-accent bg-midnight-black/60 shadow-2xl shadow-lavender-accent/30'
              : 'border-glass-border bg-midnight-black/40 shadow-xl'
            }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-lavender-accent/0 via-lavender-accent/30 to-deep-violet/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Header */}
          <div className="p-8 pb-0">
            <motion.div
              animate={{
                rotate: isHovered ? 360 : 0,
              }}
              transition={{ duration: 0.6 }}
              className="text-5xl mb-4 inline-block"
            >
              📊
            </motion.div>
            <h3 className="text-xl tracking-[0.2em] uppercase text-lavender-accent mb-2 font-bold">
              Fashion Data Import
            </h3>
            <p className="text-sm text-mouse-gray leading-relaxed">
              Upload Excel or CSV files containing fashion trends,<br />
              inventory data, or consumer behavior analytics
            </p>
          </div>
          
          {/* Upload Area */}
          <div className="p-8">
            <motion.div
              animate={{
                scale: isDragging ? 1.02 : 1,
                backgroundColor: isDragging ? "rgba(200, 182, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
              }}
              className="border-2 border-dashed border-glass-border rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 hover:border-lavender-accent"
              onClick={handleUploadClick}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileChange}
                className="hidden"
              />
              
              <motion.div
                animate={{
                  y: isHovered ? [0, -10, 0] : 0,
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                  repeatType: "reverse",
                }}
                className="text-7xl mb-4"
              >
                {isDragging ? "📁✨" : "📂"}
              </motion.div>
              
              <p className="text-lg text-editorial-white/80 mb-2 font-medium">
                {isDragging ? "Drop your file here" : "Drag & drop or click to upload"}
              </p>
              <p className="text-sm text-mouse-gray">
                Supports .xlsx, .xls, .csv files up to 50MB
              </p>
              
              {/* File format badges */}
              <div className="flex gap-3 justify-center mt-6">
                <span className="text-xs px-3 py-1.5 bg-editorial-white/10 rounded-full hover:bg-lavender-accent/20 transition-colors cursor-pointer">
                  Excel (.xlsx)
                </span>
                <span className="text-xs px-3 py-1.5 bg-editorial-white/10 rounded-full hover:bg-lavender-accent/20 transition-colors cursor-pointer">
                  CSV
                </span>
              </div>
            </motion.div>

            {/* Selected file preview */}
            {file && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-lavender-accent/10 rounded-2xl border border-lavender-accent/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="text-sm font-medium text-editorial-white">{file.name}</p>
                      <p className="text-xs text-mouse-gray">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Action Buttons with 3D hover effect */}
          <div className="p-8 pt-0 border-t border-glass-border flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFile(null)}
              className="flex-1 py-3 text-sm tracking-[0.1em] uppercase border border-glass-border rounded-xl hover:border-red-500/50 hover:text-red-400 transition-all duration-300"
            >
              Clear
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 30px -10px rgba(200, 182, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (file) {
                  console.log('Processing:', file.name);
                  alert(`Processing ${file.name}...`);
                } else {
                  alert('Please select a file first');
                }
              }}
              className="flex-1 py-3 text-sm tracking-[0.1em] uppercase bg-gradient-to-r from-lavender-accent to-deep-violet rounded-xl hover:opacity-90 transition-all duration-300 font-medium shadow-lg"
            >
              Analyze Now ✨
            </motion.button>
          </div>

          {/* 3D floating particles effect on hover */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-lavender-accent rounded-full"
                  initial={{
                    x: Math.random() * 500,
                    y: Math.random() * 600,
                    opacity: 0,
                  }}
                  animate={{
                    y: [null, -100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 2 + 1,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
