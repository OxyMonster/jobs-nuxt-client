<template>
  <div class="SignIn__info">
    <style>
      @keyframes Oval_d {
        0% {
          d: path(
            "M69.7654,136.95C105.436,131.537,130.869,106.525,141.211,72.2077C151.554,37.8903,106.241,8.62363,69.7654,18.0969C33.2899,27.5701,11.1531,44.9831,5.36411,77.5237C-0.42485,110.064,34.0947,142.364,69.7654,136.95Z"
          );
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        33.3333% {
          d: path(
            "M69.7654,136.95C105.839,137.58,139.074,107.986,141.211,72.2077C143.512,33.6825,102.039,22.7448,69.7654,18.0969C33.9078,12.9329,-2.67142,45.7996,5.36411,77.5237C13.3996,109.248,32.2545,136.295,69.7654,136.95Z"
          );
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        66.6667% {
          d: path(
            "M69.7654,136.95C101.137,143.626,148.986,102.677,134.932,69.7047C119.731,34.0409,104.183,21.4716,71.7266,24.5948C32.1375,28.4044,16.2035,53.1301,9.77685,77.5216C3.35018,101.913,33.0705,129.141,69.7654,136.95Z"
          );
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          d: path(
            "M69.7654,136.95C105.436,131.537,130.869,106.525,141.211,72.2077C151.554,37.8903,106.241,8.62363,69.7654,18.0969C33.2899,27.5701,11.1531,44.9831,5.36411,77.5237C-0.42485,110.064,34.0947,142.364,69.7654,136.95Z"
          );
        }
      }
      @keyframes a0_t {
        0% {
          transform: translate(72px, 111.5px);
        }
        53.3333% {
          transform: translate(72px, 111.5px);
        }
        58.3333% {
          transform: translate(35px, 111.5px);
        }
        73.3333% {
          transform: translate(35px, 111.5px);
        }
        96.6666% {
          transform: translate(35px, 111.5px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          transform: translate(72px, 111.5px);
        }
      }
      @keyframes Group-50_t {
        0% {
          transform: scale(1, 1) translate(-35px, -6.5px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        36.6666% {
          transform: scale(1, 1) translate(-35px, -6.5px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        40% {
          transform: scale(0.8, 0.8) translate(-35px, -6.5px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        43.3333% {
          transform: scale(1, 1) translate(-35px, -6.5px);
        }
        73.3333% {
          transform: scale(1, 1) translate(-35px, -6.5px);
        }
        96.6666% {
          transform: scale(1, 1) translate(-35px, -6.5px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          transform: scale(1, 1) translate(-35px, -6.5px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
      }
      @keyframes Group-50_o {
        0% {
          opacity: 1;
        }
        53.3333% {
          opacity: 1;
        }
        58.3333% {
          opacity: 0;
        }
        73.3333% {
          opacity: 0;
        }
        96.6667% {
          opacity: 0;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes Group-39_t {
        0% {
          transform: translate(73.09px, 27.8px) scale(1, 1)
            translate(-25px, -25px);
        }
        50% {
          transform: translate(73.09px, 27.8px) scale(1, 1)
            translate(-25px, -25px);
        }
        58.3333% {
          transform: translate(73.09px, 71.862305px) scale(1.5, 1.5)
            translate(-25px, -25px);
        }
        73.3333% {
          transform: translate(73.09px, 71.8623px) scale(1.5, 1.5)
            translate(-25px, -25px);
        }
        86.6666% {
          transform: translate(73.09px, 71.8623px) scale(1.5, 1.5)
            translate(-25px, -25px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          transform: translate(73.09px, 27.8px) scale(1, 1)
            translate(-25px, -25px);
        }
      }
      @keyframes Line_t {
        0% {
          transform: translate(25px, 26.019493px) scale(1, 1)
            translate(-25px, -26.019492px);
        }
        63.3333% {
          transform: translate(25px, 26.019493px) scale(1, 1)
            translate(-25px, -26.019492px);
        }
        68.3333% {
          transform: translate(25px, 26.019493px) scale(1.31, 1.31)
            translate(-25px, -26.019492px);
        }
        73.3333% {
          transform: translate(25px, 26.019493px) scale(1, 1)
            translate(-25px, -26.019492px);
        }
        100% {
          transform: translate(25px, 26.019493px) scale(1, 1)
            translate(-25px, -26.019492px);
        }
      }
      @keyframes a1_t {
        0% {
          transform: translate(37px, 63px);
        }
        46.6666% {
          transform: translate(37px, 63px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        51.6666% {
          transform: translate(0px, 63px);
        }
        73.3333% {
          transform: translate(0px, 63px);
        }
        96.6666% {
          transform: translate(0px, 63px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          transform: translate(37px, 63px);
        }
      }
      @keyframes a1_o {
        0% {
          opacity: 1;
        }
        46.6667% {
          opacity: 1;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        51.6667% {
          opacity: 0;
        }
        73.3333% {
          opacity: 0;
        }
        96.6667% {
          opacity: 0;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes a2_w {
        0% {
          width: 1.02128px;
        }
        16.6667% {
          width: 45.3546px;
        }
        73.3333% {
          width: 45.3546px;
        }
        96.6667% {
          width: 45.3546px;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          width: 1.02128px;
        }
      }
      @keyframes a3_t {
        0% {
          transform: translate(37px, 84px);
        }
        50% {
          transform: translate(37px, 84px);
        }
        55% {
          transform: translate(0px, 84px);
        }
        73.3333% {
          transform: translate(0px, 84px);
        }
        96.6666% {
          transform: translate(0px, 84px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          transform: translate(37px, 84px);
        }
      }
      @keyframes a3_o {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 1;
        }
        55% {
          opacity: 0;
        }
        73.3333% {
          opacity: 0;
        }
        96.6667% {
          opacity: 0;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes a4_w {
        0% {
          width: 1.02128px;
        }
        16.6667% {
          width: 1.02128px;
        }
        33.3333% {
          width: 50.0213px;
        }
        73.3333% {
          width: 50.0213px;
        }
        96.6667% {
          width: 50.0213px;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          width: 1.02128px;
        }
      }
      @keyframes check-2_t {
        0% {
          transform: translate(88.3204px, 99.9999px) scale(1, 1)
            translate(-4.50006px, -4.50003px);
          animation-timing-function: cubic-bezier(0.785, 0.135, 0.61, 1.75);
        }
        56.6666% {
          transform: translate(88.3204px, 99.9999px) scale(1, 1)
            translate(-4.50006px, -4.50003px);
          animation-timing-function: cubic-bezier(0.785, 0.135, 0.61, 1.75);
        }
        61.6666% {
          transform: translate(88.3204px, 99.9999px) scale(3, 3)
            translate(-4.50006px, -4.50003px);
        }
        83.6206% {
          transform: translate(88.3204px, 99.9999px) scale(3, 3)
            translate(-4.50006px, -4.50003px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        86.6666% {
          transform: translate(88.3204px, 99.9999px) scale(1, 1)
            translate(-4.50006px, -4.50003px);
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          transform: translate(88.3204px, 99.9999px) scale(1, 1)
            translate(-4.50006px, -4.50003px);
        }
      }
      @keyframes check-2_o {
        0% {
          opacity: 0;
          animation-timing-function: cubic-bezier(0.785, 0.135, 0.61, 1.75);
        }
        56.6667% {
          opacity: 0;
          animation-timing-function: cubic-bezier(0.785, 0.135, 0.61, 1.75);
        }
        61.6667% {
          opacity: 1;
        }
        83.6207% {
          opacity: 1;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        86.6667% {
          opacity: 0;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }
        100% {
          opacity: 0;
        }
      }
    </style>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 144 169"
      class="SignIn__logo"
    >
      <defs>
        <ellipse
          id="path-1"
          rx="25"
          ry="25"
          transform="translate(0,0) translate(25,25)"
        ></ellipse>
        <mask id="mask-2" fill="white"><use xlink:href="#path-1"></use></mask>
        <mask id="mask-2-2" fill="white"><use xlink:href="#path-1"></use></mask>
        <clipPath id="ClipPath-1">
          <rect
            width="1.02128"
            height="10.8889"
            fill="#5187bd"
            stroke="none"
            transform="translate(33.9081,4.23145) translate(-34.9294,-5.44444)"
            style="animation: 6s linear 0s infinite normal both running a2_w"
          ></rect>
        </clipPath>
        <clipPath id="ClipPath-2">
          <rect
            width="1.02128"
            height="7.77778"
            fill="#5187bd"
            rx="4"
            stroke="none"
            transform="translate(35,2) translate(-36.0213,-3.88889)"
            style="animation: 6s linear 0s infinite normal both running a4_w"
          ></rect>
        </clipPath>
      </defs>
      <path
        id="Oval"
        d="M69.7654,136.95C105.436,131.537,130.869,106.525,141.211,72.2077C151.554,37.8903,106.241,8.62363,69.7654,18.0969C33.2899,27.5701,11.1531,44.9831,5.36411,77.5237C-0.42485,110.064,34.0947,142.364,69.7654,136.95Z"
        fill="#DDE8F2"
        stroke="none"
        stroke-width="1"
        fill-rule="evenodd"
        transform="translate(73.7173,76.9202) rotate(-271) translate(-73.7173,-76.9202)"
        style="animation: 3s linear 0s infinite normal both running Oval_d"
      ></path>
      <ellipse
        id="Oval-2"
        fill="#5187BD"
        opacity="0.0996094"
        rx="37"
        ry="6"
        stroke="none"
        stroke-width="1"
        fill-rule="evenodd"
        transform="translate(0,0) translate(69.8782,162.326)"
      ></ellipse>
      <g
        id="Group-50"
        style="animation: 6s linear 0s infinite normal both running a0_t"
      >
        <g
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          opacity="1"
          transform="translate(72,111.5) translate(-35,-6.5)"
          style="
            animation: 6s linear 0s infinite normal both running Group-50_t,
              6s linear 0s infinite normal both running Group-50_o;
          "
        >
          <rect
            id="Rectangle-12-Copy-18"
            stroke="#5187BD"
            fill="#5187BD"
            width="69"
            height="12"
            rx="2"
            transform="translate(0,0) translate(0.5,0.5)"
            style="animation: 6s linear 0s infinite normal both running a4_w"
          ></rect>
          <rect
            id="Rectangle-14-Copy-24"
            fill="#FFFFFF"
            width="24"
            height="4"
            transform="translate(0,0) translate(22,4)"
          ></rect>
        </g>
      </g>
      <g
        id="Group-39"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        transform="translate(73.09,27.8) translate(-25,-25)"
        style="animation: 6s linear 0s infinite normal both running Group-39_t"
      >
        <g id="avatar_placeholder_man">
          <use id="Mask" fill="#FFFFFF" xlink:href="#path-1"></use>
          <path
            d="M25,-0.793651C10.7638,-0.793651,-0.793698,10.7638,-0.793651,25C-0.793606,39.2362,10.7638,50.7937,25,50.7937C39.2362,50.7937,50.7936,39.2362,50.7937,25C50.7937,10.7638,39.2362,-0.793651,25,-0.793651ZM25,0.771223C38.3914,0.771223,49.232,11.6087,49.2319,25C49.2319,30.6283,47.2983,35.7908,44.0839,39.9025C43.42,38.7791,42.4719,37.8194,41.3068,37.1537L31.7097,31.694L31.7097,27.1348C32.8924,25.647,33.6273,23.7358,33.6273,21.675L33.6273,19.0932C33.6893,18.8997,33.6893,18.6912,33.6273,18.4981L33.6273,16.4546C33.6263,16.5529,33.6273,16.5624,33.6273,16.3948L33.6273,10.7556L33.6273,10.6957L33.6273,10.6359C33.4373,9.17712,32.9943,7.86293,32.1285,6.85439C31.8703,6.55374,31.562,6.30189,31.2312,6.07668C30.0256,5.73217,28.7821,5.47482,27.5032,5.3336L27.4465,6.1365C27.4267,6.4399,27.2785,6.63499,26.9679,6.85439C26.6712,7.06429,26.2311,7.23907,25.8281,7.27631L25.7683,7.27631L21.568,7.27631C18.6822,7.27631,16.3507,9.651,16.3507,12.5534L16.3507,16.3948L16.3507,16.4546L16.3507,17.9533C16.3103,18.1113,16.3103,18.2787,16.3507,18.4351L16.3507,21.675C16.3507,23.7359,17.0855,25.6466,18.2682,27.1348L18.2682,31.694L8.79081,37.0939C7.58327,37.7843,6.61298,38.7682,5.93184,39.9214C2.70832,35.8066,0.768092,30.6371,0.768074,25C0.76803,11.6087,11.6086,0.771223,25,0.771223ZM28.7091,7.27631C29.5601,7.34724,30.2299,7.58218,30.6864,8.11385C31.2116,8.7258,31.5514,9.6617,31.7097,10.8784L31.7097,16.3979L31.7097,16.4546L31.7097,16.697C31.3193,16.5179,30.9152,16.3504,30.507,16.2751C29.364,16.0647,28.1986,16.1075,27.0875,16.1586C25.9765,16.2038,24.8694,16.2102,24.0271,15.976C23.1847,15.7432,22.5454,15.3814,21.9868,14.4143C21.7872,14.0396,21.3216,13.8327,20.9099,13.9357C20.5831,14.0356,20.3193,14.3224,20.2487,14.6567C20.2836,14.5261,20.1469,14.8253,19.8866,15.1353C19.6263,15.4435,19.2484,15.8177,18.8696,16.1555C18.6569,16.3454,18.4706,16.4795,18.2682,16.6341L18.2682,16.4546L18.2682,16.3948L18.2682,12.5534C18.2682,10.6686,19.7256,9.19698,21.568,9.19698L25.8281,9.19698L25.8911,9.19698C26.645,9.14539,27.3883,8.8825,28.0479,8.41612C28.391,8.17334,28.4767,7.66451,28.7091,7.27631ZM21.4483,16.2184C22.1212,16.8697,22.7461,17.6153,23.5485,17.8368C24.7648,18.1726,26.0055,18.1239,27.1474,18.0761C28.2893,18.0278,29.3548,17.9893,30.148,18.136C30.8582,18.2649,31.3277,18.5346,31.7097,19.0932L31.7097,21.675C31.7097,25.4751,28.7208,28.4541,24.9874,28.4541C21.2541,28.4541,18.2682,25.4751,18.2682,21.675L18.2682,18.9767C18.4579,18.8848,18.622,18.737,18.8098,18.6177C19.2625,18.3301,19.6895,17.9869,20.1291,17.5944C20.5686,17.2023,20.9923,16.7964,21.3287,16.3979C21.3772,16.3415,21.4031,16.2739,21.4483,16.2184ZM20.1889,28.9956C21.5545,29.905,23.2245,30.3747,24.9874,30.3747C26.7503,30.3747,28.4235,29.905,29.7891,28.9956L29.7891,32.2356L29.7891,32.6543C29.0157,34.1028,28.3313,35.6297,26.609,37.0971L26.5491,37.1537L24.9874,38.5958L23.5485,37.1537L23.4288,37.0372C22.0858,35.5875,20.8185,33.8698,20.1889,32.2356L20.1889,28.9956ZM17.5503,34.3357L16.3507,38.5958L16.3507,38.6556L16.3507,38.7155C16.1701,40.2092,17.7898,41.4698,19.1687,40.8156L19.1687,40.7558L22.7078,39.0177L24.0271,40.2772L24.0271,49.1815C20.594,49.0451,17.3501,48.2007,14.43,46.7823L14.43,45.6771L12.5093,45.6771L12.5093,45.7401C10.5748,44.5732,8.82087,43.1483,7.28891,41.5052C7.79268,40.3528,8.62715,39.3577,9.75114,38.7155L17.5503,34.3357ZM19.4678,34.3357C20.0823,35.4423,20.6917,36.507,21.5082,37.456L18.328,39.0744C18.2552,39.1099,18.2486,39.1191,18.2682,38.9579L19.4678,34.3357ZM32.7299,34.4554L40.3496,38.8351C41.424,39.449,42.2311,40.3968,42.7174,41.4957C41.1939,43.1313,39.4509,44.5504,37.5284,45.7149L37.5284,45.6771L35.6078,45.6771L35.6078,46.7634C33.4794,47.8018,31.1791,48.5333,28.7563,48.9108C28.8004,48.8006,28.8287,48.6808,28.8287,48.555C28.8287,48.0247,28.3986,47.5946,27.8684,47.5946C27.3382,47.5946,26.9081,48.0247,26.9081,48.555C26.9081,48.7721,26.9943,48.964,27.1159,49.1249C26.73,49.1583,26.3386,49.1696,25.9477,49.1847L25.9477,40.337L27.3898,39.0177L31.1682,40.8156C32.566,41.449,34.1821,40.2381,33.9894,38.7155L33.9894,38.5958L33.9894,38.536C33.9894,38.536,33.454,36.9162,32.9661,35.2961C32.874,34.9904,32.8189,34.7472,32.7299,34.4554ZM30.8092,34.7545C30.9198,35.1369,30.9886,35.4964,31.1084,35.8943C31.5751,37.444,32.0163,38.791,32.0687,38.9548C32.0852,39.0837,32.0688,39.1256,31.949,39.0713L28.7091,37.5127C29.5991,36.5385,30.3366,35.6321,30.8092,34.7545ZM27.8684,43.7564C27.3382,43.7564,26.9081,44.1866,26.9081,44.7168C26.9081,45.247,27.3382,45.6771,27.8684,45.6771C28.3986,45.6771,28.8287,45.247,28.8287,44.7168C28.8287,44.1866,28.3986,43.7564,27.8684,43.7564Z"
            fill="#5187BD"
            fill-rule="nonzero"
            mask="url(#mask-2)"
          ></path>
          <path
            id="Line"
            d="M22.1812,25.8852C21.9685,25.7091,21.9387,25.3939,22.1148,25.1812C22.2909,24.9685,22.6061,24.9387,22.8188,25.1148C23.5716,25.7379,24.2961,26.039,25,26.039C25.7039,26.039,26.4284,25.7379,27.1812,25.1148C27.3939,24.9387,27.7091,24.9685,27.8852,25.1812C28.0613,25.3939,28.0315,25.7091,27.8188,25.8852C26.8978,26.6475,25.9557,27.039,25,27.039C24.0443,27.039,23.1022,26.6475,22.1812,25.8852Z"
            fill="#5187BD"
            mask="url(#mask-2-2)"
            transform=""
            style="animation: 6s linear 0s infinite normal both running Line_t"
          ></path>
        </g>
        <path
          id="Frame"
          d="M25,50.8C10.7511,50.8,-0.8,39.2489,-0.8,25C-0.8,10.7511,10.7511,-0.8,25,-0.8C39.2489,-0.8,50.8,10.7511,50.8,25C50.8,39.2489,39.2489,50.8,25,50.8ZM25,49.2C38.3653,49.2,49.2,38.3653,49.2,25C49.2,11.6347,38.3653,0.8,25,0.8C11.6347,0.8,0.8,11.6347,0.8,25C0.8,38.3653,11.6347,49.2,25,49.2Z"
          fill="#5187BD"
          fill-rule="nonzero"
        ></path>
      </g>
      <g
        opacity="1"
        transform="translate(72,70) translate(-35,-7)"
        style="
          animation: 6s linear 0s infinite normal both running a1_t,
            6s linear 0s infinite normal both running a1_o;
        "
      >
        <rect
          id="Rectangle-12-Copy-23"
          width="70"
          height="14"
          rx="4"
          fill="#FFFFFF"
          stroke="none"
          stroke-width="1"
          fill-rule="evenodd"
        ></rect>
        <path
          id="Rectangle-12-Copy-4"
          d="M2.97872,1.55556C2.15617,1.55556,1.48936,2.252,1.48936,3.11111L1.48936,10.8889C1.48936,11.748,2.15617,12.4444,2.97872,12.4444L67.0213,12.4444C67.8438,12.4444,68.5106,11.748,68.5106,10.8889L68.5106,3.11111C68.5106,2.252,67.8438,1.55556,67.0213,1.55556L2.97872,1.55556ZM2.97872,0L67.0213,0C68.6664,0,70,1.39289,70,3.11111L70,10.8889C70,12.6071,68.6664,14,67.0213,14L2.97872,14C1.33362,14,0,12.6071,0,10.8889L0,3.11111C0,1.39289,1.33362,0,2.97872,0Z"
          fill="#5187BD"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
        ></path>
        <g
          clip-path="url(#ClipPath-1)"
          transform="translate(25,6.76025) translate(-21,-3.9917)"
        >
          <rect
            id="Rectangle-14-Copy-5"
            width="18.5319"
            height="4.66667"
            fill="#5187BD"
            opacity="0.502846"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
            transform="translate(-4,-2.76855) translate(4,5)"
          ></rect>
          <rect
            id="Rectangle-14-Copy-6"
            width="10"
            height="4.66667"
            fill="#5187BD"
            opacity="0.502846"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
            transform="translate(-4,-2.76855) translate(36,5)"
          ></rect>
          <path
            id="@"
            d="M33.5845,6.30859C33.5845,6.76758,33.5055,7.19564,33.3477,7.59277C33.1898,7.98991,32.9709,8.30078,32.6909,8.52539C32.411,8.75,32.092,8.8623,31.7339,8.8623C31.4767,8.8623,31.244,8.81104,31.0356,8.7085C30.8273,8.60596,30.6646,8.46354,30.5474,8.28125L30.4741,8.28125C30.1258,8.66862,29.7026,8.8623,29.2046,8.8623C28.6089,8.8623,28.1515,8.68815,27.8325,8.33984C27.5135,7.99153,27.354,7.50489,27.354,6.87988C27.354,6.4209,27.4549,6.01481,27.6567,5.66162C27.8586,5.30843,28.1499,5.03662,28.5308,4.84619C28.9116,4.65576,29.3527,4.56055,29.854,4.56055C30.1177,4.56055,30.4082,4.5874,30.7256,4.64111C31.043,4.69482,31.3335,4.76725,31.5972,4.8584L31.4946,6.91895L31.4849,7.37793C31.4849,7.65788,31.5646,7.79785,31.7241,7.79785C31.8934,7.79785,32.0309,7.65625,32.1367,7.37305C32.2425,7.08984,32.2954,6.73177,32.2954,6.29883C32.2954,5.52083,32.0757,4.92025,31.6362,4.49707C31.1968,4.07389,30.5734,3.8623,29.7661,3.8623C29.1476,3.8623,28.6097,3.99088,28.1523,4.24805C27.695,4.50521,27.3459,4.87386,27.105,5.354C26.8641,5.83415,26.7437,6.39648,26.7437,7.04102C26.7437,7.8711,26.9756,8.51155,27.4395,8.9624C27.9033,9.41325,28.5584,9.63867,29.4048,9.63867C29.7824,9.63867,30.1901,9.59798,30.6279,9.5166C31.0658,9.43522,31.4946,9.31966,31.9146,9.16992L31.9146,10.2881C31.1854,10.5973,30.3716,10.752,29.4731,10.752C28.2101,10.752,27.2181,10.4224,26.4971,9.76318C25.776,9.104,25.4155,8.19011,25.4155,7.02148C25.4155,6.19791,25.6019,5.4598,25.9746,4.80713C26.3473,4.15446,26.8617,3.65153,27.5176,3.29834C28.1735,2.94515,28.9165,2.76855,29.7466,2.76855C30.5083,2.76855,31.1813,2.91341,31.7656,3.20313C32.3499,3.49284,32.7992,3.90543,33.1133,4.44092C33.4274,4.9764,33.5845,5.59895,33.5845,6.30859ZM28.7261,6.87012C28.7261,7.19564,28.7855,7.43164,28.9043,7.57812C29.0231,7.72461,29.1802,7.79785,29.3755,7.79785C29.6261,7.79785,29.8101,7.69694,29.9272,7.49512C30.0444,7.29329,30.1209,6.93522,30.1567,6.4209L30.2056,5.65918C30.0754,5.63965,29.9647,5.62988,29.8735,5.62988C29.522,5.62988,29.2428,5.73893,29.0361,5.95703C28.8294,6.17513,28.7261,6.47949,28.7261,6.87012Z"
            fill="#5187BD"
            opacity="0.502846"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
            transform="translate(-4,-2.76855)"
          ></path>
        </g>
      </g>
      <g
        opacity="1"
        transform="translate(72,91) translate(-35,-7)"
        style="
          animation: 6s linear 0s infinite normal both running a3_t,
            6s linear 0s infinite normal both running a3_o;
        "
      >
        <rect
          id="Rectangle-12-Copy-22"
          fill="#FFFFFF"
          width="70"
          height="14"
          rx="4"
          stroke="none"
          stroke-width="1"
          fill-rule="evenodd"
        ></rect>
        <g
          clip-path="url(#ClipPath-2)"
          transform="translate(27.5,7.33333) translate(-23.5,-2.33333)"
        >
          <path
            id="Rectangle-14-Copy-7"
            d="M6.33333,5L6.66667,5C7.95533,5,9,6.04467,9,7.33333C9,8.622,7.95533,9.66667,6.66667,9.66667L6.33333,9.66667C5.04467,9.66667,4,8.622,4,7.33333C4,6.04467,5.04467,5,6.33333,5Z"
            fill="#5187BD"
            opacity="0.502846"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
            transform="translate(-4,-5)"
          ></path>
          <path
            id="Rectangle-14-Copy-8"
            d="M13.3333,5L13.6667,5C14.9553,5,16,6.04467,16,7.33333C16,8.622,14.9553,9.66667,13.6667,9.66667L13.3333,9.66667C12.0447,9.66667,11,8.622,11,7.33333C11,6.04467,12.0447,5,13.3333,5Z"
            fill="#5187BD"
            opacity="0.502846"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
            transform="translate(-4,-5)"
          ></path>
          <path
            id="Rectangle-14-Copy-9"
            d="M20.3333,5L20.6667,5C21.9553,5,23,6.04467,23,7.33333C23,8.622,21.9553,9.66667,20.6667,9.66667L20.3333,9.66667C19.0447,9.66667,18,8.622,18,7.33333C18,6.04467,19.0447,5,20.3333,5Z"
            fill="#5187BD"
            opacity="0.502846"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
            transform="translate(-4,-5)"
          ></path>
          <path
            id="Rectangle-14-Copy-10"
            d="M27.3333,5L27.6667,5C28.9553,5,30,6.04467,30,7.33333C30,8.622,28.9553,9.66667,27.6667,9.66667L27.3333,9.66667C26.0447,9.66667,25,8.622,25,7.33333C25,6.04467,26.0447,5,27.3333,5Z"
            fill="#5187BD"
            opacity="0.502846"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
            transform="translate(-4,-5)"
          ></path>
          <path
            id="Rectangle-14-Copy-11"
            d="M34.3333,5L34.6667,5C35.9553,5,37,6.04467,37,7.33333C37,8.622,35.9553,9.66667,34.6667,9.66667L34.3333,9.66667C33.0447,9.66667,32,8.622,32,7.33333C32,6.04467,33.0447,5,34.3333,5Z"
            fill="#5187BD"
            opacity="0.502846"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
            transform="translate(-4,-5)"
          ></path>
          <path
            id="Rectangle-14-Copy-12"
            d="M41.3333,5L41.6667,5C42.9553,5,44,6.04467,44,7.33333C44,8.622,42.9553,9.66667,41.6667,9.66667L41.3333,9.66667C40.0447,9.66667,39,8.622,39,7.33333C39,6.04467,40.0447,5,41.3333,5Z"
            fill="#5187BD"
            opacity="0.502846"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
            transform="translate(-4,-5)"
          ></path>
          <path
            id="Rectangle-14-Copy-13"
            d="M48.3333,5L48.6667,5C49.9553,5,51,6.04467,51,7.33333C51,8.622,49.9553,9.66667,48.6667,9.66667L48.3333,9.66667C47.0447,9.66667,46,8.622,46,7.33333C46,6.04467,47.0447,5,48.3333,5Z"
            fill="#5187BD"
            opacity="0.502846"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
            transform="translate(-4,-5)"
          ></path>
        </g>
        <path
          id="Rectangle-12"
          d="M2.97872,1.55556C2.15617,1.55556,1.48936,2.252,1.48936,3.11111L1.48936,10.8889C1.48936,11.748,2.15617,12.4444,2.97872,12.4444L67.0213,12.4444C67.8438,12.4444,68.5106,11.748,68.5106,10.8889L68.5106,3.11111C68.5106,2.252,67.8438,1.55556,67.0213,1.55556L2.97872,1.55556ZM2.97872,0L67.0213,0C68.6664,0,70,1.39289,70,3.11111L70,10.8889C70,12.6071,68.6664,14,67.0213,14L2.97872,14C1.33362,14,0,12.6071,0,10.8889L0,3.11111C0,1.39289,1.33362,0,2.97872,0Z"
          fill="#5187BD"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
        ></path>
      </g>
      <g id="check-2" opacity="0" transform="" style="">
        <path
          id="check_sign-copy-3"
          d="M7.49688,1.60853C7.91542,0.980705,8.76367,0.811053,9.39148,1.22961C10.0193,1.64816,10.1889,2.49641,9.7704,3.12423L6.25888,8.39161C5.7181,9.2028,4.52614,9.2028,3.98536,8.39161L2.2296,5.75792C1.81106,5.1301,1.81737,4.54451,2.44518,4.12596C3.073,3.70741,3.7465,4.10239,4.16505,4.73022L4.78405,5.65874L7.49688,1.60853Z"
          fill="#5187BD"
          fill-rule="nonzero"
          transform="translate(-1.49995,-0.499947)"
        ></path>
        <path
          id="check_sign-copy-4"
          d="M8.51607,1.73924L5.01237,6.99485L3.48393,4.70217C3.31942,4.45539,2.98601,4.38871,2.73924,4.55322C2.49247,4.71774,2.42579,5.05117,2.5903,5.29794L4.56556,8.26087C4.77812,8.57971,5.24663,8.57971,5.45919,8.26087L9.4097,2.33502C9.57421,2.08824,9.50753,1.75482,9.26076,1.5903C9.01399,1.42579,8.68058,1.49247,8.51607,1.73924ZM7.68401,1.18455C8.15488,0.47824,9.10916,0.287381,9.81546,0.758254C10.5218,1.22913,10.7126,2.18341,10.2418,2.88972L6.29124,8.81556C5.68286,9.72815,4.34188,9.72815,3.7335,8.81556L1.75825,5.85264C1.28739,5.14633,1.47824,4.19205,2.18454,3.72118C2.89084,3.2503,3.84512,3.44116,4.31599,4.14747L5.01237,5.19206L7.68401,1.18455Z"
          fill="#FFFFFF"
          fill-rule="nonzero"
          transform="translate(-1.49995,-0.499947)"
        ></path>
      </g>
    </svg>
    <div class="SignIn__text SignIn__text--desktop">
      <p>Do not have an account yet?</p>
      <a href="/sign-up">Sign up now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginAvatar",
};
</script>

<style scoped>
</style>
