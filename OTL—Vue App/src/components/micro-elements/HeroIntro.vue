<template>
    <div class="mediaquery-inspector">
        <div class="device laptop">Made with ❤️ for you Laptop by OneTouch Labs </div>
        <div class="device tv">Made with ❤️ for you TV by OneTouch Labs </div>
        <div class="device phone">Made with ❤️ for you Phone by OneTouch Labs </div>
        <div class="device tablet">Made with ❤️ for you Tablette by OneTouch Labs </div>
    </div>
    {{ msg }}
    

    <div class="section hero-slider">
        <div class="scene_one" id="scene_one">
            <div class="layer amas">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg"
                    transform="rotate(4)" style="opacity: 1;" filter="blur(44px)">
                    <defs>
                        <!-- <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: rgb(238, 205, 163);"></stop>
                        <stop offset="100%" style="stop-color: rgb(239, 98, 159);"></stop>
                    </linearGradient> -->
                        <!-- <linearGradient id="gradient" x1="51.4795" y1="50.333" x2="210.936" y2="533.14"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFFF00" />
                        <stop offset="1" stop-color="#FF1A1A" />
                    </linearGradient> -->
                        <linearGradient id="gradient" x1="51.4795" y1="50.333" x2="210.936" y2="533.14"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#98DE5B" />
                            <stop offset="1" stop-color="#08E1AE" />
                        </linearGradient>
                    </defs>
                    <path id="blob" stroke="url(#gradient)" style="opacity: .1;" stroke-width="200">

                        <animate attributeName="d" dur="15000ms" repeatCount="indefinite"
                            values="M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z">
                        </animate>
                    </path>
                </svg>

            </div>
            <div class="layer big-outline" id="big-outline">
                <svg width="1128" height="566" viewBox="0 0 1128 566" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="1126" height="564" rx="31" stroke="url(#paint0_radial_1035_2156)"
                        stroke-width="2" />
                    <defs>
                        <radialGradient id="paint0_radial_1035_2156" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(612.5 155) rotate(90.2973) scale(385.505 233.079)">
                            <stop stop-color="#4A4A4A" />
                            <stop offset="0.5" stop-color="#B9B9B9" />
                            <stop offset="1" stop-color="#4A4A4A" />
                        </radialGradient>
                    </defs>
                </svg>

            </div>
            <div class="layer left-element" id="left-element">
                <svg width="56" height="388" viewBox="0 0 56 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1073_1830" fill="white">
                        <path d="M0 0H56V388H0V0Z" />
                    </mask>
                    <path d="M0 0H56V388H0V0Z" fill="white" fill-opacity="0.08" />
                    <path d="M25 38H37" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M18.9097 33.5797L22.4197 37.0897C23.5897 38.2597 25.4997 38.2597 26.6597 37.0897L37.0898 26.6597C38.2598 25.4897 38.2598 23.5797 37.0898 22.4197L33.5798 18.9097C32.4098 17.7397 30.4998 17.7397 29.3398 18.9097L18.9097 29.3397C17.7397 30.4997 17.7397 32.4097 18.9097 33.5797Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.1201 25.13L30.8701 32.88" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M19.52 33.66L25.17 28" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M22.3401 36.49L28.0001 30.83" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M26.7501 86.5H29.2701C30.2301 86.5 30.8501 85.82 30.6701 84.99L30.2601 83.1801H25.7601L25.3501 84.99C25.1701 85.77 25.8501 86.5 26.7501 86.5Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M30.2601 83.1701L31.9901 81.63C32.9601 80.77 33.0001 80.17 32.2301 79.2L29.18 75.33C28.54 74.52 27.4901 74.52 26.8501 75.33L23.8001 79.2C23.0301 80.17 23.03 80.8 24.04 81.63L25.7701 83.1701"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28.01 75.12V77.65" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M28.52 69H27.52C26.97 69 26.52 68.55 26.52 68V67C26.52 66.45 26.97 66 27.52 66H28.52C29.07 66 29.52 66.45 29.52 67V68C29.52 68.55 29.07 69 28.52 69Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M19.27 78.17H20.27C20.82 78.17 21.27 77.72 21.27 77.17V76.17C21.27 75.62 20.82 75.17 20.27 75.17H19.27C18.72 75.17 18.27 75.62 18.27 76.17V77.17C18.27 77.72 18.72 78.17 19.27 78.17Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M36.73 78.17H35.73C35.18 78.17 34.73 77.72 34.73 77.17V76.17C34.73 75.62 35.18 75.17 35.73 75.17H36.73C37.28 75.17 37.73 75.62 37.73 76.17V77.17C37.73 77.72 37.28 78.17 36.73 78.17Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.52 67.56C22.71 68.01 19.75 71.24 19.75 75.17" stroke="white" stroke-opacity="0.64"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M36.25 75.17C36.25 71.25 33.31 68.03 29.52 67.56" stroke="white" stroke-opacity="0.64"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M37.81 115.94C36.27 119.78 32.41 125 29.18 127.59L27.21 129.17C26.96 129.35 26.71 129.51 26.43 129.62C26.43 129.44 26.42 129.24 26.39 129.05C26.28 128.21 25.9 127.43 25.23 126.76C24.55 126.08 23.72 125.68 22.87 125.57C22.67 125.56 22.47 125.54 22.27 125.56C22.38 125.25 22.55 124.96 22.76 124.72L24.32 122.75C26.9 119.52 32.14 115.64 35.97 114.11C36.56 113.89 37.13 114.05 37.49 114.42C37.87 114.79 38.05 115.36 37.81 115.94Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M26.43 129.62C26.43 130.72 26.01 131.77 25.22 132.57C24.61 133.18 23.78 133.6 22.79 133.73L20.33 134C18.99 134.15 17.84 133.01 18 131.65L18.27 129.19C18.51 127 20.34 125.6 22.28 125.56C22.48 125.55 22.69 125.56 22.88 125.57C23.73 125.68 24.56 126.07 25.24 126.76C25.91 127.43 26.29 128.21 26.4 129.05C26.41 129.24 26.43 129.43 26.43 129.62Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30.24 126.47C30.24 123.86 28.12 121.74 25.51 121.74" stroke="white" stroke-opacity="0.64"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M26.7501 182.5H29.2701C30.2301 182.5 30.8501 181.82 30.6701 180.99L30.2601 179.18H25.7601L25.3501 180.99C25.1701 181.77 25.8501 182.5 26.7501 182.5Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M30.2601 179.17L31.9901 177.63C32.9601 176.77 33.0001 176.17 32.2301 175.2L29.1801 171.33C28.5401 170.52 27.4901 170.52 26.8501 171.33L23.8001 175.2C23.0301 176.17 23.0301 176.8 24.0401 177.63L25.77 179.17"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28.01 171.12V173.65" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M27.1501 165.19L26.3701 164.41C25.9001 163.94 25.9001 163.18 26.3701 162.71L27.1501 161.93C27.6201 161.46 28.3801 161.46 28.8501 161.93L29.6301 162.71C30.1001 163.18 30.1001 163.94 29.6301 164.41L28.8501 165.19C28.3801 165.66 27.6201 165.66 27.1501 165.19Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M35.45 169.81H36.55C37.21 169.81 37.75 170.35 37.75 171.01V172.11C37.75 172.77 37.21 173.31 36.55 173.31H35.45C34.79 173.31 34.25 172.77 34.25 172.11V171.01C34.25 170.35 34.79 169.81 35.45 169.81Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M20.55 169.81H19.45C18.79 169.81 18.25 170.35 18.25 171.01V172.11C18.25 172.77 18.79 173.31 19.45 173.31H20.55C21.21 173.31 21.75 172.77 21.75 172.11V171.01C21.75 170.35 21.21 169.81 20.55 169.81Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M34.54 170.1L29.24 164.8" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M21.46 170.1L26.76 164.8" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <g clip-path="url(#clip0_1073_1830)">
                        <path
                            d="M19.7701 223.56L23.2301 227.02C25.6601 229.45 26.4901 229.41 28.8901 227.02L34.4601 221.45C36.4001 219.51 36.8901 218.22 34.4601 215.79L31.0001 212.33C28.4101 209.74 27.2801 210.39 25.3401 212.33L19.7701 217.9C17.3801 220.3 17.1801 220.97 19.7701 223.56Z"
                            stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M35.2 224.79L34.54 225.88C33.61 227.43 34.33 228.7 36.14 228.7C37.95 228.7 38.67 227.43 37.74 225.88L37.08 224.79C36.56 223.93 35.71 223.93 35.2 224.79Z"
                            stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 220.24C23.56 218.73 29.42 218.68 35 220.11L35.5 220.24" stroke="white"
                            stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <path
                        d="M29.01 258.92L34.91 261.54C36.61 262.29 36.61 263.53 34.91 264.28L29.01 266.9C28.34 267.2 27.24 267.2 26.57 266.9L20.67 264.28C18.97 263.53 18.97 262.29 20.67 261.54L26.57 258.92C27.24 258.62 28.34 258.62 29.01 258.92Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M19 267C19 267.84 19.63 268.81 20.4 269.15L27.19 272.17C27.71 272.4 28.3 272.4 28.81 272.17L35.6 269.15C36.37 268.81 37 267.84 37 267"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M19 272C19 272.93 19.55 273.77 20.4 274.15L27.19 277.17C27.71 277.4 28.3 277.4 28.81 277.17L35.6 274.15C36.45 273.77 37 272.93 37 272"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <g clip-path="url(#clip1_1073_1830)">
                        <path
                            d="M25.5 323.5V322H20.5C19.95 322 19.45 321.78 19.09 321.41C18.72 321.05 18.5 320.55 18.5 320C18.5 318.97 19.3 318.11 20.31 318.01C20.37 318 20.43 318 20.5 318H35.5C35.57 318 35.63 318 35.69 318.01C36.17 318.05 36.59 318.26 36.91 318.59C37.32 318.99 37.54 319.56 37.49 320.18C37.4 321.23 36.45 322 35.39 322H30.5V323.5C30.5 324.88 29.38 326 28 326C26.62 326 25.5 324.88 25.5 323.5Z"
                            stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M36.1699 309.3L35.6899 318.01C35.6299 318 35.5699 318 35.4999 318H20.4999C20.4299 318 20.3699 318 20.3099 318.01L19.8299 309.3C19.6499 307.53 21.0399 306 22.8099 306H33.1899C34.9599 306 36.3499 307.53 36.1699 309.3Z"
                            stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.99 306V311" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M28 306V308" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </g>
                    <path
                        d="M30 359C30 362.87 26.87 366 23 366C22.68 366 22.37 365.98 22.07 365.93C18.64 365.48 16 362.55 16 359C16 355.13 19.13 352 23 352C26.55 352 29.48 354.64 29.93 358.07C29.98 358.37 30 358.68 30 359Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M36.0001 365C36.0001 368.87 32.8701 372 29.0001 372C25.4501 372 22.5201 369.36 22.0701 365.93C22.3701 365.98 22.6801 366 23.0001 366C26.8701 366 30.0001 362.87 30.0001 359C30.0001 358.68 29.9801 358.37 29.9301 358.07C33.3601 358.52 36.0001 361.45 36.0001 365Z"
                        stroke="white" stroke-opacity="0.64" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28.1499 364.12L29.4599 365.41" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M31 362L30 361" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M26 367L25 366" stroke="white" stroke-opacity="0.64" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M0 0V-1H-1V0H0ZM56 0H57V-1H56V0ZM56 388V389H57V388H56ZM0 388H-1V389H0V388ZM0 1H56V-1H0V1ZM55 0V388H57V0H55ZM56 387H0V389H56V387ZM1 388V0H-1V388H1Z"
                        fill="url(#paint0_radial_1073_1830)" mask="url(#path-1-inside-1_1073_1830)" />
                    <defs>
                        <radialGradient id="paint0_radial_1073_1830" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(65 112) rotate(102.765) scale(224.037 9.80997)">
                            <stop stop-color="#4A4A4A" />
                            <stop offset="0.5" stop-color="#B9B9B9" />
                            <stop offset="1" stop-color="#4A4A4A" />
                        </radialGradient>
                        <clipPath id="clip0_1073_1830">
                            <rect width="24" height="24" fill="white" transform="translate(16 208)" />
                        </clipPath>
                        <clipPath id="clip1_1073_1830">
                            <rect width="24" height="24" fill="white" transform="translate(16 304)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="layer right-element" id="right-element">

                <svg width="56" height="392" viewBox="0 0 56 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1593_161" fill="white">
                        <path d="M0 0H56V392H0V0Z" />
                    </mask>
                    <path d="M0 0H56V392H0V0Z" fill="white" fill-opacity="0.08" />
                    <path
                        d="M37 23V33C37 36 35.5 38 32 38H24C20.5 38 19 36 19 33V23C19 20 20.5 18 24 18H32C35.5 18 37 20 37 23Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30.5 20.5V22.5C30.5 23.6 31.4 24.5 32.5 24.5H34.5" stroke="white" stroke-opacity="0.64"
                        stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26 29L24 31L26 33" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30 29L32 31L30 33" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24 74L22 76L24 78" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 74L34 76L32 78" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M28 86C33.5228 86 38 81.5228 38 76C38 70.4772 33.5228 66 28 66C22.4772 66 18 70.4772 18 76C18 81.5228 22.4772 86 28 86Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29 73.67L27 78.33" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35 128V118.5C35 117.4 34.1 116.5 33 116.5H27.5" stroke="white" stroke-opacity="0.64"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30 114L27 116.5L30 119" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M35 134C36.6569 134 38 132.657 38 131C38 129.343 36.6569 128 35 128C33.3431 128 32 129.343 32 131C32 132.657 33.3431 134 35 134Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M21 120V129.5C21 130.6 21.9 131.5 23 131.5H28.5" stroke="white" stroke-opacity="0.64"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26 134L29 131.5L26 129" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M21 120C22.6569 120 24 118.657 24 117C24 115.343 22.6569 114 21 114C19.3431 114 18 115.343 18 117C18 118.657 19.3431 120 21 120Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M24.5 178.97H24C20 178.97 18 177.97 18 172.97V167.97C18 163.97 20 161.97 24 161.97H32C36 161.97 38 163.97 38 167.97V172.97C38 176.97 36 178.97 32 178.97H31.5C31.19 178.97 30.89 179.12 30.7 179.37L29.2 181.37C28.54 182.25 27.46 182.25 26.8 181.37L25.3 179.37C25.14 179.15 24.78 178.97 24.5 178.97Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24 168.7L22 170.7L24 172.7" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 168.7L34 170.7L32 172.7" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29 168.37L27 173.03" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M24.9297 210L24.9597 211.53C24.9797 212.34 25.6497 213 26.4597 213H29.4797C30.3097 213 30.9797 212.32 30.9797 211.5V210"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M33 225L31 227L33 229" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M36 225L38 227L36 229" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29 230H24C20.5 230 19 228 19 225V215C19 212 20.5 210 24 210H32C35.5 210 37 212 37 215V222"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M38 269V265C38 260 36 258 31 258H25C20 258 18 260 18 265V271C18 276 20 278 25 278H31"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M35 278V272L33 274" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35 272L37 274" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25.9504 262.26L24.9004 271.73" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29.1096 262.26L28.0596 271.73" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.5303 265.42H32.0003" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 268.58H31.47" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M25 326H31C36 326 38 324 38 319V313C38 308 36 306 31 306H25C20 306 18 308 18 313V319C18 324 20 326 25 326Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M25.6001 312.97L23.1101 315.46C22.8201 315.75 22.8201 316.24 23.1101 316.53L25.6001 319.02"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30.4004 312.97L32.8904 315.46C33.1804 315.75 33.1804 316.24 32.8904 316.53L30.4004 319.02"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M34.0001 359.16C33.9401 359.15 33.8701 359.15 33.8101 359.16C32.4301 359.11 31.3301 357.98 31.3301 356.58C31.3301 355.15 32.4801 354 33.9101 354C35.3401 354 36.4901 355.16 36.4901 356.58C36.4801 357.98 35.3801 359.11 34.0001 359.16Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M32.9704 366.44C34.3404 366.67 35.8504 366.43 36.9104 365.72C38.3204 364.78 38.3204 363.24 36.9104 362.3C35.8404 361.59 34.3104 361.35 32.9404 361.59"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M21.9705 359.16C22.0305 359.15 22.1005 359.15 22.1605 359.16C23.5405 359.11 24.6405 357.98 24.6405 356.58C24.6405 355.15 23.4905 354 22.0605 354C20.6305 354 19.4805 355.16 19.4805 356.58C19.4905 357.98 20.5905 359.11 21.9705 359.16Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M23.0004 366.44C21.6304 366.67 20.1204 366.43 19.0604 365.72C17.6504 364.78 17.6504 363.24 19.0604 362.3C20.1304 361.59 21.6604 361.35 23.0304 361.59"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M28.0001 366.63C27.9401 366.62 27.8701 366.62 27.8101 366.63C26.4301 366.58 25.3301 365.45 25.3301 364.05C25.3301 362.62 26.4801 361.47 27.9101 361.47C29.3401 361.47 30.4901 362.63 30.4901 364.05C30.4801 365.45 29.3801 366.59 28.0001 366.63Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M25.0897 369.78C23.6797 370.72 23.6797 372.26 25.0897 373.2C26.6897 374.27 29.3097 374.27 30.9097 373.2C32.3197 372.26 32.3197 370.72 30.9097 369.78C29.3197 368.72 26.6897 368.72 25.0897 369.78Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M0 0V-1H-1V0H0ZM56 0H57V-1H56V0ZM56 392V393H57V392H56ZM0 392H-1V393H0V392ZM0 1H56V-1H0V1ZM55 0V392H57V0H55ZM56 391H0V393H56V391ZM1 392V0H-1V392H1Z"
                        fill="url(#paint0_radial_1593_161)" mask="url(#path-1-inside-1_1593_161)" />
                    <defs>
                        <radialGradient id="paint0_radial_1593_161" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(65 113.155) rotate(102.639) scale(226.234 9.81484)">
                            <stop stop-color="#4A4A4A" />
                            <stop offset="0.5" stop-color="#B9B9B9" />
                            <stop offset="1" stop-color="#4A4A4A" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div class="layer user-flow-element">
                <svg width="279" height="53" viewBox="0 0 279 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="278.379" height="52.7431" transform="translate(0 0.119141)" fill="#212121" />
                    <rect x="13.1858" y="13.3049" width="26.3715" height="26.3715" rx="13.1858" fill="white"
                        fill-opacity="0.32" />
                    <rect x="13.7352" y="13.8543" width="25.2727" height="25.2727" rx="12.6364" stroke="white"
                        stroke-opacity="0.12" stroke-width="1.09881" />
                    <rect x="26.3716" y="13.3047" width="26.3715" height="26.3715" rx="13.1858" fill="white"
                        fill-opacity="0.32" />
                    <rect x="26.921" y="13.8541" width="25.2727" height="25.2727" rx="12.6364" stroke="white"
                        stroke-opacity="0.12" stroke-width="1.09881" />
                    <rect x="39.5574" y="13.3047" width="26.3715" height="26.3715" rx="13.1858" fill="white"
                        fill-opacity="0.32" />
                    <rect x="40.1068" y="13.8541" width="25.2727" height="25.2727" rx="12.6364" stroke="white"
                        stroke-opacity="0.12" stroke-width="1.09881" />
                    <rect x="52.7432" y="13.3047" width="26.3715" height="26.3715" rx="13.1858" fill="white"
                        fill-opacity="0.32" />
                    <rect x="53.2926" y="13.8541" width="25.2727" height="25.2727" rx="12.6364" stroke="white"
                        stroke-opacity="0.12" stroke-width="1.09881" />
                    <path
                        d="M95.4437 21.891V28.4057C95.4437 29.2358 95.6007 29.8585 95.9145 30.2735C96.2385 30.6886 96.7801 30.8962 97.5394 30.8962C98.2987 30.8962 98.8352 30.6886 99.1491 30.2735C99.473 29.8585 99.635 29.2358 99.635 28.4057V21.891H101.609V28.1475C101.609 28.9271 101.533 29.6003 101.381 30.1672C101.24 30.7342 101.007 31.2049 100.683 31.5795C100.359 31.9541 99.9337 32.2325 99.4072 32.4147C98.8909 32.5868 98.2632 32.6729 97.5242 32.6729C96.775 32.6729 96.1423 32.5868 95.626 32.4147C95.1198 32.2325 94.7047 31.9541 94.3807 31.5795C94.0568 31.2049 93.8239 30.7342 93.6822 30.1672C93.5405 29.6003 93.4696 28.9271 93.4696 28.1475V21.891H95.4437ZM106.506 32.6729C105.746 32.6729 105.108 32.5463 104.592 32.2932C104.076 32.03 103.62 31.6706 103.225 31.2151L104.41 30.0609C104.703 30.395 105.022 30.6582 105.367 30.8506C105.721 31.043 106.126 31.1391 106.581 31.1391C107.047 31.1391 107.381 31.0581 107.584 30.8962C107.796 30.7342 107.903 30.5114 107.903 30.228C107.903 29.9951 107.827 29.8129 107.675 29.6813C107.533 29.5396 107.285 29.4434 106.931 29.3928L106.141 29.2865C105.281 29.1751 104.622 28.9321 104.167 28.5575C103.721 28.1728 103.499 27.616 103.499 26.8871C103.499 26.5024 103.57 26.1582 103.711 25.8545C103.853 25.5406 104.056 25.2774 104.319 25.0648C104.582 24.8421 104.896 24.675 105.26 24.5637C105.635 24.4422 106.05 24.3815 106.506 24.3815C106.89 24.3815 107.229 24.4118 107.523 24.4726C107.827 24.5232 108.1 24.6042 108.343 24.7155C108.586 24.8168 108.809 24.9484 109.011 25.1104C109.214 25.2622 109.411 25.4343 109.603 25.6267L108.464 26.7656C108.232 26.5226 107.953 26.3202 107.629 26.1582C107.305 25.9962 106.951 25.9152 106.566 25.9152C106.141 25.9152 105.832 25.9911 105.64 26.143C105.458 26.2949 105.367 26.4923 105.367 26.7353C105.367 26.9985 105.443 27.2009 105.594 27.3427C105.756 27.4743 106.025 27.5705 106.399 27.6312L107.204 27.7375C108.915 27.9805 109.77 28.76 109.77 30.0761C109.77 30.4608 109.689 30.8152 109.527 31.1391C109.376 31.453 109.158 31.7263 108.875 31.9592C108.591 32.1819 108.247 32.3591 107.842 32.4907C107.447 32.6121 107.002 32.6729 106.506 32.6729ZM114.691 32.6729C114.104 32.6729 113.577 32.5767 113.112 32.3844C112.656 32.1819 112.266 31.9035 111.942 31.5491C111.629 31.1847 111.386 30.7494 111.213 30.2432C111.041 29.7268 110.955 29.1498 110.955 28.512C110.955 27.8843 111.036 27.3174 111.198 26.8112C111.37 26.305 111.613 25.8747 111.927 25.5204C112.241 25.1559 112.626 24.8775 113.081 24.6852C113.537 24.4827 114.053 24.3815 114.63 24.3815C115.248 24.3815 115.784 24.4878 116.24 24.7004C116.696 24.913 117.07 25.2015 117.364 25.5659C117.657 25.9304 117.875 26.3556 118.017 26.8416C118.169 27.3174 118.244 27.8286 118.244 28.3753V29.0131H112.975V29.2105C112.975 29.7876 113.137 30.2533 113.461 30.6076C113.785 30.9518 114.266 31.1239 114.904 31.1239C115.39 31.1239 115.784 31.0227 116.088 30.8202C116.402 30.6177 116.68 30.3596 116.923 30.0458L117.971 31.2151C117.647 31.6706 117.202 32.03 116.635 32.2932C116.078 32.5463 115.43 32.6729 114.691 32.6729ZM114.661 25.8393C114.144 25.8393 113.734 26.0114 113.431 26.3556C113.127 26.6998 112.975 27.1453 112.975 27.692V27.8134H116.225V27.6768C116.225 27.1301 116.088 26.6897 115.815 26.3556C115.552 26.0114 115.167 25.8393 114.661 25.8393ZM119.955 32.4907V24.5637H121.898V26.2037H121.974C122.025 25.9911 122.101 25.7887 122.202 25.5963C122.314 25.3938 122.455 25.2167 122.627 25.0648C122.799 24.913 123.002 24.7915 123.235 24.7004C123.478 24.6092 123.756 24.5637 124.07 24.5637H124.495V26.4012H123.888C123.23 26.4012 122.734 26.4973 122.4 26.6897C122.065 26.882 121.898 27.1959 121.898 27.6312V32.4907H119.955ZM129.627 32.4907V21.891H136.445V23.6677H131.631V26.2341H135.822V28.0109H131.631V32.4907H129.627ZM138.391 32.4907V21.891H140.396V30.7139H144.572V32.4907H138.391ZM149.184 32.6729C148.617 32.6729 148.106 32.5767 147.65 32.3844C147.205 32.192 146.82 31.9136 146.496 31.5491C146.182 31.1847 145.939 30.7494 145.767 30.2432C145.595 29.7268 145.509 29.1498 145.509 28.512C145.509 27.8742 145.595 27.3022 145.767 26.796C145.939 26.2898 146.182 25.8595 146.496 25.5052C146.82 25.1407 147.205 24.8623 147.65 24.67C148.106 24.4776 148.617 24.3815 149.184 24.3815C149.751 24.3815 150.262 24.4776 150.718 24.67C151.173 24.8623 151.558 25.1407 151.872 25.5052C152.196 25.8595 152.444 26.2898 152.616 26.796C152.788 27.3022 152.874 27.8742 152.874 28.512C152.874 29.1498 152.788 29.7268 152.616 30.2432C152.444 30.7494 152.196 31.1847 151.872 31.5491C151.558 31.9136 151.173 32.192 150.718 32.3844C150.262 32.5767 149.751 32.6729 149.184 32.6729ZM149.184 31.1088C149.7 31.1088 150.105 30.9518 150.399 30.638C150.692 30.3242 150.839 29.8635 150.839 29.2561V27.7831C150.839 27.1858 150.692 26.7302 150.399 26.4163C150.105 26.1025 149.7 25.9456 149.184 25.9456C148.678 25.9456 148.278 26.1025 147.984 26.4163C147.691 26.7302 147.544 27.1858 147.544 27.7831V29.2561C147.544 29.8635 147.691 30.3242 147.984 30.638C148.278 30.9518 148.678 31.1088 149.184 31.1088ZM153.689 24.5637H155.557L156.362 27.8286L156.985 30.5469H157.045L157.774 27.8286L158.701 24.5637H160.462L161.419 27.8286L162.163 30.5469H162.224L162.846 27.8286L163.636 24.5637H165.443L163.272 32.4907H161.176L160.158 28.9979L159.566 26.8416H159.521L158.944 28.9979L157.941 32.4907H155.876L153.689 24.5637Z"
                        fill="white" />
                    <path
                        d="M198.367 32.3484V30.2679H193.249V29.1442L197.683 21.7487H199.581V29.2049H201.115V30.2679H199.581V32.3484H198.367ZM194.449 29.2049H198.367V22.7358H198.291L194.449 29.2049ZM209.871 25.6363C209.871 26.4259 209.755 27.17 209.522 27.8686C209.289 28.557 208.986 29.1897 208.611 29.7668C208.247 30.3337 207.842 30.8399 207.396 31.2854C206.951 31.7207 206.515 32.075 206.09 32.3484H204.45C205.017 31.9333 205.523 31.5284 205.969 31.1335C206.414 30.7387 206.804 30.3287 207.138 29.9035C207.472 29.4682 207.756 29.0075 207.988 28.5216C208.221 28.0255 208.409 27.4687 208.55 26.8511L208.474 26.8208C208.221 27.2561 207.892 27.6205 207.487 27.9141C207.092 28.1976 206.571 28.3393 205.923 28.3393C205.468 28.3393 205.047 28.2634 204.663 28.1116C204.278 27.9597 203.949 27.742 203.676 27.4586C203.402 27.1751 203.185 26.8359 203.023 26.4411C202.871 26.0362 202.795 25.5806 202.795 25.0744C202.795 24.5581 202.876 24.0873 203.038 23.6621C203.21 23.2268 203.448 22.8573 203.752 22.5536C204.065 22.2397 204.435 21.9967 204.86 21.8246C205.295 21.6525 205.781 21.5665 206.318 21.5665C206.865 21.5665 207.356 21.6627 207.791 21.855C208.236 22.0372 208.611 22.3055 208.915 22.6599C209.229 23.0041 209.466 23.4293 209.628 23.9355C209.79 24.4417 209.871 25.0086 209.871 25.6363ZM206.333 27.2612C207.032 27.2612 207.573 27.0688 207.958 26.6841C208.353 26.2994 208.55 25.7476 208.55 25.0288V24.9074C208.55 24.1886 208.353 23.6368 207.958 23.2521C207.573 22.8674 207.032 22.675 206.333 22.675C205.635 22.675 205.088 22.8674 204.693 23.2521C204.308 23.6368 204.116 24.1886 204.116 24.9074V25.0288C204.116 25.7476 204.308 26.2994 204.693 26.6841C205.088 27.0688 205.635 27.2612 206.333 27.2612ZM217.084 21.7487V28.309C217.084 29.3214 217.271 30.0908 217.646 30.6172C218.02 31.1335 218.678 31.3917 219.62 31.3917C220.561 31.3917 221.219 31.1335 221.594 30.6172C221.968 30.0908 222.156 29.3214 222.156 28.309V21.7487H223.431V28.0053C223.431 28.7747 223.361 29.4428 223.219 30.0098C223.087 30.5767 222.87 31.0475 222.566 31.4221C222.262 31.7966 221.862 32.075 221.366 32.2573C220.88 32.4395 220.283 32.5306 219.574 32.5306C218.866 32.5306 218.268 32.4395 217.782 32.2573C217.306 32.075 216.922 31.7966 216.628 31.4221C216.335 31.0475 216.122 30.5767 215.99 30.0098C215.869 29.4428 215.808 28.7747 215.808 28.0053V21.7487H217.084ZM225.675 32.3484V31.2854H227.163V22.8117H225.675V21.7487H229.927V22.8117H228.439V31.2854H229.927V32.3484H225.675ZM234.489 32.5306C233.76 32.5306 233.147 32.3939 232.651 32.1206C232.165 31.8371 231.745 31.4626 231.391 30.9969L232.256 30.2983C232.56 30.683 232.899 30.9817 233.274 31.1943C233.648 31.3967 234.084 31.498 234.58 31.498C235.096 31.498 235.496 31.3866 235.779 31.1639C236.073 30.9412 236.22 30.6273 236.22 30.2224C236.22 29.9187 236.118 29.6605 235.916 29.4479C235.724 29.2252 235.369 29.0733 234.853 28.9923L234.23 28.9012C233.866 28.8506 233.532 28.7747 233.228 28.6734C232.924 28.5621 232.656 28.4203 232.423 28.2482C232.201 28.066 232.023 27.8433 231.892 27.5801C231.77 27.3168 231.71 27.003 231.71 26.6385C231.71 26.2538 231.78 25.9197 231.922 25.6363C232.064 25.3427 232.256 25.0997 232.499 24.9074C232.752 24.715 233.051 24.5733 233.395 24.4822C233.739 24.3809 234.109 24.3303 234.504 24.3303C235.142 24.3303 235.673 24.4417 236.098 24.6644C236.534 24.8871 236.913 25.1959 237.237 25.5907L236.432 26.3196C236.26 26.0767 236.007 25.859 235.673 25.6666C235.339 25.4642 234.919 25.3629 234.413 25.3629C233.906 25.3629 233.522 25.4743 233.258 25.697C233.005 25.9096 232.879 26.2032 232.879 26.5778C232.879 26.9625 233.005 27.2409 233.258 27.413C233.522 27.5851 233.896 27.7117 234.382 27.7927L234.99 27.8838C235.86 28.0154 236.478 28.2685 236.842 28.6431C237.207 29.0075 237.389 29.4884 237.389 30.0857C237.389 30.845 237.131 31.4423 236.615 31.8776C236.098 32.313 235.39 32.5306 234.489 32.5306Z"
                        fill="#737373" />
                    <g clip-path="url(#clip0_1036_2164)">
                        <path
                            d="M256.403 29.2377C256.224 29.2377 256.046 29.2295 255.87 29.214C254.965 29.1331 254.09 28.8491 253.309 28.3832C252.529 27.9173 251.863 27.2815 251.362 26.5229L248.299 31.9847H252.248L254.24 35.2812L257.074 29.2003C256.851 29.2251 256.627 29.2376 256.403 29.2377V29.2377Z"
                            fill="#AEFF01" />
                        <path
                            d="M261.451 26.5161C260.726 27.6147 259.663 28.4478 258.423 28.8902L257.011 31.9676L258.566 35.2812L260.558 31.9847H264.507L261.451 26.5161Z"
                            fill="#AEFF01" />
                        <path
                            d="M256.404 24.8425C257.314 24.8425 258.052 24.1045 258.052 23.1942C258.052 22.284 257.314 21.546 256.404 21.546C255.494 21.546 254.756 22.284 254.756 23.1942C254.756 24.1045 255.494 24.8425 256.404 24.8425Z"
                            fill="#AEFF01" />
                        <path
                            d="M256.403 18.2496C253.677 18.2496 251.458 20.4678 251.458 23.1942C251.458 25.9207 253.677 28.1389 256.403 28.1389C259.13 28.1389 261.348 25.9207 261.348 23.1942C261.348 20.4678 259.13 18.2496 256.403 18.2496ZM256.403 25.9413C255.86 25.9413 255.329 25.7802 254.877 25.4783C254.425 25.1765 254.073 24.7474 253.865 24.2455C253.657 23.7435 253.603 23.1912 253.709 22.6583C253.815 22.1254 254.077 21.636 254.461 21.2518C254.845 20.8676 255.334 20.606 255.867 20.5C256.4 20.394 256.952 20.4484 257.454 20.6563C257.956 20.8642 258.385 21.2163 258.687 21.6681C258.989 22.1198 259.15 22.6509 259.15 23.1942C259.149 23.9225 258.86 24.6208 258.345 25.1358C257.83 25.6508 257.131 25.9405 256.403 25.9413V25.9413Z"
                            fill="#AEFF01" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1036_2164">
                            <rect width="17.581" height="17.581" fill="white" transform="translate(247.613 17.7002)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="layer design-system-element">
                <svg width="187" height="57" viewBox="0 0 187 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="187" height="56.4666" fill="#212121" />
                    <path
                        d="M14.957 23.2404H18.9573C19.6712 23.2404 20.3169 23.3559 20.8944 23.5869C21.4824 23.8178 21.9811 24.1643 22.3906 24.6263C22.8106 25.0778 23.1308 25.65 23.3513 26.343C23.5823 27.0254 23.6978 27.8234 23.6978 28.7368C23.6978 29.6503 23.5823 30.4535 23.3513 31.1465C23.1308 31.8289 22.8106 32.4012 22.3906 32.8631C21.9811 33.3146 21.4824 33.6558 20.8944 33.8868C20.3169 34.1178 19.6712 34.2333 18.9573 34.2333H14.957V23.2404ZM18.9573 32.3907C19.7342 32.3907 20.3484 32.1649 20.7999 31.7134C21.2619 31.2515 21.4929 30.548 21.4929 29.603V27.8706C21.4929 26.9257 21.2619 26.2275 20.7999 25.776C20.3484 25.314 19.7342 25.083 18.9573 25.083H17.0359V32.3907H18.9573ZM29.0124 34.4223C28.4034 34.4223 27.8574 34.3226 27.3745 34.1231C26.902 33.9131 26.4978 33.6243 26.1618 33.2569C25.8363 32.8789 25.5843 32.4274 25.4058 31.9024C25.2273 31.367 25.1381 30.7685 25.1381 30.107C25.1381 29.4561 25.2221 28.8681 25.3901 28.3431C25.5686 27.8181 25.8205 27.3719 26.146 27.0044C26.4715 26.6264 26.8705 26.3377 27.343 26.1382C27.8154 25.9282 28.3509 25.8232 28.9494 25.8232C29.5898 25.8232 30.1463 25.9335 30.6188 26.154C31.0913 26.3745 31.4797 26.6737 31.7842 27.0517C32.0887 27.4297 32.3145 27.8706 32.4614 28.3746C32.6189 28.8681 32.6977 29.3983 32.6977 29.9653V30.6267H27.2327V30.8315C27.2327 31.43 27.4007 31.9129 27.7367 32.2804C28.0727 32.6374 28.5714 32.8159 29.2329 32.8159C29.7368 32.8159 30.1463 32.7109 30.4613 32.5009C30.7868 32.2909 31.0755 32.0232 31.3275 31.6977L32.4142 32.9104C32.0782 33.3829 31.6162 33.7556 31.0283 34.0286C30.4508 34.2911 29.7788 34.4223 29.0124 34.4223ZM28.9809 27.3352C28.4454 27.3352 28.0202 27.5137 27.7052 27.8706C27.3902 28.2276 27.2327 28.6896 27.2327 29.2566V29.3826H30.603V29.2408C30.603 28.6738 30.4613 28.2171 30.1778 27.8706C29.9048 27.5137 29.5058 27.3352 28.9809 27.3352ZM37.1644 34.4223C36.377 34.4223 35.7155 34.2911 35.18 34.0286C34.6446 33.7556 34.1721 33.3829 33.7626 32.9104L34.991 31.7134C35.2955 32.0599 35.6263 32.3329 35.9832 32.5324C36.3507 32.7319 36.7707 32.8316 37.2432 32.8316C37.7261 32.8316 38.0726 32.7476 38.2826 32.5796C38.5031 32.4117 38.6134 32.1807 38.6134 31.8867C38.6134 31.6452 38.5346 31.4562 38.3771 31.3197C38.2301 31.1727 37.9729 31.073 37.6054 31.0205L36.7864 30.9102C35.894 30.7947 35.2115 30.5427 34.7391 30.1543C34.2771 29.7553 34.0461 29.1778 34.0461 28.4219C34.0461 28.0229 34.1196 27.6659 34.2666 27.3509C34.4136 27.0254 34.6236 26.7524 34.8965 26.532C35.1695 26.301 35.495 26.1277 35.873 26.0122C36.2615 25.8862 36.6919 25.8232 37.1644 25.8232C37.5634 25.8232 37.9151 25.8547 38.2196 25.9177C38.5346 25.9702 38.8181 26.0542 39.0701 26.1697C39.3221 26.2747 39.5531 26.4112 39.763 26.5792C39.973 26.7367 40.1778 26.9152 40.3773 27.1147L39.1961 28.2959C38.9546 28.0439 38.6658 27.8339 38.3299 27.6659C37.9939 27.4979 37.6264 27.4139 37.2274 27.4139C36.7864 27.4139 36.4662 27.4927 36.2667 27.6501C36.0777 27.8076 35.9832 28.0124 35.9832 28.2644C35.9832 28.5373 36.062 28.7473 36.2195 28.8943C36.3875 29.0308 36.6657 29.1306 37.0542 29.1936L37.8889 29.3038C39.6633 29.5558 40.5505 30.3643 40.5505 31.7292C40.5505 32.1282 40.4665 32.4956 40.2985 32.8316C40.141 33.1571 39.9153 33.4406 39.6213 33.6821C39.3273 33.9131 38.9703 34.0968 38.5504 34.2333C38.1409 34.3593 37.6789 34.4223 37.1644 34.4223ZM43.3385 24.8153C42.9185 24.8153 42.614 24.7208 42.425 24.5318C42.2465 24.3428 42.1573 24.1013 42.1573 23.8073V23.4924C42.1573 23.1984 42.2465 22.9569 42.425 22.7679C42.614 22.5789 42.9185 22.4844 43.3385 22.4844C43.748 22.4844 44.0472 22.5789 44.2362 22.7679C44.4252 22.9569 44.5197 23.1984 44.5197 23.4924V23.8073C44.5197 24.1013 44.4252 24.3428 44.2362 24.5318C44.0472 24.7208 43.748 24.8153 43.3385 24.8153ZM42.3305 26.0122H44.3464V34.2333H42.3305V26.0122ZM54.101 34.9263C54.101 35.3567 54.0222 35.7347 53.8647 36.0602C53.7177 36.3962 53.471 36.6744 53.1245 36.8949C52.778 37.1154 52.3318 37.2834 51.7858 37.3989C51.2399 37.5144 50.5731 37.5721 49.7857 37.5721C49.0927 37.5721 48.5047 37.5249 48.0218 37.4304C47.5388 37.3464 47.1398 37.2204 46.8248 37.0524C46.5203 36.8949 46.2999 36.6954 46.1634 36.4539C46.0269 36.2125 45.9586 35.9395 45.9586 35.635C45.9586 35.173 46.0846 34.8108 46.3366 34.5483C46.5991 34.2963 46.9613 34.1336 47.4233 34.0601V33.8868C47.0873 33.8028 46.8248 33.6401 46.6358 33.3986C46.4573 33.1466 46.3681 32.8526 46.3681 32.5166C46.3681 32.3067 46.4101 32.1229 46.4941 31.9654C46.5781 31.7974 46.6883 31.6557 46.8248 31.5402C46.9718 31.4247 47.1346 31.3302 47.3131 31.2567C47.4915 31.1727 47.6805 31.1097 47.88 31.0677V31.0047C47.3761 30.7737 46.9981 30.4535 46.7461 30.044C46.5046 29.6345 46.3839 29.1568 46.3839 28.6108C46.3839 27.7709 46.6726 27.0989 47.2501 26.5949C47.8275 26.0805 48.6727 25.8232 49.7857 25.8232C50.0377 25.8232 50.2844 25.839 50.5259 25.8705C50.7779 25.902 51.0089 25.9545 51.2189 26.028V25.7602C51.2189 24.9623 51.6073 24.5633 52.3843 24.5633H53.66V26.1067H51.9118V26.3272C52.3423 26.5687 52.6625 26.8837 52.8725 27.2722C53.0825 27.6606 53.1875 28.1069 53.1875 28.6108C53.1875 29.4403 52.8988 30.107 52.3213 30.611C51.7543 31.115 50.9091 31.367 49.7857 31.367C49.3027 31.367 48.8827 31.3197 48.5257 31.2252C48.3683 31.2987 48.2318 31.3985 48.1163 31.5244C48.0008 31.6399 47.943 31.7869 47.943 31.9654C47.943 32.3749 48.3 32.5796 49.014 32.5796H51.2189C52.2268 32.5796 52.9565 32.7896 53.408 33.2096C53.87 33.6191 54.101 34.1913 54.101 34.9263ZM52.2111 35.1625C52.2111 34.9 52.1061 34.6953 51.8961 34.5483C51.6861 34.4013 51.3238 34.3278 50.8094 34.3278H48.006C47.7225 34.5378 47.5808 34.8213 47.5808 35.1783C47.5808 35.4932 47.712 35.74 47.9745 35.9185C48.237 36.097 48.6832 36.1862 49.3132 36.1862H50.3211C50.9826 36.1862 51.4603 36.1022 51.7543 35.9342C52.0588 35.7662 52.2111 35.509 52.2111 35.1625ZM49.7857 29.9968C50.7726 29.9968 51.2661 29.5768 51.2661 28.7368V28.4691C51.2661 27.6291 50.7726 27.2092 49.7857 27.2092C48.7987 27.2092 48.3053 27.6291 48.3053 28.4691V28.7368C48.3053 29.5768 48.7987 29.9968 49.7857 29.9968ZM55.2652 34.2333V26.0122H57.2811V27.3824H57.3598C57.5278 26.9414 57.7903 26.574 58.1473 26.28C58.5147 25.9755 59.0187 25.8232 59.6592 25.8232C60.5096 25.8232 61.1606 26.1015 61.6121 26.6579C62.0636 27.2144 62.2893 28.0071 62.2893 29.0361V34.2333H60.2734V29.2408C60.2734 28.6528 60.1684 28.2119 59.9584 27.9179C59.7484 27.6239 59.402 27.4769 58.919 27.4769C58.709 27.4769 58.5042 27.5084 58.3048 27.5714C58.1158 27.6239 57.9425 27.7079 57.785 27.8234C57.638 27.9284 57.5173 28.0649 57.4228 28.2329C57.3283 28.3904 57.2811 28.5793 57.2811 28.7998V34.2333H55.2652ZM70.9391 34.4223C70.1516 34.4223 69.4901 34.2911 68.9547 34.0286C68.4192 33.7556 67.9467 33.3829 67.5372 32.9104L68.7657 31.7134C69.0701 32.0599 69.4009 32.3329 69.7579 32.5324C70.1253 32.7319 70.5453 32.8316 71.0178 32.8316C71.5008 32.8316 71.8473 32.7476 72.0572 32.5796C72.2777 32.4117 72.388 32.1807 72.388 31.8867C72.388 31.6452 72.3092 31.4562 72.1517 31.3197C72.0047 31.1727 71.7475 31.073 71.38 31.0205L70.5611 30.9102C69.6686 30.7947 68.9862 30.5427 68.5137 30.1543C68.0517 29.7553 67.8207 29.1778 67.8207 28.4219C67.8207 28.0229 67.8942 27.6659 68.0412 27.3509C68.1882 27.0254 68.3982 26.7524 68.6712 26.532C68.9442 26.301 69.2696 26.1277 69.6476 26.0122C70.0361 25.8862 70.4666 25.8232 70.9391 25.8232C71.338 25.8232 71.6898 25.8547 71.9942 25.9177C72.3092 25.9702 72.5927 26.0542 72.8447 26.1697C73.0967 26.2747 73.3277 26.4112 73.5377 26.5792C73.7477 26.7367 73.9524 26.9152 74.1519 27.1147L72.9707 28.2959C72.7292 28.0439 72.4405 27.8339 72.1045 27.6659C71.7685 27.4979 71.401 27.4139 71.002 27.4139C70.5611 27.4139 70.2408 27.4927 70.0413 27.6501C69.8524 27.8076 69.7579 28.0124 69.7579 28.2644C69.7579 28.5373 69.8366 28.7473 69.9941 28.8943C70.1621 29.0308 70.4403 29.1306 70.8288 29.1936L71.6635 29.3038C73.4379 29.5558 74.3251 30.3643 74.3251 31.7292C74.3251 32.1282 74.2411 32.4956 74.0731 32.8316C73.9157 33.1571 73.6899 33.4406 73.3959 33.6821C73.1019 33.9131 72.745 34.0968 72.325 34.2333C71.9155 34.3593 71.4535 34.4223 70.9391 34.4223ZM80.9603 26.0122H82.8502L79.5429 35.698C79.4379 35.992 79.3172 36.244 79.1807 36.4539C79.0547 36.6744 78.9024 36.8529 78.724 36.9894C78.5455 37.1259 78.3302 37.2257 78.0782 37.2886C77.8262 37.3516 77.5323 37.3831 77.1963 37.3831H75.9836V35.7767H77.464L77.842 34.627L74.8969 26.0122H76.897L78.3302 30.359L78.8657 32.4379H78.9602L79.5272 30.359L80.9603 26.0122ZM86.7498 34.4223C85.9623 34.4223 85.3008 34.2911 84.7654 34.0286C84.2299 33.7556 83.7574 33.3829 83.3479 32.9104L84.5764 31.7134C84.8809 32.0599 85.2116 32.3329 85.5686 32.5324C85.9361 32.7319 86.356 32.8316 86.8285 32.8316C87.3115 32.8316 87.658 32.7476 87.868 32.5796C88.0884 32.4117 88.1987 32.1807 88.1987 31.8867C88.1987 31.6452 88.1199 31.4562 87.9625 31.3197C87.8155 31.1727 87.5582 31.073 87.1907 31.0205L86.3718 30.9102C85.4793 30.7947 84.7969 30.5427 84.3244 30.1543C83.8624 29.7553 83.6314 29.1778 83.6314 28.4219C83.6314 28.0229 83.7049 27.6659 83.8519 27.3509C83.9989 27.0254 84.2089 26.7524 84.4819 26.532C84.7549 26.301 85.0803 26.1277 85.4583 26.0122C85.8468 25.8862 86.2773 25.8232 86.7498 25.8232C87.1487 25.8232 87.5005 25.8547 87.805 25.9177C88.1199 25.9702 88.4034 26.0542 88.6554 26.1697C88.9074 26.2747 89.1384 26.4112 89.3484 26.5792C89.5584 26.7367 89.7631 26.9152 89.9626 27.1147L88.7814 28.2959C88.5399 28.0439 88.2512 27.8339 87.9152 27.6659C87.5792 27.4979 87.2117 27.4139 86.8128 27.4139C86.3718 27.4139 86.0516 27.4927 85.8521 27.6501C85.6631 27.8076 85.5686 28.0124 85.5686 28.2644C85.5686 28.5373 85.6473 28.7473 85.8048 28.8943C85.9728 29.0308 86.251 29.1306 86.6395 29.1936L87.4742 29.3038C89.2486 29.5558 90.1358 30.3643 90.1358 31.7292C90.1358 32.1282 90.0518 32.4956 89.8839 32.8316C89.7264 33.1571 89.5006 33.4406 89.2066 33.6821C88.9127 33.9131 88.5557 34.0968 88.1357 34.2333C87.7262 34.3593 87.2642 34.4223 86.7498 34.4223ZM94.3599 34.2333C93.667 34.2333 93.1368 34.0548 92.7693 33.6978C92.4123 33.3304 92.2338 32.8106 92.2338 32.1387V27.6186H91.0211V26.0122H91.6511C91.9556 26.0122 92.1603 25.944 92.2653 25.8075C92.3808 25.6605 92.4385 25.4453 92.4385 25.1618V23.7601H94.2497V26.0122H95.9349V27.6186H94.2497V32.6269H95.8089V34.2333H94.3599ZM100.945 34.4223C100.336 34.4223 99.79 34.3226 99.307 34.1231C98.8346 33.9131 98.4303 33.6243 98.0944 33.2569C97.7689 32.8789 97.5169 32.4274 97.3384 31.9024C97.1599 31.367 97.0707 30.7685 97.0707 30.107C97.0707 29.4561 97.1547 28.8681 97.3226 28.3431C97.5011 27.8181 97.7531 27.3719 98.0786 27.0044C98.4041 26.6264 98.8031 26.3377 99.2755 26.1382C99.748 25.9282 100.283 25.8232 100.882 25.8232C101.522 25.8232 102.079 25.9335 102.551 26.154C103.024 26.3745 103.412 26.6737 103.717 27.0517C104.021 27.4297 104.247 27.8706 104.394 28.3746C104.552 28.8681 104.63 29.3983 104.63 29.9653V30.6267H99.1653V30.8315C99.1653 31.43 99.3333 31.9129 99.6693 32.2804C100.005 32.6374 100.504 32.8159 101.165 32.8159C101.669 32.8159 102.079 32.7109 102.394 32.5009C102.719 32.2909 103.008 32.0232 103.26 31.6977L104.347 32.9104C104.011 33.3829 103.549 33.7556 102.961 34.0286C102.383 34.2911 101.711 34.4223 100.945 34.4223ZM100.913 27.3352C100.378 27.3352 99.9528 27.5137 99.6378 27.8706C99.3228 28.2276 99.1653 28.6896 99.1653 29.2566V29.3826H102.536V29.2408C102.536 28.6738 102.394 28.2171 102.11 27.8706C101.837 27.5137 101.438 27.3352 100.913 27.3352ZM106.404 34.2333V26.0122H108.42V27.3824H108.499C108.656 26.9519 108.908 26.5845 109.254 26.28C109.601 25.9755 110.084 25.8232 110.703 25.8232C111.27 25.8232 111.759 25.9597 112.168 26.2327C112.578 26.5057 112.882 26.9204 113.082 27.4769H113.113C113.26 27.0149 113.549 26.6264 113.979 26.3115C114.42 25.986 114.971 25.8232 115.633 25.8232C116.441 25.8232 117.061 26.1015 117.491 26.6579C117.932 27.2144 118.153 28.0071 118.153 29.0361V34.2333H116.137V29.2408C116.137 28.0649 115.696 27.4769 114.814 27.4769C114.614 27.4769 114.42 27.5084 114.231 27.5714C114.053 27.6239 113.89 27.7079 113.743 27.8234C113.607 27.9284 113.496 28.0649 113.412 28.2329C113.328 28.3904 113.286 28.5793 113.286 28.7998V34.2333H111.27V29.2408C111.27 28.0649 110.829 27.4769 109.947 27.4769C109.758 27.4769 109.569 27.5084 109.38 27.5714C109.202 27.6239 109.039 27.7079 108.892 27.8234C108.756 27.9284 108.64 28.0649 108.546 28.2329C108.462 28.3904 108.42 28.5793 108.42 28.7998V34.2333H106.404Z"
                        fill="white" />
                    <path
                        d="M171.356 27.7445L170.427 27.5949C170.367 27.5848 170.312 27.5558 170.27 27.5121C170.227 27.4684 170.2 27.4123 170.192 27.352C170.174 27.2381 170.156 27.1237 170.132 27.0133C170.119 26.9541 170.126 26.8925 170.151 26.8374C170.176 26.7823 170.218 26.7364 170.27 26.7064L171.093 26.2498C171.155 26.218 171.203 26.1645 171.229 26.0995C171.255 26.0344 171.256 25.9622 171.232 25.8966L171.089 25.5048C171.065 25.439 171.018 25.3843 170.956 25.3514C170.894 25.3185 170.822 25.3097 170.754 25.3268L169.832 25.5048C169.772 25.5164 169.71 25.5085 169.655 25.4821C169.6 25.4558 169.555 25.4124 169.526 25.3585C169.473 25.2587 169.416 25.1589 169.356 25.059C169.324 25.007 169.309 24.9463 169.313 24.8854C169.318 24.8246 169.341 24.7667 169.38 24.7199L169.996 24.0098C170.044 23.959 170.071 23.8925 170.073 23.8228C170.075 23.7531 170.052 23.6851 170.007 23.6316L169.74 23.3111C169.696 23.2572 169.633 23.2218 169.564 23.2119C169.494 23.202 169.424 23.2182 169.366 23.2574L168.558 23.7427C168.506 23.7735 168.446 23.787 168.386 23.7812C168.326 23.7755 168.269 23.7508 168.224 23.7107C168.138 23.6356 168.049 23.5608 167.96 23.4892C167.913 23.4516 167.879 23.3998 167.863 23.3415C167.847 23.2832 167.85 23.2213 167.871 23.1648L168.206 22.2834C168.234 22.2194 168.238 22.1472 168.217 22.0806C168.196 22.0139 168.151 21.9574 168.09 21.9219L167.727 21.7114C167.666 21.677 167.595 21.666 167.527 21.6805C167.459 21.695 167.398 21.734 167.357 21.7901L166.764 22.5323C166.731 22.579 166.683 22.6132 166.629 22.6293C166.574 22.6455 166.515 22.6427 166.462 22.6213C166.462 22.6213 166.262 22.5394 166.113 22.4892C166.055 22.4701 166.006 22.4332 165.971 22.3839C165.936 22.3346 165.917 22.2755 165.918 22.215L165.932 21.2731C165.936 21.203 165.915 21.1338 165.871 21.0786C165.828 21.0233 165.766 20.9859 165.697 20.9732L165.284 20.902C165.215 20.89 165.144 20.9037 165.085 20.9405C165.025 20.9773 164.981 21.0347 164.96 21.1018L164.654 21.9938C164.634 22.0513 164.597 22.1011 164.547 22.1357C164.497 22.1704 164.437 22.1882 164.377 22.1865H164.028C163.967 22.1878 163.907 22.1698 163.858 22.1352C163.808 22.1006 163.77 22.0511 163.75 21.9938L163.444 21.1018C163.424 21.0347 163.379 20.9773 163.32 20.9405C163.26 20.9037 163.189 20.89 163.12 20.902L162.707 20.9732C162.638 20.9859 162.576 21.0233 162.533 21.0786C162.49 21.1338 162.468 21.203 162.472 21.2731L162.486 22.215C162.487 22.2756 162.469 22.3349 162.434 22.3843C162.398 22.4337 162.348 22.4705 162.291 22.4896C162.209 22.5216 162.031 22.5896 161.945 22.6217C161.846 22.6573 161.728 22.6288 161.632 22.5181L161.044 21.7937C161.003 21.7378 160.942 21.6991 160.874 21.6849C160.806 21.6706 160.735 21.6819 160.674 21.7164L160.311 21.9269C160.25 21.9617 160.205 22.0177 160.183 22.084C160.162 22.1504 160.165 22.2224 160.193 22.2862L160.528 23.1676C160.549 23.2242 160.552 23.286 160.536 23.3442C160.52 23.4025 160.486 23.4542 160.439 23.492C160.35 23.5633 160.261 23.6384 160.176 23.7135C160.13 23.7536 160.074 23.7783 160.014 23.7841C159.953 23.7899 159.893 23.7764 159.841 23.7456L159.045 23.2527C158.987 23.2145 158.917 23.1988 158.848 23.2087C158.779 23.2186 158.716 23.2534 158.671 23.3065L158.404 23.627C158.359 23.6804 158.336 23.7484 158.338 23.8181C158.34 23.8878 158.367 23.9544 158.415 24.0052L159.031 24.7153C159.071 24.7616 159.095 24.8196 159.099 24.8807C159.104 24.9418 159.088 25.0026 159.056 25.0543C158.995 25.1493 158.938 25.2491 158.885 25.3538C158.856 25.4074 158.81 25.4503 158.755 25.4766C158.7 25.5029 158.639 25.5112 158.579 25.5002L157.657 25.3221C157.589 25.3056 157.517 25.3146 157.455 25.3474C157.394 25.3802 157.346 25.4346 157.322 25.5002L157.179 25.8919C157.156 25.9576 157.157 26.0298 157.182 26.0948C157.208 26.1599 157.256 26.2134 157.318 26.2452L158.14 26.7021C158.193 26.7316 158.235 26.7774 158.26 26.8326C158.285 26.8879 158.291 26.9498 158.278 27.0091C158.257 27.123 158.236 27.2338 158.218 27.3477C158.209 27.4078 158.182 27.4637 158.14 27.5073C158.098 27.5509 158.043 27.5801 157.983 27.5906L157.054 27.7402C156.985 27.7487 156.921 27.782 156.875 27.8338C156.828 27.8857 156.802 27.9526 156.801 28.0222V28.4396C156.8 28.5097 156.826 28.5777 156.873 28.6299C156.92 28.6821 156.984 28.7149 157.054 28.7216L157.983 28.8712C158.043 28.8813 158.098 28.9103 158.14 28.954C158.183 28.9977 158.21 29.0538 158.218 29.1141C158.236 29.2281 158.254 29.3424 158.278 29.4528C158.291 29.512 158.284 29.5736 158.259 29.6287C158.234 29.6838 158.192 29.7297 158.14 29.7597L157.317 30.217C157.255 30.2488 157.207 30.3023 157.181 30.3673C157.155 30.4324 157.155 30.5046 157.178 30.5703L157.321 30.962C157.345 31.0279 157.392 31.0825 157.454 31.1154C157.516 31.1483 157.588 31.1571 157.656 31.1401L158.578 30.962C158.638 30.9504 158.7 30.9584 158.755 30.9847C158.81 31.0111 158.855 31.0544 158.884 31.1084C158.937 31.2081 158.994 31.3079 159.054 31.4079C159.086 31.4598 159.101 31.5205 159.097 31.5814C159.092 31.6422 159.069 31.7001 159.03 31.7469L158.414 32.4577C158.366 32.5085 158.339 32.5751 158.337 32.6448C158.335 32.7145 158.358 32.7825 158.403 32.8359L158.67 33.1564C158.714 33.2103 158.777 33.2457 158.846 33.2556C158.916 33.2656 158.986 33.2494 159.044 33.2102L159.852 32.7248C159.904 32.694 159.964 32.6805 160.024 32.6863C160.084 32.692 160.141 32.7167 160.186 32.7568C160.272 32.832 160.361 32.9068 160.45 32.9783C160.497 33.016 160.531 33.0677 160.547 33.126C160.563 33.1843 160.56 33.2462 160.539 33.3028L160.204 34.1842C160.176 34.2482 160.172 34.3203 160.194 34.3867C160.216 34.4532 160.261 34.5094 160.322 34.5446L160.685 34.755C160.745 34.7894 160.817 34.8004 160.885 34.7859C160.953 34.7714 161.013 34.7324 161.055 34.6763L161.653 33.9413C161.727 33.8487 161.849 33.8095 161.945 33.8487C162.066 33.8986 162.148 33.927 162.297 33.9773C162.355 33.9963 162.405 34.0331 162.44 34.0825C162.475 34.1319 162.494 34.1912 162.493 34.2518L162.479 35.1938C162.474 35.2638 162.496 35.333 162.539 35.3882C162.583 35.4435 162.645 35.481 162.714 35.4936L163.126 35.5648C163.195 35.5768 163.266 35.5631 163.326 35.5263C163.386 35.4895 163.43 35.4322 163.45 35.3651L163.757 34.4748C163.776 34.4173 163.814 34.3675 163.864 34.3329C163.914 34.2982 163.973 34.2804 164.034 34.2821H164.383C164.444 34.2808 164.503 34.2988 164.553 34.3334C164.603 34.368 164.641 34.4175 164.66 34.4748L164.967 35.3651C164.987 35.4322 165.031 35.4895 165.091 35.5263C165.151 35.5631 165.222 35.5768 165.291 35.5648L165.704 35.4936C165.773 35.481 165.835 35.4435 165.878 35.3882C165.921 35.333 165.943 35.2638 165.939 35.1938L165.924 34.2518C165.923 34.1912 165.942 34.1319 165.977 34.0825C166.012 34.0331 166.062 33.9963 166.12 33.9773C166.269 33.927 166.369 33.8879 166.462 33.8523C166.554 33.8166 166.668 33.8166 166.757 33.927L167.363 34.6728C167.404 34.7291 167.465 34.7681 167.534 34.7824C167.602 34.7967 167.674 34.7853 167.734 34.7504L168.097 34.5399C168.158 34.5051 168.204 34.449 168.226 34.3824C168.247 34.3158 168.244 34.2435 168.215 34.1795L167.88 33.2981C167.859 33.2415 167.856 33.1797 167.872 33.1214C167.888 33.0631 167.922 33.0113 167.969 32.9734C168.058 32.9021 168.147 32.8273 168.233 32.7522C168.278 32.7121 168.335 32.6874 168.395 32.6817C168.455 32.6759 168.515 32.6894 168.567 32.7202L169.372 33.207C169.43 33.2452 169.501 33.2609 169.569 33.251C169.638 33.2411 169.701 33.2063 169.746 33.1532L170.013 32.8327C170.058 32.7793 170.081 32.7113 170.079 32.6416C170.077 32.5719 170.05 32.5053 170.002 32.4545L169.387 31.7444C169.347 31.6981 169.322 31.6401 169.318 31.579C169.313 31.5179 169.329 31.457 169.362 31.4054C169.422 31.3092 169.479 31.2094 169.533 31.1059C169.562 31.0523 169.607 31.0093 169.662 30.9831C169.717 30.9568 169.779 30.9485 169.838 30.9595L170.76 31.1376C170.828 31.1541 170.9 31.1451 170.962 31.1123C171.023 31.0795 171.071 31.0251 171.095 30.9595L171.238 30.5678C171.262 30.5021 171.261 30.4299 171.235 30.3649C171.209 30.2998 171.161 30.2463 171.099 30.2145L170.276 29.758C170.223 29.7285 170.181 29.6827 170.156 29.6274C170.131 29.5721 170.125 29.5103 170.138 29.451C170.159 29.337 170.18 29.2263 170.198 29.1123C170.207 29.0522 170.234 28.9964 170.276 28.9527C170.318 28.9091 170.373 28.88 170.433 28.8694L171.362 28.7199C171.431 28.7114 171.495 28.6781 171.541 28.6262C171.588 28.5744 171.614 28.5075 171.615 28.4378V28.0197C171.611 27.9507 171.583 27.8853 171.535 27.8349C171.488 27.7846 171.425 27.7526 171.356 27.7445ZM164.209 23.1053C165.346 23.1048 166.451 23.483 167.35 24.1801C168.249 24.8773 168.89 25.8538 169.172 26.9557C169.193 27.0397 169.195 27.1274 169.177 27.2121C169.159 27.2968 169.122 27.3763 169.068 27.4446C169.015 27.5129 168.947 27.5681 168.869 27.606C168.791 27.644 168.706 27.6637 168.619 27.6636H164.871C164.771 27.6636 164.672 27.637 164.585 27.5864C164.498 27.5358 164.426 27.463 164.376 27.3755L162.521 24.1095C162.477 24.0336 162.452 23.9488 162.447 23.8616C162.442 23.7744 162.457 23.6871 162.491 23.6066C162.525 23.5261 162.577 23.4545 162.643 23.3972C162.709 23.34 162.787 23.2987 162.871 23.2766C163.308 23.1621 163.757 23.1045 164.209 23.1053ZM159.08 28.2334C159.08 27.5468 159.217 26.867 159.484 26.2344C159.751 25.6018 160.142 25.0293 160.635 24.5508C160.697 24.4892 160.773 24.4428 160.856 24.4151C160.939 24.3875 161.027 24.3793 161.114 24.3913C161.2 24.4032 161.283 24.435 161.355 24.4841C161.428 24.5331 161.488 24.5983 161.531 24.6744L163.392 27.9485C163.441 28.0346 163.467 28.132 163.467 28.2311C163.467 28.3302 163.441 28.4276 163.392 28.5137L161.516 31.7793C161.472 31.8552 161.412 31.92 161.339 31.9687C161.267 32.0175 161.184 32.0489 161.097 32.0604C161.01 32.072 160.922 32.0635 160.839 32.0355C160.756 32.0075 160.681 31.9607 160.619 31.8989C160.132 31.4212 159.744 30.8509 159.48 30.2214C159.216 29.592 159.08 28.9161 159.08 28.2334ZM164.209 33.3615C163.749 33.3627 163.292 33.3034 162.849 33.1852C162.764 33.1628 162.686 33.1212 162.62 33.0637C162.554 33.0062 162.502 32.9343 162.469 32.8536C162.435 32.7729 162.421 32.6855 162.426 32.5983C162.432 32.5111 162.457 32.4263 162.501 32.3505L164.373 29.0902C164.424 29.0035 164.496 28.9315 164.582 28.8815C164.669 28.8314 164.768 28.8052 164.868 28.8053H168.621C168.707 28.8053 168.793 28.8251 168.871 28.8631C168.949 28.901 169.017 28.9563 169.07 29.0245C169.123 29.0927 169.16 29.1722 169.178 29.2569C169.196 29.3416 169.195 29.4293 169.174 29.5133C168.891 30.6149 168.249 31.5911 167.35 32.2878C166.451 32.9846 165.346 33.3623 164.209 33.3615Z"
                        fill="#AEFF01" />
                </svg>

            </div>
            <div class="layer color-theory-element">
                <svg width="296" height="56" viewBox="0 0 296 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1601_112" fill="white">
                        <path d="M0 0H296V56H0V0Z" />
                    </mask>
                    <path d="M0 0H296V56H0V0Z" fill="white" fill-opacity="0.08" />
                    <path
                        d="M20.26 27.02V31.99C20.26 33.81 20.26 33.81 21.98 34.97L26.71 37.7C27.42 38.11 28.58 38.11 29.29 37.7L34.02 34.97C35.74 33.81 35.74 33.81 35.74 31.99V27.02C35.74 25.2 35.74 25.2 34.02 24.04L29.29 21.31C28.58 20.9 27.42 20.9 26.71 21.31L21.98 24.04C20.26 25.2 20.26 25.2 20.26 27.02Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M33.5 23.63V21C33.5 19 32.5 18 30.5 18H25.5C23.5 18 22.5 19 22.5 21V23.56" stroke="white"
                        stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M28.63 26.99L29.2 27.88C29.29 28.02 29.49 28.16 29.64 28.2L30.66 28.46C31.29 28.62 31.46 29.16 31.05 29.66L30.38 30.47C30.28 30.6 30.2 30.83 30.21 30.99L30.27 32.04C30.31 32.69 29.85 33.02 29.25 32.78L28.27 32.39C28.12 32.33 27.87 32.33 27.72 32.39L26.74 32.78C26.14 33.02 25.68 32.68 25.72 32.04L25.78 30.99C25.79 30.83 25.71 30.59 25.61 30.47L24.94 29.66C24.53 29.16 24.7 28.62 25.33 28.46L26.35 28.2C26.51 28.16 26.71 28.01 26.79 27.88L27.36 26.99C27.72 26.45 28.28 26.45 28.63 26.99Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M66 18V35C66 36.66 67.34 38 69 38H86" stroke="white" stroke-opacity="0.64"
                        stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M69 33L73.59 27.64C74.35 26.76 75.7 26.7 76.52 27.53L77.47 28.48C78.29 29.3 79.64 29.25 80.4 28.37L85 23"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M115 38H133" stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M117.6 24.38H116C115.45 24.38 115 24.83 115 25.38V34C115 34.55 115.45 35 116 35H117.6C118.15 35 118.6 34.55 118.6 34V25.38C118.6 24.83 118.15 24.38 117.6 24.38Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M124.799 21.1899H123.199C122.649 21.1899 122.199 21.6399 122.199 22.1899V33.9999C122.199 34.5499 122.649 34.9999 123.199 34.9999H124.799C125.349 34.9999 125.799 34.5499 125.799 33.9999V22.1899C125.799 21.6399 125.349 21.1899 124.799 21.1899Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M132 18H130.4C129.85 18 129.4 18.45 129.4 19V34C129.4 34.55 129.85 35 130.4 35H132C132.55 35 133 34.55 133 34V19C133 18.45 132.55 18 132 18Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M169.02 18.84L163.63 23.04C162.73 23.74 162 25.23 162 26.36V33.77C162 36.09 163.89 37.99 166.21 37.99H177.79C180.11 37.99 182 36.09 182 33.78V26.5C182 25.29 181.19 23.74 180.2 23.05L174.02 18.72C172.62 17.74 170.37 17.79 169.02 18.84Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M176.5 27.5L172.3 31.7L170.7 29.3L167.5 32.5" stroke="white" stroke-opacity="0.64"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M174.5 27.5H176.5V29.5" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M216.81 18L213.19 21.63" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M223.19 18L226.81 21.63" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M210 23.85C210 22 210.99 21.85 212.22 21.85H227.78C229.01 21.85 230 22 230 23.85C230 26 229.01 25.85 227.78 25.85H212.22C210.99 25.85 210 26 210 23.85Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" />
                    <path d="M217.76 30V33.55" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" />
                    <path d="M222.36 30V33.55" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-linecap="round" />
                    <path
                        d="M211.5 26L212.91 34.64C213.23 36.58 214 38 216.86 38H222.89C226 38 226.46 36.64 226.82 34.76L228.5 26"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round" />
                    <path
                        d="M271 18V28C271 29.1 270.1 30 269 30H258V23.62C258.73 24.49 259.85 25.03 261.09 25C262.1 24.98 263.01 24.59 263.69 23.94C264 23.68 264.26 23.35 264.46 22.99C264.82 22.38 265.02 21.66 265 20.91C264.97 19.74 264.45 18.71 263.64 18H271Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M278 30V33C278 34.66 276.66 36 275 36H274C274 34.9 273.1 34 272 34C270.9 34 270 34.9 270 36H266C266 34.9 265.1 34 264 34C262.9 34 262 34.9 262 36H261C259.34 36 258 34.66 258 33V30H269C270.1 30 271 29.1 271 28V21H272.84C273.56 21 274.22 21.39 274.58 22.01L276.29 25H275C274.45 25 274 25.45 274 26V29C274 29.55 274.45 30 275 30H278Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M264 38C265.105 38 266 37.1046 266 36C266 34.8954 265.105 34 264 34C262.895 34 262 34.8954 262 36C262 37.1046 262.895 38 264 38Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M272 38C273.105 38 274 37.1046 274 36C274 34.8954 273.105 34 272 34C270.895 34 270 34.8954 270 36C270 37.1046 270.895 38 272 38Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M278 28V30H275C274.45 30 274 29.55 274 29V26C274 25.45 274.45 25 275 25H276.29L278 28Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M265 21C265 22.2 264.47 23.27 263.64 24C262.93 24.62 262.01 25 261 25C258.79 25 257 23.21 257 21C257 19.74 257.58 18.61 258.5 17.88C259.19 17.33 260.06 17 261 17C263.21 17 265 18.79 265 21Z"
                        stroke="white" stroke-opacity="0.64" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M261.25 19.75V21.25L260 22" stroke="white" stroke-opacity="0.64" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M0 0V-1H-1V0H0ZM296 0H297V-1H296V0ZM296 56V57H297V56H296ZM0 56H-1V57H0V56ZM0 1H296V-1H0V1ZM295 0V56H297V0H295ZM296 55H0V57H296V55ZM1 56V0H-1V56H1Z"
                        fill="url(#paint0_radial_1601_112)" mask="url(#path-1-inside-1_1601_112)" />
                    <defs>
                        <radialGradient id="paint0_radial_1601_112" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(201 2.26199e-06) rotate(180) scale(138 108.611)">
                            <stop stop-color="#4A4A4A" />
                            <stop offset="0.5" stop-color="#B9B9B9" />
                            <stop offset="1" stop-color="#4A4A4A" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div class="layer dashed-hearth">
                <svg class="dashed-hearth-svg" width="27" height="24" viewBox="0 0 27 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.2208 24L12.6663 23.6304C10.0307 21.8702 6.69591 19.8809 4.22605 16.957C1.62312 13.8766 0.374326 10.713 0.406363 7.28456C0.445175 3.45625 3.51509 0.34259 7.24976 0.34259C10.2137 0.34259 12.1845 2.06761 13.2208 3.3127C14.257 2.06761 16.2279 0.34259 19.1918 0.34259C22.9265 0.34259 25.9964 3.45625 26.0352 7.28271C26.0697 10.713 24.8209 13.8748 22.2155 16.9551C19.7457 19.8809 16.4108 21.8702 13.7753 23.6304L13.2208 24Z"
                        fill="url(#paint0_angular_1036_2163)" />
                    <defs>
                        <radialGradient id="paint0_angular_1036_2163" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(13.0957 3.26455) rotate(-90) scale(3.9659 3.83093)">
                            <stop stop-color="#E50145" />
                            <stop offset="0.458333" stop-color="#9D0030" />
                            <stop offset="0.896743" stop-color="#CA1B50" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div class="layer cursor-collaborator">
                <svg width="35" height="45" viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.0076 0.844417L33.5385 44.6192L20.8536 29.2584L0.933988 29.5252L34.0076 0.844417Z"
                        fill="#9E31F4" />
                </svg>
            </div>
            <div class="layer cursor-collaborator2">
                <svg width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.30246 2.54659L34.3754 31.2282L14.4558 30.9609L1.77048 46.3214L1.30246 2.54659Z"
                        stroke="#AEFF01" stroke-width="2" />
                </svg>

            </div>
            <div class="layer message-box">
                <div class="layer color-prism">
                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="67.0015" height="67.0015" fill="url(#pattern0)" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1036_2161" transform="scale(0.0104167)" />
                            </pattern>
                            <image id="image0_1036_2161" width="96" height="96"
                                xlink:href="data:image/png;base64,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" />
                        </defs>
                    </svg>
                </div>
                <div class="layer atomic-design-element">
                    <svg width="289" height="56" viewBox="0 0 289 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="288.8" height="55.2383" fill="#212121" />
                        <path
                            d="M25.6691 33.6192L24.7921 30.8314H20.9081L20.0467 33.6192H17.948L21.6128 22.6875H24.1813L27.8148 33.6192H25.6691ZM22.8814 24.5668H22.8031L21.4092 29.0617H24.2909L22.8814 24.5668ZM31.6241 33.6192C30.935 33.6192 30.4077 33.4417 30.0422 33.0867C29.6873 32.7212 29.5098 32.2044 29.5098 31.5362V27.0413H28.3038V25.4439H28.9303C29.2331 25.4439 29.4367 25.376 29.5411 25.2403C29.6559 25.0941 29.7134 24.8801 29.7134 24.5982V23.2043H31.5144V25.4439H33.1902V27.0413H31.5144V32.0217H33.0649V33.6192H31.6241ZM38.1098 33.8071C37.5251 33.8071 36.9978 33.7079 36.5279 33.5095C36.0685 33.3112 35.6718 33.024 35.3377 32.6482C35.014 32.2723 34.7634 31.8233 34.5859 31.3013C34.4084 30.7688 34.3197 30.1736 34.3197 29.5159C34.3197 28.8581 34.4084 28.2682 34.5859 27.7461C34.7634 27.2241 35.014 26.7803 35.3377 26.4149C35.6718 26.039 36.0685 25.7519 36.5279 25.5535C36.9978 25.3551 37.5251 25.2559 38.1098 25.2559C38.6944 25.2559 39.2217 25.3551 39.6916 25.5535C40.1614 25.7519 40.5582 26.039 40.8818 26.4149C41.2159 26.7803 41.4718 27.2241 41.6492 27.7461C41.8267 28.2682 41.9155 28.8581 41.9155 29.5159C41.9155 30.1736 41.8267 30.7688 41.6492 31.3013C41.4718 31.8233 41.2159 32.2723 40.8818 32.6482C40.5582 33.024 40.1614 33.3112 39.6916 33.5095C39.2217 33.7079 38.6944 33.8071 38.1098 33.8071ZM38.1098 32.194C38.6422 32.194 39.0599 32.0321 39.3627 31.7085C39.6655 31.3848 39.8169 30.9097 39.8169 30.2833V28.7641C39.8169 28.1481 39.6655 27.6782 39.3627 27.3546C39.0599 27.0309 38.6422 26.8691 38.1098 26.8691C37.5877 26.8691 37.1753 27.0309 36.8725 27.3546C36.5697 27.6782 36.4183 28.1481 36.4183 28.7641V30.2833C36.4183 30.9097 36.5697 31.3848 36.8725 31.7085C37.1753 32.0321 37.5877 32.194 38.1098 32.194ZM43.6927 33.6192V25.4439H45.6974V26.8064H45.7757C45.9323 26.3783 46.1829 26.0129 46.5274 25.7101C46.872 25.4073 47.3523 25.2559 47.9683 25.2559C48.5321 25.2559 49.0176 25.3917 49.4248 25.6631C49.832 25.9346 50.1348 26.347 50.3332 26.9004H50.3645C50.5107 26.441 50.7978 26.0547 51.2259 25.7414C51.6644 25.4178 52.2126 25.2559 52.8703 25.2559C53.6743 25.2559 54.2903 25.5326 54.7184 26.086C55.1569 26.6394 55.3762 27.4277 55.3762 28.4509V33.6192H53.3715V28.6545C53.3715 27.4851 52.933 26.9004 52.0559 26.9004C51.8576 26.9004 51.6644 26.9317 51.4765 26.9944C51.299 27.0466 51.1371 27.1301 50.991 27.2449C50.8552 27.3494 50.7456 27.4851 50.6621 27.6521C50.5785 27.8088 50.5368 27.9967 50.5368 28.216V33.6192H48.5321V28.6545C48.5321 27.4851 48.0936 26.9004 47.2165 26.9004C47.0286 26.9004 46.8407 26.9317 46.6527 26.9944C46.4752 27.0466 46.3134 27.1301 46.1672 27.2449C46.0315 27.3494 45.9166 27.4851 45.8227 27.6521C45.7391 27.8088 45.6974 27.9967 45.6974 28.216V33.6192H43.6927ZM58.5977 24.2536C58.18 24.2536 57.8772 24.1596 57.6893 23.9717C57.5118 23.7838 57.4231 23.5436 57.4231 23.2513V22.938C57.4231 22.6457 57.5118 22.4055 57.6893 22.2176C57.8772 22.0297 58.18 21.9357 58.5977 21.9357C59.0049 21.9357 59.3024 22.0297 59.4904 22.2176C59.6783 22.4055 59.7723 22.6457 59.7723 22.938V23.2513C59.7723 23.5436 59.6783 23.7838 59.4904 23.9717C59.3024 24.1596 59.0049 24.2536 58.5977 24.2536ZM57.5953 25.4439H59.6V33.6192H57.5953V25.4439ZM65.1499 33.8071C64.5443 33.8071 64.0066 33.7079 63.5368 33.5095C63.0669 33.3112 62.6702 33.024 62.3465 32.6482C62.0333 32.2723 61.7931 31.8233 61.6261 31.3013C61.459 30.7688 61.3755 30.1736 61.3755 29.5159C61.3755 28.8581 61.459 28.2682 61.6261 27.7461C61.7931 27.2241 62.0333 26.7803 62.3465 26.4149C62.6702 26.039 63.0669 25.7519 63.5368 25.5535C64.0066 25.3551 64.5443 25.2559 65.1499 25.2559C65.9748 25.2559 66.6534 25.4387 67.1859 25.8041C67.7288 26.1695 68.1204 26.6759 68.3605 27.3233L66.7161 28.0593C66.6221 27.7148 66.4446 27.4329 66.1836 27.2136C65.933 26.9839 65.5884 26.8691 65.1499 26.8691C64.5861 26.8691 64.1632 27.0466 63.8813 27.4016C63.6099 27.7566 63.4741 28.2212 63.4741 28.7954V30.2833C63.4741 30.8575 63.6099 31.3222 63.8813 31.6771C64.1632 32.0217 64.5861 32.194 65.1499 32.194C65.6302 32.194 66.0009 32.0739 66.2619 31.8338C66.5229 31.5832 66.7265 31.2752 66.8727 30.9097L68.4075 31.6458C68.136 32.3663 67.7236 32.9092 67.1703 33.2746C66.6169 33.6296 65.9434 33.8071 65.1499 33.8071ZM73.7798 22.6875H77.7578C78.4678 22.6875 79.1099 22.8023 79.6842 23.032C80.2688 23.2617 80.7648 23.6063 81.172 24.0657C81.5896 24.5146 81.9081 25.0837 82.1273 25.7728C82.357 26.4514 82.4719 27.2449 82.4719 28.1533C82.4719 29.0617 82.357 29.8604 82.1273 30.5495C81.9081 31.2282 81.5896 31.7972 81.172 32.2566C80.7648 32.7056 80.2688 33.0449 79.6842 33.2746C79.1099 33.5043 78.4678 33.6192 77.7578 33.6192H73.7798V22.6875ZM77.7578 31.7868C78.5304 31.7868 79.1412 31.5623 79.5902 31.1133C80.0496 30.6539 80.2793 29.9544 80.2793 29.0147V27.2919C80.2793 26.3522 80.0496 25.6579 79.5902 25.209C79.1412 24.7495 78.5304 24.5198 77.7578 24.5198H75.8471V31.7868H77.7578ZM87.7569 33.8071C87.1513 33.8071 86.6084 33.7079 86.1281 33.5095C85.6583 33.3007 85.2563 33.0136 84.9222 32.6482C84.5985 32.2723 84.3479 31.8233 84.1704 31.3013C83.9929 30.7688 83.9042 30.1736 83.9042 29.5159C83.9042 28.8685 83.9877 28.2838 84.1548 27.7618C84.3323 27.2397 84.5829 26.796 84.9065 26.4305C85.2302 26.0547 85.627 25.7675 86.0968 25.5692C86.5666 25.3603 87.0991 25.2559 87.6943 25.2559C88.3312 25.2559 88.8845 25.3656 89.3544 25.5848C89.8242 25.8041 90.2105 26.1017 90.5133 26.4775C90.8161 26.8534 91.0406 27.2919 91.1868 27.7931C91.3434 28.2838 91.4217 28.8111 91.4217 29.3749V30.0327H85.9872V30.2363C85.9872 30.8314 86.1542 31.3117 86.4883 31.6771C86.8224 32.0321 87.3184 32.2096 87.9762 32.2096C88.4773 32.2096 88.8845 32.1052 89.1978 31.8964C89.5214 31.6876 89.8086 31.4213 90.0592 31.0977L91.1398 32.3036C90.8057 32.7735 90.3463 33.1441 89.7616 33.4156C89.1873 33.6766 88.5191 33.8071 87.7569 33.8071ZM87.7256 26.7594C87.1931 26.7594 86.7702 26.9369 86.457 27.2919C86.1438 27.6469 85.9872 28.1063 85.9872 28.6701V28.7954H89.3387V28.6545C89.3387 28.0907 89.1978 27.6365 88.9159 27.2919C88.6444 26.9369 88.2476 26.7594 87.7256 26.7594ZM95.8636 33.8071C95.0805 33.8071 94.4227 33.6766 93.8902 33.4156C93.3577 33.1441 92.8879 32.7735 92.4807 32.3036L93.7023 31.1133C94.0051 31.4579 94.334 31.7294 94.689 31.9277C95.0544 32.1261 95.472 32.2253 95.9419 32.2253C96.4222 32.2253 96.7667 32.1418 96.9755 31.9747C97.1948 31.8077 97.3044 31.578 97.3044 31.2856C97.3044 31.0455 97.2261 30.8575 97.0695 30.7218C96.9233 30.5756 96.6675 30.4764 96.3021 30.4242L95.4877 30.3146C94.6002 30.1997 93.9215 29.9492 93.4517 29.5628C92.9923 29.1661 92.7626 28.5918 92.7626 27.8401C92.7626 27.4433 92.8357 27.0883 92.9819 26.7751C93.128 26.4514 93.3368 26.18 93.6083 25.9607C93.8798 25.731 94.2035 25.5587 94.5793 25.4439C94.9656 25.3186 95.3937 25.2559 95.8636 25.2559C96.2603 25.2559 96.6101 25.2873 96.9129 25.3499C97.2261 25.4021 97.508 25.4856 97.7586 25.6005C98.0092 25.7049 98.2389 25.8406 98.4477 26.0077C98.6565 26.1643 98.8601 26.3418 99.0585 26.5402L97.8839 27.7148C97.6438 27.4642 97.3566 27.2554 97.0225 27.0883C96.6884 26.9213 96.323 26.8377 95.9262 26.8377C95.4877 26.8377 95.1692 26.9161 94.9709 27.0727C94.7829 27.2293 94.689 27.4329 94.689 27.6835C94.689 27.9549 94.7673 28.1638 94.9239 28.3099C95.0909 28.4457 95.3676 28.5448 95.7539 28.6075L96.584 28.7171C98.3485 28.9677 99.2308 29.7717 99.2308 31.129C99.2308 31.5258 99.1473 31.8912 98.9802 32.2253C98.8236 32.549 98.5991 32.8309 98.3068 33.071C98.0144 33.3007 97.6594 33.4834 97.2418 33.6192C96.8346 33.7445 96.3752 33.8071 95.8636 33.8071ZM102.003 24.2536C101.586 24.2536 101.283 24.1596 101.095 23.9717C100.917 23.7838 100.829 23.5436 100.829 23.2513V22.938C100.829 22.6457 100.917 22.4055 101.095 22.2176C101.283 22.0297 101.586 21.9357 102.003 21.9357C102.41 21.9357 102.708 22.0297 102.896 22.2176C103.084 22.4055 103.178 22.6457 103.178 22.938V23.2513C103.178 23.5436 103.084 23.7838 102.896 23.9717C102.708 24.1596 102.41 24.2536 102.003 24.2536ZM101.001 25.4439H103.006V33.6192H101.001V25.4439ZM112.706 34.3083C112.706 34.7364 112.627 35.1122 112.471 35.4359C112.325 35.77 112.079 36.0467 111.735 36.266C111.39 36.4852 110.946 36.6523 110.404 36.7671C109.861 36.882 109.198 36.9394 108.415 36.9394C107.725 36.9394 107.141 36.8924 106.66 36.7985C106.18 36.7149 105.783 36.5896 105.47 36.4226C105.167 36.266 104.948 36.0676 104.812 35.8274C104.677 35.5873 104.609 35.3158 104.609 35.013C104.609 34.5536 104.734 34.1934 104.985 33.9324C105.246 33.6818 105.606 33.52 106.065 33.4469V33.2746C105.731 33.1911 105.47 33.0293 105.282 32.7891C105.105 32.5385 105.016 32.2462 105.016 31.9121C105.016 31.7032 105.058 31.5205 105.141 31.3639C105.225 31.1969 105.334 31.0559 105.47 30.9411C105.616 30.8262 105.778 30.7322 105.956 30.6591C106.133 30.5756 106.321 30.513 106.519 30.4712V30.4086C106.018 30.1789 105.642 29.8604 105.392 29.4532C105.152 29.046 105.032 28.571 105.032 28.028C105.032 27.1927 105.319 26.5245 105.893 26.0233C106.467 25.5117 107.308 25.2559 108.415 25.2559C108.665 25.2559 108.91 25.2716 109.151 25.3029C109.401 25.3342 109.631 25.3864 109.84 25.4595V25.1933C109.84 24.3998 110.226 24.003 110.999 24.003H112.267V25.5378H110.529V25.7571C110.957 25.9972 111.275 26.3105 111.484 26.6968C111.693 27.0831 111.797 27.5269 111.797 28.028C111.797 28.8529 111.51 29.5159 110.936 30.017C110.372 30.5182 109.532 30.7688 108.415 30.7688C107.934 30.7688 107.517 30.7218 107.162 30.6278C107.005 30.7009 106.869 30.8001 106.754 30.9254C106.64 31.0402 106.582 31.1864 106.582 31.3639C106.582 31.7711 106.937 31.9747 107.647 31.9747H109.84C110.842 31.9747 111.568 32.1835 112.017 32.6012C112.476 33.0084 112.706 33.5774 112.706 34.3083ZM110.826 34.5432C110.826 34.2822 110.722 34.0786 110.513 33.9324C110.304 33.7862 109.944 33.7131 109.433 33.7131H106.645C106.363 33.922 106.222 34.2039 106.222 34.5589C106.222 34.8721 106.352 35.1175 106.613 35.295C106.874 35.4724 107.318 35.5612 107.945 35.5612H108.947C109.605 35.5612 110.08 35.4777 110.372 35.3106C110.675 35.1436 110.826 34.8878 110.826 34.5432ZM108.415 29.4062C109.396 29.4062 109.887 28.9886 109.887 28.1533V27.8871C109.887 27.0518 109.396 26.6341 108.415 26.6341C107.433 26.6341 106.942 27.0518 106.942 27.8871V28.1533C106.942 28.9886 107.433 29.4062 108.415 29.4062ZM113.864 33.6192V25.4439H115.868V26.8064H115.946C116.114 26.3679 116.375 26.0025 116.73 25.7101C117.095 25.4073 117.596 25.2559 118.233 25.2559C119.079 25.2559 119.726 25.5326 120.175 26.086C120.624 26.6394 120.849 27.4277 120.849 28.4509V33.6192H118.844V28.6545C118.844 28.0698 118.739 27.6313 118.531 27.3389C118.322 27.0466 117.977 26.9004 117.497 26.9004C117.288 26.9004 117.085 26.9317 116.886 26.9944C116.698 27.0466 116.526 27.1301 116.369 27.2449C116.223 27.3494 116.103 27.4851 116.009 27.6521C115.915 27.8088 115.868 27.9967 115.868 28.216V33.6192H113.864Z"
                            fill="white" />
                        <path
                            d="M176.712 29.3194C179.059 29.3194 180.961 27.4168 180.961 25.0698C180.961 22.7228 179.059 20.8202 176.712 20.8202C174.365 20.8202 172.462 22.7228 172.462 25.0698C172.462 27.4168 174.365 29.3194 176.712 29.3194Z"
                            stroke="#606060" stroke-width="1.13324" stroke-linejoin="round" />
                        <path
                            d="M179.828 34.419C182.175 34.419 184.078 32.5164 184.078 30.1694C184.078 27.8224 182.175 25.9197 179.828 25.9197C177.481 25.9197 175.579 27.8224 175.579 30.1694C175.579 32.5164 177.481 34.419 179.828 34.419Z"
                            stroke="#606060" stroke-width="1.13324" stroke-linejoin="round" />
                        <path
                            d="M173.595 34.419C175.942 34.419 177.845 32.5164 177.845 30.1694C177.845 27.8224 175.942 25.9197 173.595 25.9197C171.248 25.9197 169.346 27.8224 169.346 30.1694C169.346 32.5164 171.248 34.419 173.595 34.419Z"
                            stroke="#606060" stroke-width="1.13324" stroke-linejoin="round" />
                        <g clip-path="url(#clip0_1036_2192)">
                            <path d="M211.276 29.8861H200.51L205.893 20.2536L211.276 29.8861Z" stroke="#737373"
                                stroke-width="1.13324" stroke-linejoin="round" />
                            <path
                                d="M208.773 25.4431C209.749 24.8932 210.878 24.68 211.988 24.8365C213.097 24.9929 214.124 25.5103 214.91 26.3086C215.696 27.1069 216.197 28.1418 216.336 29.2534C216.475 30.365 216.244 31.4914 215.679 32.4587C215.114 33.4259 214.246 34.1802 213.209 34.6049C212.172 35.0296 211.025 35.1012 209.943 34.8086C208.862 34.5159 207.907 33.8754 207.226 32.9859C206.545 32.0963 206.176 31.0074 206.176 29.8871"
                                stroke="#737373" stroke-width="1.13324" stroke-linejoin="round" />
                        </g>
                        <path
                            d="M240.173 27.6196C239.696 27.6196 239.219 27.5349 238.847 27.3657L233.606 24.9756C233.366 24.8665 232.807 24.5475 232.807 23.9451C232.807 23.3427 233.366 23.0243 233.607 22.9138L238.893 20.5032C239.622 20.1703 240.721 20.1703 241.45 20.5032L246.74 22.9138C246.98 23.0233 247.539 23.3423 247.539 23.9451C247.539 24.5478 246.98 24.8658 246.74 24.976L241.498 27.3657C241.127 27.5349 240.65 27.6196 240.173 27.6196Z"
                            fill="#AEFF01" />
                        <path
                            d="M246.737 26.5859L246.203 26.3447L244.83 26.9729L241.501 28.4957C241.129 28.6657 240.651 28.7503 240.175 28.7503C239.699 28.7503 239.222 28.6657 238.85 28.4957L235.519 26.9729L234.145 26.3447L233.606 26.5869C233.366 26.6964 232.807 27.0176 232.807 27.6196C232.807 28.2216 233.366 28.5432 233.606 28.6526L238.847 31.0476C239.217 31.2176 239.695 31.3026 240.173 31.3026C240.652 31.3026 241.127 31.2176 241.499 31.048L246.736 28.6537C246.977 28.5442 247.539 28.2248 247.539 27.6196C247.539 27.0144 246.981 26.6964 246.737 26.5859Z"
                            fill="#AEFF01" />
                        <path
                            d="M246.737 30.2685L246.203 30.0277L244.83 30.6556L241.501 32.1766C241.129 32.3459 240.651 32.4309 240.175 32.4309C239.699 32.4309 239.222 32.3462 238.85 32.1766L235.519 30.6538L234.145 30.0277L233.606 30.2699C233.366 30.3794 232.807 30.7006 232.807 31.3026C232.807 31.9046 233.366 32.2258 233.606 32.3349L238.847 34.7285C239.217 34.8978 239.696 34.9856 240.173 34.9856C240.65 34.9856 241.125 34.8978 241.497 34.7282L246.735 32.3353C246.977 32.2262 247.539 31.9068 247.539 31.3026C247.539 30.6984 246.981 30.3794 246.737 30.2685Z"
                            fill="#AEFF01" />
                        <path d="M277.003 29.3194L278.703 31.0193L277.003 32.7191" stroke="#737373"
                            stroke-width="1.13324" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M277.003 22.52L278.703 24.2199L277.003 25.9197" stroke="#737373" stroke-width="1.13324"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M265.104 31.0193H268.121C268.588 31.0193 269.047 30.9042 269.458 30.6841C269.869 30.464 270.22 30.1459 270.479 29.7579L271.904 27.6196"
                            stroke="#737373" stroke-width="1.13324" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M265.104 24.2199H268.121C268.588 24.2199 269.047 24.335 269.458 24.5551C269.869 24.7751 270.22 25.0933 270.479 25.4813L273.329 29.7579C273.588 30.1459 273.939 30.464 274.35 30.6841C274.761 30.9041 275.22 31.0193 275.686 31.0193H277.57"
                            stroke="#737373" stroke-width="1.13324" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M277.57 24.2199H275.686C275.22 24.2199 274.761 24.335 274.35 24.5551C273.938 24.7751 273.588 25.0933 273.329 25.4813L273.037 25.9197"
                            stroke="#737373" stroke-width="1.13324" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <clipPath id="clip0_1036_2192">
                                <rect width="18.1318" height="18.1318" fill="white"
                                    transform="translate(199.377 18.5533)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div class="hero-text">
                    <h1 class="text-center">
                        Nous construisons la future génération de <span class="rotator" id="js-rotating">designer,
                            codeur, marketeur, manager, d'entrepreneur</span>
                    </h1>
                    <p class="text-center para big">
                        Grâce aux meilleures programmes de formations courtes durée, en développant les compétences
                        nécessaire aux industries numériques.
                    </p>
                </div>
            </div>
            <div class="layer star">
                <svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_dddddd_1648_1853)">
                        <path
                            d="M58.7638 52L59.4429 58.0846L65.5276 58.7638L59.4429 59.4429L58.7638 65.5276L58.0846 59.4429L52 58.7638L58.0846 58.0846L58.7638 52Z"
                            fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_dddddd_1648_1853" x="0.865707" y="0.865707" width="115.796" height="115.796"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="0.608742" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1648_1853" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1.21748" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_1648_1853"
                                result="effect2_dropShadow_1648_1853" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="4.26119" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="effect2_dropShadow_1648_1853"
                                result="effect3_dropShadow_1648_1853" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="8.52238" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="effect3_dropShadow_1648_1853"
                                result="effect4_dropShadow_1648_1853" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="14.6098" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="effect4_dropShadow_1648_1853"
                                result="effect5_dropShadow_1648_1853" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="25.5671" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="effect5_dropShadow_1648_1853"
                                result="effect6_dropShadow_1648_1853" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_1648_1853"
                                result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    name: 'HeroIntro',
    props: {
        msg: String
    }
}



</script>

<style scoped lang="css">


</style>