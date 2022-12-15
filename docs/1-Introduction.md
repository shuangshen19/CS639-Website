---
id: Introduction
sidebar_position: 1
---

# Introduction

In this project, the goal is to explore and research how we could use deep learning to enhance low light images. Low-light image enhancement has wild applications in our daily life and in different scientific research fields such as night surveillance, automated driving, fluorescence microscopy, etc. This technique can improve the usefulness of an image to satisfy human viewing. Also, it can make low-light images applicable for applications in autonomous driving, scientific data capture, and general visual enhancement. For example, self-driving car can see humans in the dark environment to prevent accidents from happening with this technology. Therefore, low-light image enhancement is very significant and is worth studying. With more application applied machine/deep learning methods for improvement, we’d like to research how to use deep learning to enhance low-light images.

Regardless of the technological advancements, there is still a long way to improve this task. Low-light images typically suffer from two problems which are low visibility and high noise. Low visibility shows that the image has small pixel values due to few amount of photon, and high noise would dominate and disrupt the image content, so the overall signal-to-noise ratio is low.

After doing some research on *[Awesome Low Light Image Enhancement](https://github.com/dawnlh/awesome-low-light-image-enhancement)*, a GitHub repository which provides a list of resources related to low light image enhancement, we adopt the KinD algorithm proposed by Zhang et al. [5] and we re-implement this method with Pytorch (original work is implemented with TensorFlow). We have achieved similar performance like original work, analyzed its strength and weakness, and pointed out some directions for future work. 

## Dataset
The dataset we used is LOLDataset [6] which contains a total of 485 low-light and high-light paired training images and 15 testing pairs. Here you can see an example of training paired images, the left one is the low-light image and the right one is the high-light image.

<img style={{float: 'left', width: '50%'}} src={require("./img/train_low_40.png").default} />
<img style={{float: 'right', width: '50%'}} src={require("./img/train_high_40.png").default} />
