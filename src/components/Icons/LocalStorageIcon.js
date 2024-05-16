import PropTypes from 'prop-types';
import { BasicSvg } from './BasicSvg';

/**
 * Specific styled svg icon.
 * @param {string} props.width Width value.
 * @param {string} props.height Height value.
 * @param {string} props.fill Fill color - color name or value.
 * @param {string} props.stroke Stroke color - color name or value.
 * @param {string} props.strokeWidth Stroke width.
 * @param {string} props.viewBox Viewbox values.
 *
 * @returns {React.Component} Icon component.
 */
export const LocalStorageIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}) => {
  return (
    <BasicSvg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      viewBox="0 0 32 32"
      alt="local storage icon"
    >
      <>
        <path d="M23.182 8.332c3.845 1.127 6.689 3.602 7.359 6.906 1.125 5.55-4.311 11.336-12.143 12.924-4.282 0.868-8.394 0.302-11.426-1.297-1.828-0.869-3.393-2.334-4.373-4.288-0.053-0.106-0.104-0.213-0.153-0.32l-1.218 0.69c2.327 6.771 10.909 10.002 19.222 7.22 8.346-2.794 13.259-10.593 10.973-17.42-1.238-3.698-4.335-6.353-8.24-7.564v3.15z"></path>
        <path d="M0.079 18.785c0.019 1.348 0.267 2.69 0.769 3.982 0.717 1.846 1.877 3.403 3.35 4.63l0.998-0.577c-1.292-1.411-2.479-3.022-3.513-4.809-0.614-1.061-1.148-2.139-1.603-3.225z"></path>
        <path d="M29.802 4.606c-4.107-4.508-12.404-5.069-19.763-0.998-8.25 4.563-12.196 13.22-8.814 19.334l0.002 0.005 1.218-0.69c-0.157-0.343-0.291-0.692-0.404-1.043-2.167-5.305 2.204-12.282 9.876-15.681 6.718-2.977 13.768-2.236 17.078 1.465l0.807-2.391z"></path>
        <path d="M6.45 10.041l-0.003 0.001 0.003 0.007 0.017 0.048 0.063 0.188c0.057 0.161 0.161 0.44 0.312 0.837l1.038 2.76c0.156 0.416 0.13 0.669-0.078 0.761-0.123 0.054-0.268 0.070-0.434 0.049-0.041-0.003-0.097-0.084-0.17-0.244l-1.877-4.009c0.042-0.089 0.161-0.177 0.356-0.262 0.298-0.131 0.555-0.176 0.77-0.134l0-0.008c0 0 0.001 0.002 0.003 0.007zM10.636 10.504c0.233 0.531 0.352 1.025 0.356 1.481 0.003 0.561-0.175 1.024-0.533 1.388-0.118 0.12-0.249 0.211-0.394 0.275-0.404 0.177-0.806 0.113-1.207-0.193-0.329-0.248-0.59-0.592-0.782-1.031-0.076-0.173-0.139-0.356-0.19-0.549-0.103-0.389-0.152-0.854-0.149-1.395 0.003-0.666 0.112-1.093 0.325-1.281 0.113-0.1 0.297-0.205 0.552-0.317 0.406-0.178 0.822-0.045 1.247 0.399 0.298 0.314 0.556 0.722 0.776 1.222zM9.791 10.761c-0.112-0.255-0.236-0.467-0.374-0.637-0.209-0.256-0.403-0.345-0.581-0.267-0.206 0.091-0.254 0.415-0.142 0.973 0.077 0.39 0.187 0.749 0.331 1.076 0.279 0.636 0.52 0.91 0.722 0.822 0.268-0.117 0.376-0.422 0.326-0.913-0.036-0.356-0.13-0.707-0.282-1.054zM14.242 10.932c0.028 0.064 0.022 0.115-0.019 0.154-0.085 0.194-0.258 0.435-0.519 0.723-0.272 0.298-0.495 0.484-0.669 0.56-0.371 0.163-0.689 0.126-0.956-0.111-0.178-0.16-0.361-0.457-0.551-0.889-0.265-0.604-0.411-1.174-0.437-1.712-0.035-0.652 0.111-1.209 0.436-1.672 0.252-0.357 0.543-0.608 0.875-0.753 0.090-0.040 0.152-0.021 0.186 0.056l0.363 0.826c0.027 0.061-0.040 0.156-0.201 0.285-0.114 0.087-0.226 0.174-0.337 0.262-0.369 0.405-0.319 1.143 0.15 2.211 0.13 0.105 0.251 0.133 0.363 0.084 0.121-0.053 0.273-0.181 0.456-0.384 0.182-0.206 0.297-0.319 0.345-0.34 0.055-0.024 0.107-0.022 0.156 0.006 0.225 0.43 0.345 0.661 0.36 0.694zM17.652 10.225c0.032 0.072 0.004 0.128-0.084 0.166l-0.517 0.227c-0.083 0.037-0.164-0.001-0.242-0.114-0.025-0.033-0.072-0.123-0.141-0.268-0.077 0.034-0.183 0.095-0.32 0.184-0.137 0.086-0.245 0.147-0.321 0.18-0.305 0.134-0.581 0.173-0.828 0.116-0.279-0.063-0.484-0.243-0.614-0.54-0.167-0.38-0.153-0.807 0.042-1.283 0.182-0.444 0.454-0.785 0.814-1.025-0.015-0.106-0.044-0.207-0.086-0.304-0.058-0.132-0.141-0.253-0.251-0.365-0.303 0.133-0.493 0.282-0.57 0.446-0.068 0.143-0.082 0.385-0.041 0.729-0.111 0.146-0.224 0.244-0.338 0.294-0.195 0.086-0.327 0.051-0.396-0.105-0.177-0.404-0.188-0.839-0.031-1.306 0.158-0.47 0.436-0.792 0.836-0.967 0.382-0.168 0.741-0.145 1.078 0.069 0.29 0.184 0.522 0.475 0.697 0.872l1.313 2.993zM15.758 8.559c-0.472 0.207-0.565 0.637-0.279 1.288 0.303-0.133 0.456-0.317 0.461-0.552 0.001-0.092-0.059-0.338-0.182-0.737zM17.386 5.242l-0.003 0.001 0.003 0.007 0.017 0.048 0.063 0.188c0.057 0.161 0.162 0.44 0.312 0.837l1.038 2.76c0.156 0.416 0.13 0.669-0.078 0.761-0.123 0.054-0.268 0.070-0.434 0.049-0.041-0.003-0.097-0.084-0.17-0.244l-1.877-4.009c0.042-0.089 0.161-0.177 0.356-0.262 0.299-0.131 0.555-0.176 0.77-0.134l0-0.008c0 0 0.001 0.002 0.003 0.007zM8.945 20.763c0.091 0.208-0.083 0.827-0.524 1.856-0.091 0.050-0.175 0.093-0.254 0.127-0.388 0.171-0.62 0.17-0.695-0.001-0.065-0.147-0.061-0.353 0.012-0.618 0.077-0.225 0.155-0.45 0.234-0.676 0.079-0.249 0.094-0.431 0.043-0.545-0.052-0.119-0.274-0.261-0.666-0.426-0.262-0.108-0.524-0.216-0.787-0.326-0.069-0.038-0.142-0.144-0.219-0.32-0.123-0.281-0.083-0.683 0.122-1.208 0.207-0.525 0.452-0.85 0.735-0.974 0.083-0.037 0.203 0.003 0.358 0.118 0.142 0.103 0.233 0.2 0.274 0.292 0.053 0.121 0.033 0.298-0.061 0.533-0.093 0.206-0.186 0.41-0.28 0.614-0.094 0.227-0.119 0.391-0.075 0.492 0.037 0.083 0.184 0.16 0.442 0.23 0.365 0.099 0.613 0.18 0.743 0.243 0.289 0.14 0.489 0.336 0.6 0.589zM10.727 16.895c0.056 0.127 0.036 0.26-0.060 0.399-0.056 0.082-0.164 0.194-0.324 0.335-0.14 0.122-0.219 0.206-0.235 0.252l1.106 3.154c0.015 0.040-0.025 0.119-0.12 0.237-0.087 0.112-0.156 0.178-0.206 0.201-0.241 0.106-0.394 0.080-0.458-0.078l-1.137-2.76c-0.072 0.039-0.178 0.124-0.32 0.254-0.134 0.119-0.243 0.197-0.329 0.235-0.088 0.039-0.233 0.024-0.436-0.044-0.201-0.071-0.32-0.149-0.357-0.232-0.038-0.086 0.338-0.402 1.126-0.95l-0.352-0.803c0.023-0.018 0.054-0.055 0.092-0.111l0.454-0.199c0.182-0.080 0.311-0.102 0.387-0.068l0.243 0.553c0.048-0.045 0.161-0.132 0.337-0.262 0.175-0.132 0.276-0.203 0.302-0.215 0.136-0.060 0.232-0.026 0.288 0.101zM14.637 16.856c0.233 0.531 0.352 1.025 0.356 1.481 0.003 0.561-0.175 1.024-0.533 1.388-0.118 0.12-0.249 0.211-0.394 0.275-0.404 0.177-0.806 0.113-1.207-0.193-0.329-0.248-0.59-0.592-0.782-1.031-0.076-0.173-0.139-0.356-0.19-0.549-0.103-0.389-0.152-0.854-0.149-1.395 0.003-0.666 0.112-1.093 0.325-1.281 0.113-0.1 0.297-0.205 0.552-0.317 0.406-0.178 0.822-0.045 1.247 0.399 0.298 0.314 0.556 0.722 0.776 1.222zM13.792 17.113c-0.112-0.255-0.236-0.467-0.374-0.637-0.209-0.256-0.403-0.345-0.581-0.267-0.206 0.091-0.254 0.415-0.142 0.973 0.077 0.39 0.187 0.749 0.331 1.076 0.279 0.636 0.52 0.91 0.722 0.822 0.268-0.117 0.376-0.422 0.326-0.913-0.036-0.356-0.13-0.707-0.282-1.054zM17.442 14.455c0.055 0.238 0.079 0.481 0.073 0.73-0.011 0.345-0.093 0.551-0.247 0.619-0.13 0.057-0.29-0.011-0.482-0.204-0.208-0.205-0.361-0.3-0.459-0.285-0.326 0.408-0.295 1.055 0.094 1.941l0.548 1.248c0.005 0.16-0.149 0.309-0.46 0.445-0.037 0.016-0.127 0.019-0.268 0.008s-0.218-0.031-0.23-0.060l-1.846-4.207c-0.033-0.075-0.005-0.131 0.083-0.17l0.922-0.405c0.121-0.053 0.227 0.025 0.318 0.233l0.316 0.721c-0.064-0.145-0.037-0.362 0.079-0.651 0.119-0.29 0.252-0.468 0.399-0.532 0.406-0.178 0.793 0.012 1.161 0.57zM21.991 16.428c0.032 0.072 0.004 0.128-0.084 0.166l-0.517 0.227c-0.083 0.037-0.164-0.001-0.242-0.114-0.025-0.033-0.072-0.123-0.141-0.268-0.077 0.034-0.183 0.095-0.32 0.184-0.137 0.087-0.245 0.147-0.321 0.18-0.305 0.134-0.581 0.173-0.828 0.116-0.279-0.063-0.484-0.243-0.614-0.54-0.167-0.38-0.153-0.807 0.042-1.283 0.182-0.444 0.454-0.785 0.814-1.025-0.015-0.106-0.044-0.207-0.086-0.304-0.058-0.132-0.141-0.253-0.251-0.365-0.303 0.133-0.493 0.282-0.57 0.446-0.068 0.143-0.082 0.385-0.041 0.729-0.111 0.146-0.224 0.244-0.338 0.294-0.195 0.086-0.327 0.051-0.396-0.105-0.177-0.404-0.188-0.839-0.031-1.306 0.158-0.47 0.436-0.792 0.836-0.967 0.382-0.168 0.741-0.145 1.078 0.069 0.29 0.184 0.522 0.475 0.697 0.872l1.313 2.993zM20.097 14.762c-0.472 0.207-0.565 0.637-0.279 1.288 0.303-0.133 0.456-0.317 0.461-0.552 0.001-0.092-0.059-0.338-0.182-0.737zM24.116 14.479c0.071 0.144 0.056 0.381-0.045 0.711-0.1 0.327-0.226 0.523-0.377 0.59-0.086 0.038-0.198 0.023-0.337-0.044-0.138-0.070-0.226-0.148-0.264-0.234-0.026-0.059-0.020-0.156 0.018-0.29 0.030-0.099 0.060-0.199 0.092-0.3 0.029-0.12 0.007-0.285-0.064-0.494-0.060-0.154-0.121-0.308-0.183-0.462-0.378 0.166-0.787 0.063-1.227-0.309-0.361-0.305-0.635-0.669-0.821-1.092-0.080-0.182-0.119-0.36-0.116-0.534 0.004-0.224 0.086-0.371 0.246-0.442 0.237-0.104 0.559-0.048 0.965 0.169l-0.051-0.233c0.050-0.106 0.135-0.185 0.253-0.237 0.123-0.054 0.235-0.061 0.336-0.022l1.575 3.223zM22.546 13.067c-0.12-0.274-0.206-0.449-0.257-0.523-0.108-0.162-0.255-0.286-0.442-0.371-0.085-0.039-0.153-0.047-0.203-0.025-0.048 0.021-0.038 0.111 0.032 0.269 0.102 0.233 0.229 0.406 0.381 0.52 0.183 0.142 0.373 0.281 0.572 0.417 0.015-0.030-0.012-0.126-0.082-0.286zM27.232 12.899c0.151 0.345-0.042 0.877-0.579 1.597-0.277 0.121-0.526 0.207-0.747 0.257-0.352 0.081-0.7-0.039-1.046-0.362-0.276-0.253-0.499-0.573-0.668-0.959-0.277-0.632-0.404-1.27-0.381-1.914 0.029-0.806 0.324-1.332 0.886-1.578 0.303-0.133 0.577-0.143 0.823-0.031 0.245 0.11 0.434 0.319 0.569 0.626 0.143 0.325 0.152 0.726 0.030 1.204-0.127 0.498-0.343 0.826-0.648 0.983-0.113 0.058-0.188 0.128-0.225 0.212s-0.020 0.204 0.048 0.36c0.174 0.397 0.352 0.556 0.531 0.477 0.053-0.023 0.156-0.216 0.311-0.58 0.156-0.367 0.306-0.582 0.451-0.645 0.274-0.12 0.49-0.003 0.646 0.353zM25.366 10.946c-0.066-0.151-0.149-0.205-0.248-0.162-0.127 0.056-0.186 0.283-0.176 0.682 0.008 0.352 0.049 0.612 0.122 0.779 0.012 0.029 0.033 0.037 0.062 0.024 0.114-0.050 0.198-0.252 0.253-0.606 0.053-0.338 0.049-0.576-0.012-0.717zM12.7 23.893c0.015 0.035-0.025 0.158-0.121 0.367-0.103 0.226-0.155 0.366-0.156 0.422-0.475-0.093-0.732-0.183-0.77-0.27-0.015-0.035 0.006-0.162 0.064-0.382 0.059-0.222 0.105-0.34 0.135-0.354 0.055-0.024 0.201-0.003 0.44 0.062 0.229 0.062 0.365 0.113 0.409 0.154zM12.98 24.96l0.993 2.513c0.152 0.383 0.085 0.638-0.203 0.764-0.246 0.108-0.4 0.090-0.463-0.052l-1.318-3.002 0.53-0.233c0.151-0.066 0.305-0.063 0.46 0.010zM16.628 24.184l0.88 2.068c0.078 0.183-0.010 0.33-0.262 0.441-0.13 0.057-0.267 0.048-0.412-0.027-0.133-0.070-0.233-0.171-0.302-0.303l-0.948-1.794c-0.095-0.181-0.162-0.295-0.202-0.343-0.101-0.134-0.208-0.194-0.323-0.18-0.157 0.202-0.198 0.498-0.122 0.886 0.039 0.19 0.135 0.489 0.288 0.898l0.465 1.221c0.025 0.070-0.021 0.151-0.141 0.242-0.083 0.068-0.175 0.124-0.276 0.168-0.033 0.014-0.115 0.016-0.245 0.005-0.129-0.014-0.2-0.034-0.211-0.060l-1.745-3.977c-0.031-0.070-0.007-0.123 0.072-0.157l0.839-0.368c0.112-0.049 0.211 0.025 0.298 0.223l0.299 0.681c-0.061-0.138-0.041-0.341 0.059-0.607 0.101-0.27 0.221-0.435 0.36-0.495 0.373-0.164 0.728 0.019 1.066 0.549 0.101 0.152 0.2 0.305 0.299 0.458 0.12 0.183 0.207 0.341 0.263 0.474zM19.629 24.182c0.092 0.209-0.083 0.827-0.524 1.856-0.091 0.050-0.175 0.093-0.254 0.127-0.388 0.17-0.62 0.17-0.695-0.001-0.065-0.147-0.061-0.353 0.012-0.618 0.077-0.225 0.155-0.45 0.233-0.676 0.079-0.249 0.094-0.431 0.043-0.545-0.052-0.119-0.274-0.261-0.666-0.426-0.262-0.108-0.524-0.216-0.787-0.326-0.069-0.038-0.142-0.145-0.219-0.32-0.123-0.281-0.083-0.683 0.122-1.208 0.207-0.525 0.452-0.85 0.735-0.974 0.083-0.037 0.203 0.003 0.358 0.118 0.142 0.103 0.233 0.2 0.273 0.292 0.053 0.121 0.033 0.298-0.061 0.533-0.093 0.206-0.186 0.41-0.28 0.614-0.094 0.227-0.119 0.391-0.075 0.492 0.037 0.083 0.184 0.16 0.442 0.23 0.365 0.099 0.613 0.18 0.743 0.243 0.289 0.14 0.489 0.336 0.6 0.589zM19.917 20.726c0.015 0.035-0.025 0.158-0.121 0.367-0.103 0.226-0.155 0.366-0.156 0.422-0.475-0.093-0.732-0.183-0.77-0.27-0.015-0.035 0.006-0.162 0.064-0.382 0.059-0.222 0.105-0.34 0.135-0.354 0.055-0.024 0.201-0.003 0.44 0.062 0.229 0.062 0.365 0.113 0.409 0.154zM20.197 21.793l0.993 2.513c0.152 0.383 0.085 0.638-0.203 0.764-0.246 0.108-0.4 0.090-0.463-0.052l-1.318-3.002 0.53-0.233c0.151-0.066 0.305-0.063 0.46 0.010zM22.825 19.611l1.478 4.11c-0.049 0.108-0.098 0.173-0.147 0.194-0.206 0.091-0.374 0.121-0.502 0.091l-0.324-0.694c-0.1 0.327-0.162 0.516-0.186 0.569-0.098 0.229-0.224 0.377-0.378 0.445-0.083 0.037-0.22 0.022-0.408-0.045-0.187-0.067-0.322-0.157-0.405-0.27-0.034-0.048-0.106-0.196-0.214-0.444-0.031-0.070-0.106-0.269-0.226-0.596-0.148-0.409-0.098-0.877 0.149-1.404 0.134-0.284 0.27-0.456 0.406-0.516l0.211-0.092-0.602-1.373c-0.006-0.128 0.132-0.254 0.415-0.378 0.222-0.097 0.406-0.101 0.553-0.011 0.121 0.276 0.182 0.415 0.182 0.415zM22.948 22.533l-0.426-0.971-0.077-0.033c-0.017 0.021-0.030 0.048-0.038 0.083-0.059 0.235-0.079 0.506-0.060 0.812 0.018 0.316 0.073 0.579 0.165 0.787l0.12 0.273c0.008 0.018 0.024 0.026 0.050 0.025 0.079-0.082 0.153-0.242 0.221-0.482 0.070-0.24 0.085-0.405 0.046-0.495zM27.251 20.998c0.151 0.345-0.042 0.877-0.579 1.597-0.277 0.121-0.526 0.207-0.747 0.257-0.352 0.081-0.7-0.039-1.046-0.362-0.276-0.253-0.499-0.573-0.668-0.959-0.277-0.632-0.404-1.27-0.381-1.914 0.029-0.806 0.324-1.332 0.886-1.578 0.303-0.133 0.577-0.143 0.823-0.031 0.245 0.11 0.434 0.319 0.569 0.626 0.143 0.325 0.152 0.726 0.030 1.204-0.127 0.498-0.343 0.826-0.648 0.983-0.113 0.058-0.188 0.128-0.225 0.212s-0.020 0.204 0.048 0.36c0.174 0.397 0.351 0.556 0.531 0.477 0.053-0.023 0.156-0.216 0.311-0.58 0.156-0.367 0.306-0.582 0.451-0.645 0.274-0.12 0.49-0.003 0.646 0.353zM25.385 19.045c-0.066-0.151-0.149-0.206-0.248-0.162-0.127 0.056-0.186 0.283-0.176 0.682 0.008 0.352 0.049 0.612 0.122 0.779 0.012 0.029 0.033 0.037 0.062 0.024 0.114-0.050 0.198-0.252 0.253-0.605 0.053-0.338 0.049-0.577-0.012-0.717z"></path>
      </>
    </BasicSvg>
  );
};

LocalStorageIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
};
