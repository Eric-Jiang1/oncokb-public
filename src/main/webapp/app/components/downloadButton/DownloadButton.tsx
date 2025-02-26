import React from 'react';
import styles from './DownloadButton.module.scss';

interface IDownloadButton {
  href: string;
  className?: string;
  download?: string | boolean; // We can override the default filename by providing a string
}

// Naturally the Button component has href property which will convert the component to a A tag
// But in the scenario downloading PDF file, we need to specify the download property
export const DownloadButton: React.FunctionComponent<IDownloadButton> = props => {
  const { href, download, className } = props;

  return (
    <a
      href={href}
      download={download || true}
      className={`btn btn-primary ${className} ${styles.aTag}`}
    >
      <i className={'fa fa-cloud-download mr-1'} />
      {props.children}
    </a>
  );
};
