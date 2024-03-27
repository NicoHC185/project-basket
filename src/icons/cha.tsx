import React from 'react';
import PropTypes from 'prop-types';

const CHA = ({ size = 100 }: { size?: number }) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 150 150"
      fill="none"
      fillRule="evenodd"
      role="img"
      aria-describedby='title'
    >
      <title id="title">Charlotte Hornets</title>
      <defs>
        <path id="A_CHA" d="M.001 113.78h111.91V.005H.001z" />
        <path id="B_CHA" d="M0 113.8h111.91V.013H0z" />
      </defs>
      <g transform="translate(19 18)" fill="none" fillRule="evenodd">
        <g transform="translate(0 .009)">
          <mask id="C_CHA" fill="#fff">
            <use xlinkHref="#A_CHA" />
          </mask>
          <path
            d="M109.23 11.13l-1.922.924 2.275-8.96.66-3.085-2.64 1.73c-.228.148-22.37 14.695-39.283 28.043l-.013-.03a4.38 4.38 0 0 0-.75-1.326l.363-.26c1.683-1.2 1.987-1.427 2.067-1.523 1.94-1.687 2.402-3.73 2.2-4.97l-.607-3.92-10.354 7.712c-2.726-.698-6.08-1.152-10.526-.003l-10.352-7.71-.6 3.918c-.195 1.24.27 3.285 2.1 4.865.187.205.498.436 2.22 1.663l.316.226a4.5 4.5 0 0 0-.752 1.331l-.008.02C27.054 16.698 4.58 1.89 4.345 1.738L1.7.005 2.364 3.1c.05.226.983 4.608 2.236 8.942l-4.6-2.206.923 2.87c.054.174 1.372 4.263 2.446 6.985 1.585 4.352 4.594 11.236 7.296 15.997 1.4 2.372 3.6 4.55 6.334 6.3 1.567.996 3.247 1.82 5.006 2.444.32.727.934 2.073 1.668 3.37H18.36v9.2L10.625 60.7l7.74 3.9.01 7.245 6.918 4.23.45-.054 6.562-.776 17.88 10.325 4.518 21.317 1.305 6.897 1.245-6.908c.01-.05.913-5.018 4.516-21.304l17.88-10.328 7.01.83 6.918-4.23.008-7.242 7.742-3.903-7.735-3.705v-9.2h-5.325c.742-1.3 1.357-2.647 1.676-3.37 2.17-.784 8.2-3.36 11.345-8.75 1.515-2.597 4.778-9.27 7.286-15.974.088-.228 1.434-3.72 2.46-7.014l.882-2.84-2.682 1.284z"
            fill="#fefefe"
            mask="url(#C_CHA)"
          />
        </g>
        <path
          d="M28.38 50.215h-7.628v8.283l-4.586 2.247 4.586 2.395V70.5l5.066 3.1 7.006-.812 19.58 11.3 3.57 16.426c.023-.04 3.605-16.426 3.605-16.426l19.547-11.3 7.006.812 5.06-3.1V63.14l4.596-2.343-4.596-2.3v-8.283h-7.623s1.18-1.142 2.677-3.716c.625-1.077 1.214-2.418 1.938-4.01 5.558-1.692 9.66-5.242 11.418-8.703 4.76-8.72 8.342-19.38 8.342-19.38l-4.534 2.21c2.013-6.142 3.22-11.355 3.22-11.355s-21.956 14.53-39.06 28.183l-1.48-.9.047-1.492s.166-1.45-2.386-2.317l-.454-.153c1.237-.93 3.162-2.35 4.565-3.314 2.238-1.536 1.974-3.225 1.974-3.225l-8.113 6.04c-6.27-2.034-11.493 0-11.493 0l-8.11-6.04s-.267 1.69 1.97 3.225c1.406.963 3.328 2.385 4.568 3.314l-.454.153c-2.555.867-2.384 2.317-2.384 2.317a110.74 110.74 0 0 0 .044 1.492l-1.484.9C27.278 19.795 5.324 5.264 5.324 5.264S6.528 10.477 8.54 16.62l-4.534-2.21s3.582 10.66 8.344 19.38c1.756 3.462 5.857 7.01 11.415 8.703 0 0 .94 2.154 1.75 3.7 1 1.912 2.864 4.025 2.864 4.025"
          fill="#1c1060"
        />
        <path
          d="M65.182 37.8l-.24.703 36.168-23.57s.018.327 1.35-3.542C86.563 21 72.48 31.887 65.182 37.8m-18.416.002C39.468 31.888 25.388 21 9.5 11.4c1.33 3.872 1.35 3.542 1.35 3.542l36.168 23.57c-.083-.228-.163-.462-.24-.7m-13.96 12.84c-.005-.003-3.777-2.7-5.906-7.634l1.507.45c4.92 1.303 14.328 2.6 14.328 2.6a121.75 121.75 0 0 0-10.549.701c-.454-.563-.975-1.282-1.175-1.816 0 0 .17 1.726.555 2.805a16.26 16.26 0 0 0 1.24 2.896m23.16-5.076c-1.315-.503-4.627-2.156-6.614-6.48 1.63 1.404 3.714 1.853 5.382.24-2.036-.877-2.288-4.5-2.682-5.462-.796-1.93-2.057-2.906-3.053-3.316l1.382-.446c.952.516 2.542 1.705 3.04 4.074 0 0 .208-2.704-1.13-4.6 2.596-.625 5.216-.54 7.353-.003-1.34 1.897-1.136 4.603-1.136 4.603.5-2.372 2.096-3.563 3.05-4.077l1.388.45c-1 .4-2.26 1.386-3.053 3.316-.392.952-.646 4.585-2.677 5.462.467 2.766-.1 5.345-1.25 6.24m24.403 2.176c.386-1.08.555-2.805.555-2.805-.2.535-.72 1.253-1.178 1.816-2.184-.24-6.018-.597-10.546-.698 0 0 9.405-1.3 14.325-2.603L85.034 43c-2.127 4.935-5.898 7.632-5.903 7.632a16.33 16.33 0 0 0 1.24-2.896M44.26 74.003l-9.58-5.532-2.018.197 13.304 7.683a13.6 13.6 0 0 1-1.704-2.348m23.425 0l9.58-5.532 2.015.197-13.3 7.683a13.6 13.6 0 0 0 1.704-2.348m-15.973 1.29c-4.23-.92-5.98-3.005-5.98-3.005.866 1.765 2.176 3.275 3.782 4.383 0 0 1.782-.516 2.2-1.378m-2.592-4.52l-.903-.906c-1.35.47-2.117.994-2.52 1.35.936.893 2.72 2.078 5.924 2.745-.4-1.1-1.385-2.086-2.5-3.2m6.776 9.985c-1.403.023-2.404.566-2.74.7l-1.146-1.928c1.206.148 2.267-.078 2.267-.078-.506-.166-1.808-.607-3.52-1.736l.446-.208c.454-.23.908-.524 1.266-.893.428-.44.72-1 .72-1.67 0-2.102-1.414-2.8-3.004-4.38l-1-.98c1.458-.392 3.44-.698 6.106-.745l.638 8.92h.093l.66-8.92c2.666.047 4.645.353 6.106.745l-1 .98c-1.6 1.57-3.004 2.278-3.004 4.38 0 .68.293 1.227.72 1.67.358.368.8.662 1.26.887l.454.2c-1.714 1.13-3.017 1.572-3.522 1.74a7.67 7.67 0 0 0 2.267.078l-1.15 1.928c-.332-.125-1.333-.667-2.736-.7h-.16zm6.533-4.086a11.52 11.52 0 0 0 3.782-4.38s-1.75 2.084-5.98 3.002c.415.86 2.2 1.378 2.2 1.378m-2.113-2.71c3.203-.667 4.988-1.853 5.924-2.745-.405-.358-1.172-.882-2.52-1.35l-.903.906c-1.118 1.103-2.1 2.1-2.5 3.2"
          fill="#008ca8"
        />
        <path
          d="M53.106 39.57s-1.55-1.025-1.8-3.205c0 0-2 3.368 1.8 3.205m5.847 0s1.55-1.025 1.8-3.205c0 0 2.013 3.368-1.8 3.205m-1.14 44.45c-.278-.288-.682-.623-1.92-.625-1.167-.003-1.574.296-1.914.573l1.995 7.888 1.84-7.837zm13.185-34.653v2.888h-.97v-2.888h-.804v-.825H71.8v.825zm-4.515 0v2.888H65.5v-2.888h-.804v-.825h2.58v.825z"
          fill="#fefefe"
        />
        <mask id="D_CHA" fill="#fff">
          <use xlinkHref="#B_CHA" />
        </mask>
        <g fill="#fefefe">
          <path
            d="M51.243 50.104h1.035v-.734h-1.035v.734zm1.598.836h.348v-1.998l-.405-.4h-2.456v3.713h.916V50.94h.687l.53 1.316h.908l-.527-1.316zm23.746-1.572v-.825h-2.723v3.713h2.723v-.836h-1.774v-.6h1.774v-.833h-1.774v-.6zm-20.114 2.054v-2.88h-.952v3.713h2.32v-.833zm4.087 0h1.053V49.37H60.56v2.053zm1.554-2.88H59.65v3.295l.415.418h2.46v-3.3l-.4-.413zM46.143 50.2H47.2v-.843h-1.056v.843zm1.995 2.045l-.005-3.298-.4-.415H45.2v3.713h.934V51.05h1.053v1.207h.942zm-5.892-3.703v1.67h-1.048v-1.67h-.934v3.713h.934V51.05h1.048v1.207h.93v-3.713zm55.7-26.36l3.164-7.25-36.168 23.572a16.74 16.74 0 0 1-.993 2.245l30.314-16.522L70.6 41.325l1.092-.197 12.505-1.2s8.45-.817 13.153-7.14c2.212-3.397 5.98-13.322 5.98-13.322l-5.385 2.727zm-72.43 39.564l2.915-1.256v6.62L31 66.787l-.003-14.53h-2.56a1170.15 1170.15 0 0 0-.003 5.234l-2.915 1.23.003-6.464h-2.578v7.523l-2.1 1.038 2.1 1.056v6.1l2.576-.433V61.75zm20-4.87h2.905l-.005 2.278-2.897.047-.003-2.325zm.003 4.826l1.9-.052 1.432 3.86 2.565-.06-1.42-3.85.98-.016-.003-5.942-1.136-1.12h-7.87l.973 1.16v10.084l2.57-.13v-3.93zm10.02-4.826h2.944v8.54l2.677.04v-9.77l-1.172-1.165h-8.043l.967 1.16v9.746l2.628-.02v-8.53zm15.228 6.494l-4.962-.22-.008-1.824 4.97.174v-2.564l-4.975-.112-.003-1.95h4.977v-2.354h-8.635l.957 1.152v9.832l7.678.348V63.37zm6.468-6.494h2.212v-2.356h-7.255v2.356h2.257v9.246l2.786.24V56.88z"
            mask="url(#D_CHA)"
          />
          <path
            d="M38.46 63.498l-2.944.197V56.88h2.947v6.62zm2.58-7.816l-1.162-1.16h-7.895l.934 1.124.003 9.596 1.02 1.214 7.1-.58.003-10.193zm47.694 6.138l2.4-1.092-7.685-3.262-.005-2.914h2.718v1.06h2.583v-3.355H79.9l.983 1.14v6.007l5.278 2.294v3.358l-2.716-.348V63.63l-2.563-.306v3.428l7.862 1.14v-6.07m-51.5-10.72v.32h-.83V49.37h.83v.306h.93v-1.13H35.5v3.295l.418.415h2.26v-1.152zm-23.242-28.92l-3.164-7.25 36.168 23.572A16.74 16.74 0 0 0 48 40.75L17.686 24.228 41.35 41.325l-1.092-.197-12.505-1.2s-8.45-.817-13.153-7.14c-2.212-3.397-5.98-13.322-5.98-13.322l5.385 2.727z"
            mask="url(#D_CHA)"
          />
        </g>
        <path
          d="M28.38 50.215h-7.628v8.283l-4.586 2.247 4.586 2.395V70.5l5.066 3.1 7.006-.812 19.58 11.3 3.57 16.426c.023-.04 3.605-16.426 3.605-16.426l19.547-11.3 7.006.812 5.06-3.1V63.14l4.596-2.343-4.596-2.3v-8.283h-7.623s1.18-1.142 2.677-3.716c.625-1.077 1.214-2.418 1.938-4.01 5.558-1.692 9.66-5.242 11.418-8.703 4.76-8.72 8.342-19.38 8.342-19.38l-4.534 2.21c2.013-6.142 3.22-11.355 3.22-11.355s-21.956 14.53-39.06 28.183l-1.48-.9.047-1.492s.166-1.45-2.386-2.317l-.454-.153c1.237-.93 3.162-2.35 4.565-3.314 2.238-1.536 1.974-3.225 1.974-3.225l-8.113 6.04c-6.27-2.034-11.493 0-11.493 0l-8.11-6.04s-.267 1.69 1.97 3.225c1.406.963 3.328 2.385 4.568 3.314l-.454.153c-2.555.867-2.384 2.317-2.384 2.317a110.74 110.74 0 0 0 .044 1.492l-1.484.9C27.278 19.795 5.324 5.264 5.324 5.264S6.528 10.477 8.54 16.62l-4.534-2.21s3.582 10.66 8.344 19.38c1.756 3.462 5.857 7.01 11.415 8.703 0 0 .94 2.154 1.75 3.7 1 1.912 2.864 4.025 2.864 4.025m78.978-30.967c-2.404 6.433-5.597 13.047-7.193 15.782-2.7 4.603-8.046 7.35-11.187 8.36 0 0-1.525 3.682-3.097 5.71h6.412v8.72l6.1 2.917-6.098 3.075-.008 7.315-5.91 3.612-7.003-.823-18.74 10.826-4.648 21.91s-.882-4.66-4.648-21.91L32.585 73.916l-7.003.823-5.91-3.612-.01-7.315-6.093-3.075 6.088-2.917V49.1h6.412c-1.543-1.93-3.097-5.71-3.097-5.71a23.27 23.27 0 0 1-5.271-2.499c-2.532-1.61-4.607-3.646-5.916-5.862C9.23 30.527 6.23 23.75 4.6 19.247c-1.084-2.745-2.433-6.94-2.433-6.94l4.56 2.193c-1.67-5.006-3.084-11.67-3.084-11.67V2.83s24 15.785 40.834 29.286l.267-.163-.016-.856a2.59 2.59 0 0 1 .145-.911c.195-.555.63-1.25 1.608-1.848l-3.66-2.662c-1.63-1.414-1.904-3.007-1.78-3.79l.278-1.796 9.133 6.804c4.967-1.422 8.476-.72 11.062 0l9.133-6.804.278 1.796c.125.784-.15 2.377-1.777 3.79-.19.202-2.428 1.754-3.66 2.662.973.597 1.41 1.292 1.606 1.848.14.4.153.742.143.91 0 .293-.003.576-.013.856l.267.163c17.236-13.8 40.834-29.286 40.834-29.286v.003s-1.175 5.486-3.084 11.67l4.56-2.193c-1.035 3.332-2.433 6.94-2.433 6.94"
          fill="#a0a0a4"
          mask="url(#D_CHA)"
        />
      </g>
    </svg>
  );
};

export default CHA;
