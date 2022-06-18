import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import tw, { styled } from "twin.macro";

import "./App.css";

import Campaigns from "./Campaigns";

import chaosImg from "./chaos.png";

const ButtonShadow = tw.div`
  filter blur-sm
  group-hover:(blur translate-y-0.5) group-focus-visible:blur group-active:blur-none
`;

const ButtonBg = tw.div`
  opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100
`;

const Button = styled.button({
  ...tw`
    relative flex justify-center items-center
    px-3 py-2
    text-[#191d24] border-0 rounded outline-none ring-blue-500 transition
    hover:text-black focus-visible:(ring text-black)
  `,

  [`& > ${ButtonBg}, ${ButtonShadow}`]: tw`
    absolute inset-0 z-[-1] rounded transition bg-gradient-120 from-fuchsia-200 to-indigo-200
  `,
});

const DashboardButton = ({ children, ...props }) => (
  <Button className="group" {...props}>
    <ButtonShadow />
    <ButtonBg />
    <svg
      tw="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
    {children}
  </Button>
);

const App = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const onPointerMove = e => {
    const div = e.currentTarget;
    setOffsetX((e.clientX - (div.offsetLeft + div.clientWidth / 2)) / 100);
    setOffsetY((e.clientY - (div.offsetTop + div.clientHeight / 2)) / 100);
  };
  return (
    <div
      tw="flex flex-col items-center font-light min-h-screen font-sans bg-gray-50"
      onPointerMove={onPointerMove}
    >
      <header tw="flex w-full p-[50px] max-w-7xl my-auto translate-y-[-100px]">
        <main>
          <CSSTransition appear={true} in={true} timeout={250} classNames="title">
            <h1 tw="text-5xl">
              <img tw="inline h-[1em] filter drop-shadow-md" src={chaosImg} alt="Chaos Logo" />{" "}
              Chaos
            </h1>
          </CSSTransition>
          <CSSTransition appear={true} in={true} timeout={250} classNames="subtitle">
            <h2 tw="text-3xl my-4">Recruitment Drives, without the fuss.</h2>
          </CSSTransition>
          <CSSTransition appear={true} in={true} timeout={250} classNames="dashboard">
            <DashboardButton>Your Dashboard</DashboardButton>
          </CSSTransition>
        </main>
        <Campaigns offsetX={offsetX} offsetY={offsetY} />
      </header>

      <svg
        tw="absolute bottom-0 h-auto pointer-events-none"
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#9dbbfb88"></stop>
            <stop offset="95%" stop-color="#a78bfa88"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,233 0,233 C 97.30143540669857,227.02870813397129 194.60287081339715,221.05741626794259 289,213 C 383.39712918660285,204.94258373205741 474.88995215311,194.79904306220097 573,198 C 671.11004784689,201.20095693779903 775.8373205741628,217.74641148325361 863,220 C 950.1626794258372,222.25358851674639 1019.7607655502391,210.2153110047847 1113,210 C 1206.239234449761,209.7846889952153 1323.1196172248806,221.39234449760765 1440,233 C 1440,233 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#9dbbfbff"></stop>
            <stop offset="95%" stop-color="#a78bfaff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,316 0,316 C 122.83253588516749,291.0334928229665 245.66507177033498,266.06698564593302 328,275 C 410.334928229665,283.93301435406698 452.17224880382776,326.7655502392344 527,336 C 601.8277511961722,345.2344497607656 709.6459330143541,320.87081339712927 830,305 C 950.3540669856459,289.12918660287076 1083.2440191387561,281.75119617224877 1187,285 C 1290.7559808612439,288.24880382775123 1365.377990430622,302.1244019138756 1440,316 C 1440,316 1440,450 1440,450 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
        ></path>
      </svg>
    </div>
  );
};

export default App;
