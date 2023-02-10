import React from 'react';
import Button from './Button';

const ControlButtons = (props) => {
  return (
    <div className="flex gap-[35px] justify-center">
      <Button>
        <svg
          width="13"
          height="18"
          viewBox="0 0 13 18"
          className="fill-teal-700 dark:fill-teal-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.25 0.719997C0.25 0.459997 0.46 0.249997 0.72 0.249997H2.6C2.86 0.249997 3.07 0.459997 3.07 0.719997V7.61L10.7 0.539997C11.5 -0.130003 12.75 0.429997 12.75 1.5V16.5C12.75 17.57 11.5 18.13 10.7 17.46L3.06 10.43V17.28C3.06 17.54 2.85 17.75 2.59 17.75H0.72C0.46 17.75 0.25 17.54 0.25 17.28V0.719997Z" />
        </svg>
      </Button>
      <Button>
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          className="fill-teal-700 dark:fill-teal-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.2 7.04L8.7 0.789997C9.5 0.119997 10.75 0.679997 10.75 1.75V14.25C10.75 15.32 9.5 15.88 8.7 15.21L1.2 8.96C0.6 8.46 0.6 7.54 1.2 7.04ZM11.2 7.04L18.7 0.789997C19.5 0.119997 20.75 0.679997 20.75 1.75V14.25C20.75 15.32 19.5 15.88 18.7 15.21L11.2 8.96C10.6 8.46 10.6 7.54 11.2 7.04Z" />
        </svg>
      </Button>
      <Button>
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          className="fill-accent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.33 11.61L3.58 19.74C2.34 20.47 0.75 19.59 0.75 18.13V1.87C0.75 0.240003 2.46 -0.399997 3.58 0.260004L17.33 8.39C18.56 9.11 18.56 10.89 17.33 11.62V11.61Z" />
        </svg>
      </Button>
      <Button>
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          className="fill-teal-700 dark:fill-teal-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.8 8.96L2.3 15.21C1.5 15.88 0.25 15.32 0.25 14.25V1.75C0.25 0.679997 1.5 0.119997 2.3 0.789997L9.8 7.04C10.4 7.54 10.4 8.46 9.8 8.96ZM19.8 8.96L12.3 15.21C11.5 15.88 10.25 15.32 10.25 14.25V1.75C10.25 0.679997 11.5 0.119997 12.3 0.789997L19.8 7.04C20.4 7.54 20.4 8.46 19.8 8.96Z" />
        </svg>
      </Button>
      <Button>
        <svg
          width="13"
          height="18"
          viewBox="0 0 13 18"
          className="fill-teal-700 dark:fill-teal-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.75 17.28C12.75 17.54 12.54 17.75 12.28 17.75H10.4C10.14 17.75 9.92999 17.54 9.92999 17.28V10.39L2.28999 17.46C1.48999 18.13 0.240005 17.57 0.240005 16.5V1.5C0.240005 0.429997 1.48999 -0.130003 2.28999 0.539997L9.92999 7.57V0.719997C9.92999 0.459997 10.14 0.249997 10.4 0.249997H12.28C12.54 0.249997 12.75 0.459997 12.75 0.719997V17.28Z" />
        </svg>
      </Button>
    </div>
  );
};

export default ControlButtons;
