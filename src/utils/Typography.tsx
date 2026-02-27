import React from "react";
import { cn } from "@/lib/cn";

type Props<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  className?: string;
};

function Typography({ className, ...props }: Props<"p">) {
  return <p {...props} className={cn("text-sm font-primary", className)} />;
}

/**
 * Big page section heading (like hero titles)
 * mobile: 32px, sm: 44px, md: 50px
 */
Typography.Headers = function Headers({ className, ...props }: Props<"h2">) {
  return (
    <h2
      {...props}
      className={cn(
        "font-primary font-bold tracking-tight leading-[1.05] text-[32px] sm:text-[44px] md:text-[50px]",
        className
      )}
    />
  );
};

/**
 * Main H1
 * mobile: 28px, sm: 36px, md: 44px
 */
Typography.H1 = function H1({ className, ...props }: Props<"h1">) {
  return (
    <h1
      {...props}
      className={cn(
        "font-primary font-semibold tracking-tight leading-[1.1] text-[28px] sm:text-[36px] md:text-[44px]",
        className
      )}
    />
  );
};

/**
 * H2
 * mobile: 20px, sm: 24px, md: 28px
 */
Typography.H2 = function H2({ className, ...props }: Props<"h2">) {
  return (
    <h2
      {...props}
      className={cn(
        "font-primary font-semibold leading-[1.2] text-[20px] sm:text-[24px] md:text-[28px]",
        className
      )}
    />
  );
};

/**
 * H3
 * mobile: 18px, sm: 20px, md: 24px
 */
Typography.H3 = function H3({ className, ...props }: Props<"h3">) {
  return (
    <h3
      {...props}
      className={cn(
        "font-primary font-semibold leading-[1.25] text-[18px] sm:text-[20px] md:text-[24px]",
        className
      )}
    />
  );
};

/**
 * H4
 * mobile: 16px, sm: 18px
 */
Typography.H4 = function H4({ className, ...props }: Props<"h4">) {
  return (
    <h4
      {...props}
      className={cn(
        "font-primary font-semibold leading-[1.3] text-[16px] sm:text-[18px]",
        className
      )}
    />
  );
};

/**
 * Smaller title / label
 * mobile: 18px, sm: 20px, md: 30px
 */
Typography.Heading = function Heading({ className, ...props }: Props<"p">) {
  return (
    <p
      {...props}
      className={cn(
        "font-primary font-semibold leading-none text-[18px] sm:text-[20px] md:text-[30px]",
        className
      )}
    />
  );
};

/**
 * SubHeading
 * mobile: 14px, sm: 16px, md: 18px
 */
Typography.SubHeading = function SubHeading({
  className,
  ...props
}: Props<"h3">) {
  return (
    <h3
      {...props}
      className={cn(
        "font-primary font-medium leading-[1.35] text-[14px] sm:text-[16px] md:text-[18px]",
        className
      )}
    />
  );
};

/**
 * Body text
 * mobile: 14px, sm: 16px
 */
Typography.BigText = function BigText({ className, ...props }: Props<"p">) {
  return (
    <p
      {...props}
      className={cn(
        "font-primary font-normal leading-[1.6] text-[14px] sm:text-[18px]",
        className
      )}
    />
  );
};

Typography.Text = function Text({ className, ...props }: Props<"p">) {
  return (
    <p
      {...props}
      className={cn(
        "font-primary font-normal leading-[1.6] text-[14px] sm:text-[16px]",
        className
      )}
    />
  );
};

/**
 * Supporting text (neutral default)
 * NOTE: removed text-white/70 because it breaks on light backgrounds
 */
Typography.SubText = function SubText({ className, ...props }: Props<"p">) {
  return (
    <p
      {...props}
      className={cn(
        "font-primary font-normal leading-[1.6] text-[14px] sm:text-[16px] text-black/70",
        className
      )}
    />
  );
};

/**
 * Micro text / captions
 * NOTE: removed text-white/60 for same reason
 */
Typography.MicroText = function MicroText({ className, ...props }: Props<"p">) {
  return (
    <p
      {...props}
      className={cn(
        "font-primary font-normal leading-[1.4] text-[12px] text-black/60",
        className
      )}
    />
  );
};

export default Typography;