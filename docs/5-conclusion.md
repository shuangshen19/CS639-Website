---
sidebar_position: 5
---

# Conclusion & Future Work
In summary, we enhanced low-light image using our re-implemented KinD algorithm in Pytorch. This method is based on retinex theory and contains three neural network, layer decomposition net, illumination adjustment net, and reflectance restoration net. We also test the method by objective and subjective evaluations and we list its strength and weakness in the bottom.

## Strength
* Enhance low-light image with user-controllable ratio
* Clearly remove degradations
* Trainable without ground truth of illumination map and reflectance map

## Weakness
* Results contain artifacts, like color inconsistency and halos
* Cannot generalize: different camera modules need to collect new dataset and re-train the model

For future work, it might be a good topic to figure out how to make the model able to apply to all types of devices. Also, tweaking the architecutre and loss functions are also worth-trying to alleviate artifacts.