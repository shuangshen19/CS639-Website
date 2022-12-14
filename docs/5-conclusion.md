---
sidebar_position: 5
---

# Conclusion & Future Work
In summary, we enhanced low-light image under different light/exposure conditions using our re-implemented KinD algorithm by Pytorch and add extra functionality for adjusting ratio and evaluation using PSNR and SSIM. The evaluation clearly removed degradations and showed that a higher ratio might get better low-light enhancement and with enhancement implementation, we could get higher PSNR and SSIM which represented better performance.


## Strength
* Enhance low-light image under different light/exposure conditions
* Clearly remove degradations
* Adjustable ratio
* Trainable without ground truth of illumination and reflectance layer
## Weakness
* Different model camera will need collect new dataset and re-train the model
* Results contained artifacts, like color inconsistency and halos


Our project successfully achieved the result presented in KinD and re-produced the older TensorFlow version to PyTorch which is more accessible to make modification and the most popular framework for designing deep learning algorithms in recent years, but our training data couldn’t apply for every device. For future work, it might be a good topic to research how to make adjustments to let the method could apply to all types of devices and the improvement of artifacts.