import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Hamburger duration={0.4} color="#ffffff" rounded />
    </div>
  );
};
