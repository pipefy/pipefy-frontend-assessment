type PiledCoinsIconProps = {
  color?: string;
  label?: string;
};

function PiledCoinsIcon({ color, label }: PiledCoinsIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={label}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.994 13.39v-3.238c0-.562-.332-1.03-.783-1.396-.455-.368-1.087-.681-1.83-.936C23.89 7.309 21.857 7 19.63 7s-4.258.309-5.75.82c-.743.255-1.375.568-1.83.936-.45.366-.783.834-.783 1.396v4.666c0 .553.324 1.017.765 1.38.385.316.9.592 1.504.826v1.809c-.604.233-1.119.509-1.504.826-.44.362-.765.826-.765 1.38v3.237c-.603.234-1.118.51-1.503.826-.441.363-.765.827-.765 1.38v4.666c0 .445.21.835.52 1.155.256.266.596.503.992.711v3.19c0 .56.333 1.029.783 1.394.455.369 1.087.682 1.83.937 1.492.511 3.524.82 5.75.82 1.518 0 2.942-.189 4.166-.5A9.757 9.757 0 0029.156 41C34.593 41 39 36.56 39 31.083c0-5.214-3.995-9.489-9.07-9.886a1.55 1.55 0 00.332-.936v-4.666c0-.554-.323-1.017-.764-1.38-.386-.317-.9-.592-1.504-.826zm-5.738 24.766a9.93 9.93 0 01-2.42-3.875 23.66 23.66 0 01-1.717.007c-.249.008-.501.012-.756.012-2.346 0-4.487-.343-6.003-.91v2.813c0 .19.112.438.465.724.348.282.879.556 1.572.794 1.382.474 3.32.774 5.478.774 1.215 0 2.363-.126 3.38-.34zm-2.944-7.073c0-.524.04-1.038.119-1.54-.661.06-1.354.09-2.068.09-1.174 0-2.292-.085-3.304-.24-1.41-.217-2.634-.57-3.517-1.03a4.614 4.614 0 01-.694-.434v3.22c0 .151.07.337.278.554.211.218.54.442.989.654 1.366.645 3.64 1.083 6.248 1.083a21.502 21.502 0 002.204-.108 10.015 10.015 0 01-.255-2.249zm.32-3.086h.167a9.929 9.929 0 012.423-3.952 22.62 22.62 0 01-2.59.145c-2.227 0-4.26-.308-5.75-.82-.71-.242-1.317-.538-1.766-.885v3.22c0 .19.112.438.465.724.348.282.879.556 1.572.793 1.383.474 3.32.775 5.478.775zm5.135-5.793a9.733 9.733 0 013.914-1.026c.105-.067.2-.136.283-.204.342-.282.45-.525.45-.713v-3.22c-.449.347-1.056.643-1.765.886-1.491.511-3.524.82-5.75.82-2.775 0-5.267-.48-6.777-1.248a13.401 13.401 0 01-.738-.191v2.953c0 .19.112.438.465.724.349.282.88.556 1.573.794 1.382.474 3.319.774 5.477.774 1.032 0 1.99-.16 2.868-.349zM12.116 10.152c0-.19.112-.438.465-.724.348-.283.879-.556 1.572-.794 1.383-.474 3.32-.774 5.478-.774 2.16 0 4.096.3 5.478.774.693.238 1.224.511 1.573.794.353.286.464.533.464.724 0 .19-.111.437-.464.723-.349.283-.88.556-1.573.794-1.382.474-3.319.775-5.478.775s-4.095-.301-5.478-.775c-.693-.238-1.224-.511-1.572-.794-.353-.286-.465-.533-.465-.723zm13.265 2.331c.709-.243 1.316-.539 1.765-.885v3.22c0 .19-.111.437-.464.723-.349.283-.88.556-1.573.794-1.382.474-3.319.774-5.478.774-1.585 0-3.054-.162-4.272-.437-.46-.104-.882-.224-1.26-.356-.677-.236-1.193-.507-1.532-.786-.342-.281-.451-.525-.451-.712v-3.22c.45.346 1.057.642 1.766.885 1.49.511 3.524.82 5.75.82 2.225 0 4.258-.309 5.749-.82zm-3.482 5.404c-.096 0-.193 0-.289-.002 1.44-.124 2.736-.381 3.77-.736.744-.255 1.376-.568 1.831-.936.45-.366.783-.834.783-1.396v-.5c.407.178.732.37.97.566.342.281.45.524.45.712 0 .19-.111.438-.464.724-.349.283-.88.556-1.572.794-1.383.474-3.32.774-5.479.774zm-9.332 2.44c.238-.197.563-.388.97-.567v.501c0 .561.332 1.03.783 1.395.454.369 1.087.682 1.83.937 1.035.355 2.33.612 3.77.736a23.13 23.13 0 01-.289.002c-2.159 0-4.095-.3-5.478-.775-.693-.237-1.224-.51-1.572-.794-.353-.285-.465-.533-.465-.723 0-.188.109-.431.451-.713zm1.315 7.71c1.034.354 2.33.611 3.77.736l-.29.001a21.12 21.12 0 01-3.176-.231c-1.359-.209-2.485-.543-3.258-.944-.387-.201-.667-.409-.845-.609-.175-.197-.235-.366-.235-.508 0-.188.109-.43.45-.712.239-.196.564-.387.97-.566v.5c0 .562.333 1.03.783 1.396.455.368 1.087.682 1.83.936zM28.95 24.52a.472.472 0 00-.264.424v.766l-.24.023c-.973.093-1.753.414-2.281.884-.521.464-.82 1.09-.814 1.858v.005c-.003.673.233 1.178.656 1.572.438.407 1.102.717 1.986.925l.007.001.686.173v3.643l-.364-.068c-.686-.128-1.322-.468-1.654-1.078-.183-.334-.389-.476-.544-.476h-.696a.316.316 0 00-.232.097.19.19 0 00-.05.178c.154.699.522 1.223 1.064 1.598.551.381 1.303.622 2.232.701l.244.021v.983a.47.47 0 10.938 0v-.993l.152-.011c1.094-.082 1.85-.39 2.33-.836.473-.439.728-1.057.73-1.87-.002-.757-.285-1.319-.763-1.748-.493-.441-1.214-.76-2.107-.965a1.38 1.38 0 01-.198-.06l-.144-.057v-3.52l.285.064c.578.133.885.444 1.129.794.105.151.213.279.322.366.107.084.192.112.264.112h.705a.307.307 0 00.225-.092.15.15 0 00.038-.15c-.297-1.091-1.227-1.826-2.83-1.998l-.138-.015v-.827a.47.47 0 00-.502-.47.285.285 0 00-.172.047zm.674 10.258v-3.446l.317.098c.442.137.81.314 1.067.586.272.29.372.638.375 1.015v.008c-.003.388-.104.77-.367 1.084-.263.314-.647.51-1.121.602l-.271.053zm-.938-4.79l-.424-.144c-.346-.116-.699-.264-.965-.497a1.282 1.282 0 01-.456-1.025c0-.379.128-.735.397-1.02.264-.28.636-.461 1.078-.55l.37-.075v3.31z"
      ></path>
    </svg>
  );
}

export default PiledCoinsIcon;
