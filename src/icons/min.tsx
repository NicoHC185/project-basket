import React from 'react';
import PropTypes from 'prop-types';

const MIN = ({ size = 100 }: { size?: number }) => {
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
      <title id="title">Minnesota Timberwolves</title>
      <path
        d="M75 123c-20.414 0-38.636-12.965-45.344-32.26-8.676-24.998 4.603-52.395 29.6-61.072C64.355 27.897 69.65 27 75 27c20.42 0 38.64 12.964 45.343 32.26l.228.653-.006.007c8.223 24.817-5.037 51.813-29.815 60.413C85.647 122.103 80.35 123 75 123"
        stroke="#fff"
        fill="#c4cdd3"
      />
      <path
        d="M114.792 86.6a41.46 41.46 0 0 1-4.426 10.025c-2.196-7.948-7.263-16.158-13.782-23.658.588-1 1.26-2.008 2.03-3.083 1.78-1.93 2.617-.14 2.617-.14 1.428-3.873.52-5.823-.172-6.657-.26-.383-.57-.52-.57-.52-.6-2.724-3.068-4.154-3.068-4.154s.85-3.827.44-7.79c13.35 5.576 17.296 15.663 18.443 20.956a41.33 41.33 0 0 1-1.51 15.021m-17.8 23.518c-.298-4.833-1.102-8.74-1.102-8.74.434.176 1.522.958 1.522.958-.207-9.04-4.008-12.225-3.904-17.156.086-4.13.65-7 1.74-9.58 6.597 7.77 11.525 16.19 13.106 24.017-3.12 4.227-6.994 7.767-11.362 10.5M34.405 66.712c2.807-3.805 10.04-12.312 18.02-11.46l-1.478 2.743c-2.092 3.235-4.055 7.116-5.514 11.707-1.52 4.782-2.31 9.76-2.395 14.9-1.7 1.4-3.454 2.7-5.25 3.836 0 0 3.196 2.85 6.376 3.973l-3.58 5.676c-5.998-8.958-8.48-20.183-6.18-31.376m9.893-19.55c.916-.063 2.218-.11 3.775-.068 3.787.34 5.16 1.384 7.358 2.826L53.8 52.795c-7.04-1.377-13.375 3.273-17.588 7.644 1.882-5.023 4.652-9.496 8.087-13.277m18.714-11.82c-.2 1.27-.226 2.874.392 4.45.39.994.993 1.856 1.786 2.6l-4.807 2.098c-3.192-.13-8.778-.3-12.7-.058l-.637-.012a41.68 41.68 0 0 1 15.967-9.069m2.89-.765c4.858-1.098 9.96-1.334 15.09-.58a41.49 41.49 0 0 1 5.593 1.223c.07.02.137.044.207.064-2.616.404-5.982 1.166-9.77 2.548-3 1.004-6.112 2.196-8.976 3.363-1.044-.61-1.786-1.4-2.168-2.355-.635-1.6-.256-3.36.024-4.264M76.396 55.1c-1.41-.955-2.827-1.865-4.24-2.716-1.06-1.193-3.2-3.43-4.32-4.597.552-.874 1.287-1.916 2.18-2.902 4.373 1.508 8.002 1.8 10.284 1.945l1.183.09.33.028c.602.05 1.182.116 1.765.18-2.192 2.296-4.497 4.76-7.18 7.97M62.858 63.9c-3.673 3.687-9.738 11.636-17.026 18.288.635-9.806 3.947-18.067 8.502-24.475.48-.472 1.05-.94 1.682-1.396 2.842 1.432 5.07 4.166 6.842 7.583m2.015-1.78c-1.692-3.104-3.77-5.704-6.36-7.404 1.197-.69 2.44-1.323 3.574-1.864 1.625.22 6.364.9 8.35 1.624a89.95 89.95 0 0 1 4.25 2.719l-1.103 1.384s-4.2.052-8.71 3.54m27.603-24.63l.002-.05c9.438 4.375 16.626 12.03 20.573 21.16-4.32-5.37-10.17-8.74-15.753-10.854-.675-2.215-1.95-4.172-4.253-5.136-.45-1.028-1.078-1.747-2.312-2.2-1.358.302-3.572 1.878-4.944 4.372a57.22 57.22 0 0 0-3.756-.452l-.3-.026c-.363-.035-.785-.063-1.256-.096-2.003-.137-4.793-.338-8.172-1.327a9.75 9.75 0 0 1 .56-.355c10.783-5.228 19.495-5.03 19.6-5.026m22.06 15.83c-5.798-10.56-15.36-18.23-26.928-21.6-1.993-.58-4.04-1.027-6.078-1.327l-.005-.001c-22.14-3.26-43.563 10.506-49.827 32.024-3.368 11.567-2.03 23.752 3.767 34.313s15.36 18.23 26.927 21.6c1.995.58 4.04 1.028 6.083 1.328 4.526.667 9.018.61 13.36-.065.054.026.106.057.16.082l.052-.115c16.81-2.703 31.29-14.876 36.256-31.926a44.8 44.8 0 0 0-3.768-34.313"
        fill="#002a5b"
      />
      <path
        d="M68.045 41.196l8.976-3.363c3.788-1.382 7.154-2.144 9.77-2.547-.07-.02-.137-.046-.206-.065-1.863-.542-3.728-.948-5.594-1.222a41.15 41.15 0 0 0-15.091.579c-.28.903-.66 2.663-.025 4.263.383.966 1.125 1.747 2.17 2.355M45.433 69.702c1.46-4.592 3.423-8.472 5.514-11.707.317-.626.847-1.606 1.478-2.743-7.98-.852-15.212 7.655-18.02 11.46-2.3 11.193.182 22.418 6.18 31.376l3.58-5.676C40.985 91.3 37.8 88.44 37.8 88.44c1.795-1.137 3.55-2.437 5.248-3.837.086-5.142.876-10.12 2.395-14.9m1.602-25.29l.635.012c3.925-.233 9.5-.072 12.702.057l4.808-2.097c-.793-.735-1.395-1.596-1.786-2.6-.618-1.577-.593-3.18-.392-4.45a41.63 41.63 0 0 0-15.967 9.07m49.947 65.702c4.368-2.733 8.243-6.273 11.36-10.5-1.58-7.828-6.508-16.248-13.104-24.017-1.1 2.58-1.656 5.452-1.74 9.58-.104 4.932 3.697 8.116 3.903 17.157 0 0-1.088-.783-1.523-.958 0 0 .805 3.904 1.104 8.738M62.087 52.84l-3.574 1.866c2.6 1.698 4.668 4.3 6.36 7.404 4.5-3.5 8.712-3.542 8.712-3.542l1.102-1.385-4.25-2.718c-1.986-.713-6.725-1.403-8.35-1.625m21.5-5.712l-1.766-.18-1.513-.128c-2.283-.157-5.9-.437-10.284-1.945a21.27 21.27 0 0 0-2.178 2.901l4.32 4.597c1.414.85 2.83 1.76 4.24 2.717 2.685-3.212 5-5.676 7.182-7.972M36.2 60.44c4.213-4.37 10.55-9.02 17.588-7.645l1.632-2.875c-2.2-1.442-3.57-2.486-7.358-2.826a39.68 39.68 0 0 0-3.775.07c-3.435 3.78-6.205 8.253-8.087 13.276m78.582 26.16a41.33 41.33 0 0 0 1.51-15.021c-1.147-5.293-5.092-15.38-18.443-20.956.412 3.962-.44 7.8-.44 7.8s2.47 1.43 3.068 4.154c0 0 .312.138.57.52.692.834 1.6 2.784.172 6.657 0 0-.838-1.8-2.617.14-.77 1.075-1.442 2.083-2.03 3.083 6.52 7.5 11.586 15.7 13.782 23.658A41.46 41.46 0 0 0 114.79 86.6M90.733 40.388c1.232.462 1.862 1.18 2.313 2.2 2.3.965 3.577 2.92 4.25 5.137 5.583 2.114 11.433 5.484 15.753 10.853-3.946-9.127-11.135-16.784-20.573-21.158l-.002.05c-.114-.004-8.827-.203-19.6 5.025a8.66 8.66 0 0 0-.56.356c3.378.988 6.167 1.2 8.17 1.327l1.256.096.3.026a55.45 55.45 0 0 1 3.756.452c1.372-2.494 3.586-4.07 4.944-4.372M62.858 63.9c-1.772-3.417-4-6.15-6.843-7.583-.63.457-1.2.925-1.682 1.396-4.555 6.408-7.866 14.67-8.503 24.476 7.3-6.653 13.353-14.602 17.028-18.3"
        fill="#004f83"
      />
      <path
        d="M66.924 43.92l-2.866 4.157s2.166 1.505 3.947 3.54l-6.54-1.213-5.425 2.95 2.543-4.22s-1.7-1.46-3.684-2.734l6.277.404 5.747-2.885zm5.36 18.387s-.607 1.68-.687 3.24c0 0-3.804.56-5.635 1.807 0 0 3.798-3.785 6.322-5.046"
        fill="#7ac142"
      />
      <path
        d="M97.912 62.14c.423-.103.74-.12.975-.103a2.66 2.66 0 0 0-.438-.772c-.336-.407-.825-.712-.825-.712.315.486.324 1.157.288 1.587m-3.432 1.73l1.346-.846c-.074-.176-.2-.43-.36-.737-.326-.584-1.176-1.093-1.176-1.093.35 1.04.276 2.093.2 2.676"
        fill="#fefefe"
      />
      <path
        d="M53.675 89.547c-3.234 1.322-10.887-.48-10.887-.48 7.73-.445 15.293-5.984 15.293-5.984-.006.013-.013.027-.017.04-2.267 3.477-5.39 5.488-5.39 5.488.344.44.69.733 1.002.937"
        fill="#c4cdd3"
      />
      <path
        d="M92.224 43.42s-1.9-1.5-4.058.82c2.31-4.212 3.646-1.797 4.058-.82"
        fill="#7ac142"
      />
      <path
        d="M99.73 63.847l-.24-.158c-1.206-.642-3.368 1.232-4.78 2.01s-3.465 2.432-4.47.152 1.304-5.846 2.104-8.1c1.764-4.96 1.828-7.882 1.456-9.46 1.63 1.84 2.143 5.37 2.143 5.37s.606-6.628-2.635-8.374c.075.235-.01 1.06-.076 1.712-1.52.262-4.85-.116-5.93-.682-4.093 4.4-8.555 10.5-11.914 16.11-1.457 2.967-2.883 6.447-3.24 9.276 0 0-.464-1.28-.574-2.985-1.858.717-8.176 3.822-9.527 13.342 0 0 4.015-4.143 8.454-5.757 0 0-2.81 7.362 2.555 20.412 0 0 2.172-8.002 6.716-10.02 2.75 13.664 10.816 13.888 13.168 23.185 0 0 2.465-4.816-.502-13.002 0 0 1.023.286 1.89 1.308 0 0-.135-2.395-2.373-7.56-1.458-2.765-1.915-6.497-1.915-6.497-1.3 1.187-1.646 5.196-1.646 5.196-4.004-10.863 7.36-21.63 9.436-23.216 1.012-.777 1.636-.8 2.014-.604.4-.81.355-1.326-.115-1.664"
        fill="#c4cdd3"
      />
    </svg>
  );
};

export default MIN;
