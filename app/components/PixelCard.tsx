"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./PixelCard.module.css";

type PixelCardVariant = "default" | "blue" | "yellow" | "pink";

export type PixelCardProps = {
  variant?: PixelCardVariant;
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
};

type VariantConfig = {
  activeColor: string | null;
  gap: number;
  speed: number;
  colors: string;
  noFocus: boolean;
};

const VARIANTS: Record<PixelCardVariant, VariantConfig> = {
  default: {
    activeColor: "#09090b",
    gap: 5,
    speed: 35,
    colors: "#f8fafc,#f1f5f9,#cbd5e1",
    noFocus: false,
  },
  blue: {
    activeColor: "#0ea5e9",
    gap: 10,
    speed: 25,
    colors: "#e0f2fe,#7dd3fc,#0ea5e9",
    noFocus: false,
  },
  yellow: {
    activeColor: "#eab308",
    gap: 3,
    speed: 20,
    colors: "#fef08a,#fde047,#eab308",
    noFocus: false,
  },
  pink: {
    activeColor: "#000000",
    gap: 6,
    speed: 35,
    colors: "#f9001d, #fda4af, #000000",
    noFocus: false,
  },
};

class Pixel {
  private size = 0;
  private readonly sizeStep = Math.random() * 0.4;
  private readonly minSize = 0.5;
  private readonly maxSizeInteger = 2;
  private readonly maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
  private counter = 0;
  private readonly counterStep: number;
  isIdle = false;
  private isReverse = false;
  private isShimmer = false;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly context: CanvasRenderingContext2D,
    private readonly x: number,
    private readonly y: number,
    private readonly color: string,
    private readonly speed: number,
    private readonly delay: number,
  ) {
    this.counterStep = Math.random() * 4 + (canvas.width + canvas.height) * 0.01;
  }

  private getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) this.isShimmer = true;
    if (this.isShimmer) this.shimmer();
    else this.size += this.sizeStep;
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    }
    this.size -= 0.1;
    this.draw();
  }

  private shimmer() {
    if (this.size >= this.maxSize) this.isReverse = true;
    else if (this.size <= this.minSize) this.isReverse = false;
    if (this.isReverse) this.size -= this.speed;
    else this.size += this.speed;
  }
}

function getEffectiveSpeed(value: number, reducedMotion: boolean) {
  const parsed = Math.trunc(value);
  if (parsed <= 0 || reducedMotion) return 0;
  if (parsed >= 100) return 100 * 0.001;
  return parsed * 0.001;
}

export default function PixelCard({
  variant = "default",
  gap,
  speed,
  colors,
  noFocus,
  className = "",
  style,
  children = null,
}: PixelCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number | null>(null);
  const timePreviousRef = useRef(performance.now());
  const reducedMotion = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  ).current;

  const variantConfig = VARIANTS[variant];
  const finalGap = gap ?? variantConfig.gap;
  const finalSpeed = speed ?? variantConfig.speed;
  const finalColors = colors ?? variantConfig.colors;
  const finalNoFocus = noFocus ?? variantConfig.noFocus;

  useEffect(() => {
    const initPixels = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      const width = Math.floor(container.getBoundingClientRect().width);
      const height = Math.floor(container.getBoundingClientRect().height);
      const context = canvas.getContext("2d");
      if (!context || width <= 0 || height <= 0) return;

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const colorsArray = finalColors.split(",");
      const pixels: Pixel[] = [];
      for (let x = 0; x < width; x += Math.max(1, Math.trunc(finalGap))) {
        for (let y = 0; y < height; y += Math.max(1, Math.trunc(finalGap))) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const distance = Math.sqrt(dx * dx + dy * dy);
          pixels.push(
            new Pixel(
              canvas,
              context,
              x,
              y,
              colorsArray[Math.floor(Math.random() * colorsArray.length)],
              getEffectiveSpeed(finalSpeed, reducedMotion),
              reducedMotion ? 0 : distance,
            ),
          );
        }
      }
      pixelsRef.current = pixels;
    };

    const animate = (method: "appear" | "disappear") => {
      animationRef.current = requestAnimationFrame(() => animate(method));
      const timeNow = performance.now();
      const timePassed = timeNow - timePreviousRef.current;
      if (timePassed < 1000 / 60) return;
      timePreviousRef.current = timeNow - (timePassed % (1000 / 60));

      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      let allIdle = true;
      for (const pixel of pixelsRef.current) {
        pixel[method]();
        if (!pixel.isIdle) allIdle = false;
      }
      if (allIdle && animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };

    const handleAnimation = (method: "appear" | "disappear") => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(() => animate(method));
    };

    initPixels();
    const observer = new ResizeObserver(initPixels);
    if (containerRef.current) observer.observe(containerRef.current);

    const container = containerRef.current;
    const onMouseEnter = () => handleAnimation("appear");
    const onMouseLeave = () => handleAnimation("disappear");
    const onFocus = (event: globalThis.FocusEvent) => {
      if (!container?.contains(event.relatedTarget as Node | null)) handleAnimation("appear");
    };
    const onBlur = (event: globalThis.FocusEvent) => {
      if (!container?.contains(event.relatedTarget as Node | null)) handleAnimation("disappear");
    };

    container?.addEventListener("mouseenter", onMouseEnter);
    container?.addEventListener("mouseleave", onMouseLeave);
    if (!finalNoFocus) {
      container?.addEventListener("focus", onFocus);
      container?.addEventListener("blur", onBlur);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
      container?.removeEventListener("mouseenter", onMouseEnter);
      container?.removeEventListener("mouseleave", onMouseLeave);
      if (!finalNoFocus) {
        container?.removeEventListener("focus", onFocus);
        container?.removeEventListener("blur", onBlur);
      }
    };
  }, [finalColors, finalGap, finalNoFocus, finalSpeed, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`${styles.pixelCard} ${className}`}
      style={{ ...style, "--pixel-card-active-color": variantConfig.activeColor ?? "#09090b" } as CSSProperties}
      tabIndex={finalNoFocus ? -1 : 0}
    >
      <canvas className={styles.pixelCanvas} ref={canvasRef} aria-hidden="true" />
      {children}
    </div>
  );
}
