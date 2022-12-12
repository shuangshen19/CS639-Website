import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Motivation',
    srcImg: 'img/kinD_paper_result.png',
    description: (
      <>
        Low-light image enhancement has wild applications in our daily life and in different scientific research fields such as night surveillance, automated driving, etc. This technique can improve the usefulness of an image to satisfy human viewing and with more application applied machine/deep learning methods for improvement, we’d like to research how to use deep learning to enhance low-light images.
      </>
    ),
  },
  {
    title: 'Method',
    srcImg: 'img/decom_layer.png',
    description: (
      <>
        We reconstruct three neural network(decomposition layer, illumination adjustment layer, and restoration reflectance layer) based on the KinD algorithm using PyTorch. Why we use PyTorch to re-implement? PyTorch is the most popular framework to design deep learning algorithms in recent years. The source code provided by the authors was implemented in an older version of TensorFlow which is hard to make modifications.
      </>
    ),
  },
  {
    title: 'Results Preview',
    srcImg: 'img/preview_result.png',
    description: (
      <>
        Our goal is to achieve the result presented in Kindling the Darkness: A Practical Low-light Image Enhancer from Zhang et al. For example, given the input(left image), we could generate the corresponding result shown as the right image.
      </>
    ),
  },
];

function Feature({title, srcImg, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={useBaseUrl(srcImg)} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
