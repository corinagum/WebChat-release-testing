window.WebChat.customizations = {
  ...window.WebChat.customizations,
  patchProps: props => ({
    ...props,
    styleOptions: {
      ...props.styleOptions,
      internalLiveRegionFadeAfter: 600000
    }
  })
};

const style = document.createElement('style');

style.innerHTML = `
.webchat__basic-transcript__scrollable .webchat__screen-reader-activity {
  background-color: #E00;
  color: White !important;
  font-family: Calibri, "Helvetica Neue", Arial, sans-serif;
  height: initial !important;
  margin: 10px;
  opacity: initial !important;
  overflow: initial !important;
  padding: 10px;
  position: initial !important;
  top: initial !important;
  white-space: initial !important;
  width: initial !important;
}

.webchat__basic-transcript__scrollable .webchat__screen-reader-activity p {
  margin: 0;
}
`;

document.head.appendChild(style);
