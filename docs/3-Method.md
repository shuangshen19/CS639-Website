---
sidebar_position: 3
---

# Method & Discussions
## The Connection between Retinex Net and Low Light Enhancement
The kinD algorithm is inspired by Retinex theory, the proposed network decomposes images into two components reflectance and illumination which decouples the original space into two smaller ones. In Retinex theory, an image I can be viewed as a composition of two components reflectance R and illumination L. The formulation is `I = R ◦ L`, where ` ◦ ` designates the element-wise product.

Unsupervised training
## 解釋三個subnet的功能、架構、loss function的意義
## 說明怎麼train (include data augmentation)、以及怎麼inference

We plan to implement an algorithm called KinD proposed by Zhang et al. [5]. KinD is a deep learning-based solution built on top of the Retinex theory. By decomposing images into illumination layer and reflectance layer, adjusting light on illumination layer won't affect details and possible degradations on reflectance layer and degradation removal can be done on reflectance layer. There are three processes in this solution: layer decomposition on input image, illumination adjustment on illumination layer, and degradation removal on reflectance layer. Each of them correspond to a neural network, so there are three sub-networks in this solution. Three sub-networks use either l1 norm or l2 norm as their loss functions.

Since there is no ground truth for layer decomposition, layer decomposition layer is trained by paired images. To be more specific, for a specific scene, there are short-exposure image and long-exposure image. With paired image, loss function is designed by comparing illumination layers and reflectance layers of paired images. For the illumination adjustment net and reflectance restoration net, there is also no ground truth, so similar concept is used to design their loss functions. For reflectance restoration net, it tries to make processed reflectance layer of low-exposure image approach that of high-exposure image. Similarly, illumination adjustment net make adjusted illumination layer of low-exposure image close to that of high-exposure image. During testing, only low-exposure image is needed.

Zhang et al. [5] used LOL dataset [6] to train the model. We plan to use LOL dataset as baseline and then maybe use MIT-Adobe FiveK [7] to see whether there is performance difference.
