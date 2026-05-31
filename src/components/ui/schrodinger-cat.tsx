'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const SchrodingerCat = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`relative ${className}`}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Shadow */}
        <motion.ellipse
          cx="250"
          cy="420"
          rx="150"
          ry="20"
          fill="rgba(187, 58, 26, 0.2)"
          animate={{
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Cat Body */}
        <motion.g
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Tail */}
          <motion.path
            d="M 350 350 Q 400 320 450 280 Q 480 250 500 220"
            stroke="#BB3A1A"
            strokeWidth="25"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                'M 350 350 Q 400 320 450 280 Q 480 250 500 220',
                'M 350 350 Q 400 330 450 290 Q 475 260 495 230',
                'M 350 350 Q 400 320 450 280 Q 480 250 500 220',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Main Body - Large sitting cat */}
          <ellipse cx="250" cy="300" rx="120" ry="140" fill="#BB3A1A" opacity="0.9" />
          
          {/* White chest */}
          <ellipse cx="250" cy="320" rx="60" ry="90" fill="white" opacity="0.95" />

          {/* Head */}
          <ellipse cx="250" cy="200" rx="90" ry="95" fill="#BB3A1A" opacity="0.9" />

          {/* Left Ear */}
          <motion.path
            d="M 180 150 L 160 100 L 200 130 Z"
            fill="#BB3A1A"
            animate={{
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ originX: '180px', originY: '130px' }}
          />

          {/* Right Ear */}
          <motion.path
            d="M 320 150 L 340 100 L 300 130 Z"
            fill="#BB3A1A"
            animate={{
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.1,
            }}
            style={{ originX: '320px', originY: '130px' }}
          />

          {/* Eyes - Schrödinger's superposition effect */}
          <motion.g
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <circle cx="220" cy="190" r="8" fill="#1a1a1a" />
            <circle cx="280" cy="190" r="8" fill="#1a1a1a" />
            <circle cx="222" cy="188" r="3" fill="white" opacity="0.8" />
            <circle cx="282" cy="188" r="3" fill="white" opacity="0.8" />
          </motion.g>

          {/* Nose */}
          <path d="M 250 210 L 245 215 L 255 215 Z" fill="#CC4A2A" />

          {/* Whiskers */}
          <g stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" opacity="0.6">
            {/* Left whiskers */}
            <line x1="180" y1="205" x2="130" y2="200" />
            <line x1="180" y1="210" x2="130" y2="210" />
            <line x1="180" y1="215" x2="130" y2="220" />
            
            {/* Right whiskers */}
            <line x1="320" y1="205" x2="370" y2="200" />
            <line x1="320" y1="210" x2="370" y2="210" />
            <line x1="320" y1="215" x2="370" y2="220" />
          </g>

          {/* Front Paws */}
          <ellipse cx="210" cy="410" rx="25" ry="30" fill="#BB3A1A" opacity="0.9" />
          <ellipse cx="290" cy="410" rx="25" ry="30" fill="#BB3A1A" opacity="0.9" />
          
          {/* Paw pads */}
          <ellipse cx="210" cy="420" rx="15" ry="10" fill="#CC4A2A" opacity="0.8" />
          <ellipse cx="290" cy="420" rx="15" ry="10" fill="#CC4A2A" opacity="0.8" />
        </motion.g>

        {/* Quantum particles floating around */}
        <motion.g>
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={150 + Math.cos(i * Math.PI / 4) * 180}
              cy={250 + Math.sin(i * Math.PI / 4) * 180}
              r="3"
              fill="#BB3A1A"
              opacity="0.4"
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.g>

        {/* Small person silhouette inside cat (Schrödinger reference) */}
        <motion.g
          opacity="0.15"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <circle cx="250" cy="300" r="15" fill="white" />
          <rect x="243" y="315" width="14" height="35" rx="7" fill="white" />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default SchrodingerCat;
