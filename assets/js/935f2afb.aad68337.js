"use strict";(self.webpackChunkcs_639_website=self.webpackChunkcs_639_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/CS639-Website/docs/Introduction","docId":"Introduction"},{"type":"link","label":"Related Work","href":"/CS639-Website/docs/Related-Work","docId":"Related-Work"},{"type":"link","label":"Method","href":"/CS639-Website/docs/Method","docId":"Method"},{"type":"link","label":"Evaluation","href":"/CS639-Website/docs/Evaluation","docId":"Evaluation"},{"type":"link","label":"Conclusion & Future Work","href":"/CS639-Website/docs/conclusion","docId":"conclusion"},{"type":"link","label":"Project Proposal","href":"/CS639-Website/docs/project-proposal","docId":"project-proposal"},{"type":"link","label":"Midterm Report","href":"/CS639-Website/docs/midterm-report","docId":"midterm-report"},{"type":"link","label":"Source Code & Presentation","href":"/CS639-Website/docs/src","docId":"src"},{"type":"link","label":"Reference","href":"/CS639-Website/docs/reference","docId":"reference"}]},"docs":{"conclusion":{"id":"conclusion","title":"Conclusion & Future Work","description":"In summary, we enhanced low-light image using our re-implemented KinD algorithm in Pytorch. This method is based on retinex theory and contains three neural network, layer decomposition net, illumination adjustment net, and reflectance restoration net. We also test the method by objective and subjective evaluations and we list its strength and weakness in the bottom.","sidebar":"tutorialSidebar"},"Evaluation":{"id":"Evaluation","title":"Evaluation","description":"","sidebar":"tutorialSidebar"},"Introduction":{"id":"Introduction","title":"Introduction","description":"In this project, the goal is to explore and research how we could use deep learning to enhance low light images. Low-light image enhancement has wild applications in our daily life and in different scientific research fields such as night surveillance, automated driving, fluorescence microscopy, etc. This technique can improve the usefulness of an image to satisfy human viewing. Also, it can make low-light images applicable for applications in autonomous driving, scientific data capture, and general visual enhancement. For example, self-driving car can see humans in the dark environment to prevent accidents from happening with this technology. Therefore, low-light image enhancement is very significant and is worth studying. With more application applied machine/deep learning methods for improvement, we\u2019d like to research how to use deep learning to enhance low-light images.","sidebar":"tutorialSidebar"},"Method":{"id":"Method","title":"Method","description":"In this project, we adopt KinD algorithm proposed by Zhang et al. [5] to build a low-light image emhancer. It is a CNN-based approach and the original implementation is on TensorFlow. We re-implement the algorithm by using Pytorch and do the experiment on LOLdataset [6]. In this section, we will introduce the network, training scheme, and inference procedure.","sidebar":"tutorialSidebar"},"midterm-report":{"id":"midterm-report","title":"Midterm Report","description":"Open in a new window","sidebar":"tutorialSidebar"},"project-proposal":{"id":"project-proposal","title":"Project Proposal","description":"Open in a new window","sidebar":"tutorialSidebar"},"reference":{"id":"reference","title":"Reference","description":"* [1] \u201cAwesome Low Light Image Enhancement\u201d. In https://github.com/dawnlh/awesome-low-light-image-enhancement#readme.","sidebar":"tutorialSidebar"},"Related-Work":{"id":"Related-Work","title":"Related Work","description":"Before the prevalent of deep learning, people tried to do low-light image enhancement by histogram equalization and gamma correciton. Since these method didn\'t really modify the brightness on pure illumination factor. It turns out that some unpleasant artifacts are introduced. Besides, people adopted retinex theory to extract illumination term and processed it to modify the brightness. However, since it was not easy to design an algorithm to perform retinex theory, the results also suffered from issues like over-enhancement.","sidebar":"tutorialSidebar"},"src":{"id":"src","title":"Source Code & Presentation","description":"","sidebar":"tutorialSidebar"}}}')}}]);