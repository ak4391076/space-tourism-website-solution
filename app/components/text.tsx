import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils";

const textVariants = cva("", {
  variants: {
    mobile: {
      "preset-1":
        "font-belle-fair text-[5rem] leading-[normal] tracking-normal",
      "preset-2":
        "font-belle-fair text-[3.5rem] leading-[normal] tracking-normal",
      "preset-3":
        "font-belle-fair text-[1.5rem] leading-[normal] tracking-normal",
      "preset-4":
        "font-belle-fair text-[1.125rem] leading-[normal] tracking-normal",
      "preset-6":
        "font-barlow-condensed text-[1rem] leading-[normal] tracking-[15%]",
      "preset-8":
        "font-barlow-condensed text-[0.875rem] leading-[normal] tracking-[15%]",
      "preset-9": "font-barlow text-[0.9375rem] leading-[180%] tracking-normal",
      "preset-6-from-desktop":
        "font-belle-fair text-[1.75rem] leading-[normal] tracking-normal",
      "preset-7-from-desktop":
        "font-barlow-condensed text-[0.875rem] leading-[normal] tracking-[0.125rem]",
      "preset-8-from-desktop":
        "font-barlow-condensed text-[1rem] leading-[normal] tracking-[0.125rem]",
      "preset-8-bold-from-desktop":
        "font-barlow-condensed text-[1rem] leading-[normal] tracking-[0.16875em] font-bold",
    },
    tablet: {
      "preset-1":
        "md:font-belle-fair md:text-[9rem] md:leading-[normal] md:tracking-normal",
      "preset-2":
        "md:font-belle-fair text-[5rem] md:leading-[normal] md:tracking-normal",
      "preset-3":
        "md:font-belle-fair md:text-[2.5rem] md:leading-[normal] md:tracking-normal",
      "preset-4":
        "md:font-belle-fair md:text-[1.5rem] md:leading-[normal] md:tracking-normal",
      "preset-5":
        "md:font-barlow-condensed md:text-[1.25rem] md:leading-[normal] md:tracking-[15%]",
      "preset-9":
        "md:font-barlow md:text-[1rem] md:leading-[180%] md:tracking-normal",
      "preset-4-from-desktop":
        "md:font-belle-fair md:text-[2rem] md:leading-[normal] md:tracking-normal",
      "preset-5-from-desktop":
        "md:font-barlow-condensed md:text-[1.75rem] md:leading-[normal] md:tracking-[0.25rem]",
    },
    desktop: {
      "preset-1":
        "lg:font-belle-fair lg:text-[9rem] lg:leading-[normal] lg:tracking-normal",
      "preset-2":
        "lg:font-belle-fair lg:text-[6rem] lg:leading-[normal] lg:tracking-normal",
      "preset-3":
        "lg:font-belle-fair lg:text-[3.5rem] lg:leading-[normal] lg:tracking-normal",
      "preset-4":
        "lg:font-belle-fair lg:text-[2rem] lg:leading-[normal] lg:tracking-normal",
      "preset-5":
        "lg:font-barlow-condensed lg:text-[1.75rem] lg:leading-[normal] lg:tracking-[0.25rem]",
      "preset-6":
        "lg:font-belle-fair lg:text-[1.75rem] lg:leading-[normal] lg:tracking-normal",
      "preset-7":
        "lg:font-barlow-condensed lg:text-[0.875rem] lg:leading-[normal] lg:tracking-[0.125rem]",
      "preset-8":
        "lg:font-barlow-condensed lg:text-[1rem] lg:leading-[normal] lg:tracking-[0.125rem]",
      "preset-8-bold":
        "lg:font-barlow-condensed lg:text-[1rem] lg:leading-[normal] lg:tracking-[0.16875em] lg:font-bold",
      "preset-9":
        "lg:font-barlow lg:text-[1.125rem] lg:leading-[180%] lg:tracking-normal",
    },
    color: {
      white: "text-white",
      "blue-300": "text-blue-300",
      "blue-900": "text-blue-900",
    },
  },
  defaultVariants: {
    color: "white",
  },
});

type TextOwnProps<E extends ElementType> = {
  as?: E;
  children: ReactNode;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof TextOwnProps<E>> &
  VariantProps<typeof textVariants>;

const Text = <E extends ElementType = "p">({
  className,
  mobile,
  tablet,
  desktop,
  color,
  as,
  children,
  ...rest
}: TextProps<E>) => {
  const Component = as || "p";

  return (
    <Component
      className={cn(
        textVariants({
          mobile,
          tablet,
          desktop,
          color,
          className,
        }),
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;
