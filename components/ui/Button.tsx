import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-500 text-white shadow-glow hover:bg-accent-400 hover:shadow-glow-lg active:bg-accent-600",
  secondary:
    "bg-base-800/80 text-base-50 border border-white/10 hover:bg-base-700 hover:border-white/20",
  ghost: "text-base-200 hover:text-white hover:bg-white/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-[52px] px-7 text-[15px] gap-2.5",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    icon,
    iconPosition = "right",
  } = props;

  const classes = cn(
    "group relative inline-flex items-center justify-center rounded-full font-medium",
    "transition-all duration-300 ease-out-expo will-change-transform",
    "hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonAsButton).type ?? "button"}
      onClick={(props as ButtonAsButton).onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
