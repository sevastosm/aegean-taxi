"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import styles from "./gridBox.module.css";

export default function GridBox({
  icon = "",
  title = "",
  hoverImg = "",
}: {
  icon: any;
  title: string;
  hoverImg: any;
}) {
  return (
    <Box
      sx={{
        position: `relative`,
        width: { xs: 164, md: 171 },
        height: { xs: 164, md: 171 },
        border: `1px solid #ccc`,
        textAlign: `center`,
        marginLeft: "-1px",
        marginTop: `-1px`,
        transition: `all 0.5s`,
      }}
      className={styles.gridBox}
    >
      <div className={styles.boxContent}>
        <div className={styles.boxIcon}>
          <Image src={icon} alt="icon" width={100} height={100} />
        </div>
        <div className={styles.boxTitle}>{title}</div>

        <div className={styles.boxHoverImg}>
          <Image src={hoverImg} alt="hover image" width={171} height={170} />
        </div>
      </div>
    </Box>
  );
}
