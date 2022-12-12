import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Motivation',
    imgSrc: require('@site/static/img/kinD_paper_result.png').default,
    description: (
      <>
        Low-light image enhancement has wild applications in our daily life and in different scientific research fields such as night surveillance, automated driving, etc. This technique can improve the usefulness of an image to satisfy human viewing and with more application applied machine/deep learning methods for improvement, we’d like to research how to use deep learning to enhance low-light images.
      </>
    ),
  },
  {
    title: 'Method',
    imgSrc: require('@site/static/img/decom_layer.jpg').default,
    description: (
      <>
        We reconstruct three neural network(decomposition layer, illumination adjustment layer, and restoration reflectance layer) based on the KinD algorithm using PyTorch. Why we use PyTorch to re-implement? PyTorch is the most popular framework to design deep learning algorithms in recent years. The source code provided by the authors was implemented in an older version of TensorFlow which is hard to make modifications.
      </>
    ),
  },
  {
    title: 'Results Preview',
    imgSrc: require('@site/static/img/final_14_ratio5.jpg').default,
    description: (
      <>
        Our goal is to achieve the result presented in Kindling the Darkness: A Practical Low-light Image Enhancer from Zhang et al. For example, given the input(left image), we could generate the corresponding result shown as the right image.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} role="img" />
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
