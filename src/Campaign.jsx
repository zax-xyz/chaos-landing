import classNames from "classnames";
import tw, { styled } from "twin.macro";
import { CSSTransition } from "react-transition-group";
import styles from "./Campaign.module.scss";

const Bar = ({ className, transitionDelay, ...props }) => (
  <div
    className={classNames(styles.bar, className)}
    style={{ transitionDelay: `${transitionDelay}ms` }}
    {...props}
  ></div>
);

const Button = styled.button({
  ...tw`px-3 py-2 ml-auto rounded`,

  variants: {
    status: {
      pending: tw`bg-[hsl(220, 60%, 90%)] text-[hsl(220, 60%, 25%)]`,
      open: tw`bg-[hsl(220, 93%, 60%)] text-white`,
    },
  },
});

const Bars = styled.div({
  ...tw`flex flex-col`,

  [`& > *`]: tw`
    h-[14px] rounded-[3px] bg-black/5 first:bg-black/[0.15]
  `,
});

const Campaign = ({ logo, active = false, transitionDelay = 0 }) => {
  const status = active ? "pending" : "open";
  return (
    <CSSTransition
      appear={true}
      in={true}
      timeout={250 + transitionDelay}
      classNames={{
        appear: styles["fade-appear"],
        appearActive: styles["fade-appear-active"],
      }}
      style={{ transitionDelay: `${transitionDelay}ms` }}
    >
      <div>
        <div tw="min-w-[400px] bg-white rounded-lg shadow-md transition hover:(-translate-y-1 shadow-lg)">
          <header tw="flex items-center gap-2 p-4">
            <img tw="w-10 rounded" src={logo} alt="logo" />
            <Bars tw="gap-1">
              <Bar tw="w-[149px]" transitionDelay={transitionDelay} />
              <Bar tw="w-[140px]" transitionDelay={transitionDelay + 150} />
            </Bars>
            <Button status={status}>{status.toUpperCase()}</Button>
          </header>
          <div tw="h-[157px] bg-[#edeeef]"></div>
          {active && (
            <Bars tw="gap-1.5 p-4">
              <Bar tw="w-[222px]" transitionDelay={transitionDelay + 300} />
              <Bar tw="w-[185px]" transitionDelay={transitionDelay + 450} />
              <Bar tw="w-[160px]" transitionDelay={transitionDelay + 600} />
            </Bars>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Campaign;
