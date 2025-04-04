import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smooth: true,
            syncTouch: false,
        });
        window.lenis = lenis;
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
            window.lenis = null;
        };
    }, []);
    return null;
};

export default SmoothScroll;