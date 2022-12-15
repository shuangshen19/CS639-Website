---
sidebar_position: 2
---

# Related Work

Retinex is the theory of human color vision proposed by Edwin Land to account for color sensations in real scenes. Decomposing images in the Retinex manner consequently decouples the space of mapping a degraded low-light image to a desired one into two smaller components. To better learned, based on illumination map which is main functionality to flexibly adjusting light exposure and reflectance map, the Retinex-based layer decomposition is suitable and necessary for the target task in KinD Algorithm.

Many applications aim to enhance brightness, contrast, and reduce noise from the images in an on-board real-time manner. Lore et al. [2] propose a deep autoencoder-based approach LLNET to identify signal features from low-light images and adaptively brighten images without over-amplifying/saturating the lighter parts in images with a high dynamic range. LLNET shows that a variant of the stacked-sparse denoising autoencoder (SSDA), which are a sparsity-inducing variant of deep autoencoders that ensures learning the invariant features embedded in the proper dimensional space of the dataset in an unsupervised manner, can learn from underlying signal characteristics/synthetically darkened and noise-added training examples to adaptively enhance images taken from natural low-light environment.

Since it is hard to collect training data with low-light and normal-light images, Jiang et al. [3] use GAN (Generative Adversarial Network) to do unsupervised learning. They use information extracted from input to regularize training. In this model, there are one generator and two discriminators. For the generator, it adopt U-Net [4] with attention mechanism to get multi-level features with rich texture information so that generator can generates real enough images to fake discriminators. As for discriminators, one is local and the other is global. Global discriminator is responsible for discriminating real or fake on image-level, while local discriminator is for local patch level. With this structure, the network can prevent over- or under-enhancement in local region.
