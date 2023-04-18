import React from "react";
import Link from "next/link";

export default function Index({ children }) {
  return (
    <>
      <header className="site-header">
        <Link href="/">
          <svg
            width="886"
            height="902"
            className="site-logo"
            viewBox="0 0 886 902"
            fill="none"
          >
            <path
              d="M152.998 733.402L442.993 0V900.38L152.998 733.402Z"
              fill="#DA3D24"
            />
            <path
              d="M733.329 734.022L443.333 0.619904L443.333 901L733.329 734.022Z"
              fill="#F68029"
            />
            <path
              d="M1.46308 375.881L355.651 221.045L152.838 734.045L1.46308 375.881Z"
              fill="#E7584A"
            />
            <path
              d="M884.861 375.807L530.672 220.971L733.486 733.971L884.861 375.807Z"
              fill="#E7584A"
            />
            <path d="M153 733.907L443 0V901L153 733.907Z" fill="#DA3D24" />
            <path
              d="M733.34 734.527L443.34 0.619995L443.34 901.62L733.34 734.527Z"
              fill="#F68029"
            />
            <path
              d="M1.46309 375.931L355.657 221.074L152.841 734.143L1.46309 375.931Z"
              fill="#E7584A"
            />
            <path
              d="M884.875 375.857L530.681 221L733.497 734.069L884.875 375.857Z"
              fill="#E7584A"
            />
          </svg>
        </Link>
      </header>
      <section className="section-main">
        <div className="section-child">{children}</div>
      </section>
    </>
  );
}
