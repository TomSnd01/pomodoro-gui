import React, { useState } from "react";
import { VolumeIcon } from "@/components/icons/home/volume/VolumeIcon";
import styles from "./page.module.css";

type CustomIconProps = {};

export default function VolumeSlider() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={styles.volumeParent}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <VolumeIcon size={24} />
      {isHovering && (
        <input type="range" min="0" max="100" className={styles.volumeSlider} />
      )}
    </div>
  );
}
