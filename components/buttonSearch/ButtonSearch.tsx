'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { BsSearch } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

export const ButtonSearch = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AnimatePresence initial={false} mode="wait">
      {open ? (
        <motion.div
          className="cursor-pointer flex items-center justify-end"
          key="cross"
          onClick={() => setOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <RxCross2 size={25} color="#ffffff" />
        </motion.div>
      ) : (
        <motion.div
          className="cursor-pointer flex items-center justify-end"
          key="search"
          onClick={() => setOpen(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <BsSearch size={25} color="#ffffff" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
