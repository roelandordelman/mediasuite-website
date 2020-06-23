---
layout: post
title: "CLARIAH Expert Meeting on Video Annotation Interoperability."
introduction: "CLARIAH had the pleasure to organize a two-day face-to-face expert meeting and workshop that aimed to improve annotation interoperability within the CLARIAH infrastructure as well as with external annotation tools. The meeting took place on July 12-13 in Amsterdam."
date: 2018-07-11
---

**CLARIAH Expert Meeting on Video Annotation Interoperability**

By: Liliana Melgar and Marijn Koolen

CLARIAH had the pleasure to organize a two-day face-to-face expert meeting and workshop that aimed to improve annotation interoperability within the CLARIAH infrastructure as well as with external annotation tools. The meeting was organized by Marijn Koolen (KNAW Humanities Cluster) and Liliana Melgar (University of Amsterdam) and took place on July 12-13 in Amsterdam.

While analyzing data, scholars often need to annotate various types of resources (texts, images, or audio-visual). Annotating, in the broadest sense of the term, consists of activities such as segmenting, transcribing, adding notes, tags, classifying those tags, grouping resources in bookmarks, linking, or adding other user-metadata to those sources and their fragments. Since these activities are essential to interpretation, annotation has been recognized as one of the “scholarly primitives” (Unsworth, 2000), and as an essential part of knowledge production from the perspective of scholarly work as a research ecology (Walkowsky, 2016).

As an infrastructure project, CLARIAH aims to support humanities scholars in their research at different levels. In relation to scholarly annotation, during the first phase of CLARIAH (Core, 2015-2018), we have done some research about scholarly annotating behavior, and on the more technical aspects needed to provide structural semantics to annotations (see reference list at the end of this post). We also organized an [annotation symposium in 2017](https://clariah.github.io/mediasuite-blog/blog/2017/05/11/CLARIAH-annotation-symposium), in which scholars and developers of annotation tools and standards gathered for one day in Amsterdam to align their work and look for future collaborations. 

In CLARIAH Plus (2019-2023), one of the aims is to increase the support for the creation and exchange of annotation data between applications. Thus, as a follow-up to the previous activities, and as a way to initiate the next phase of CLARIAH, we decided to focus on interoperability of annotations, of audio-visual sources to begin with. Our aim is to try to facilitate data interoperability between the tools that are commonly used by scholars in their work, and to try to come up with an exchange format for scholarly annotations of audio-visual data based on the [W3C annotation model](https://www.w3.org/TR/annotation-model/). 

For this reason, expert software developers of audiovisual annotation tools gathered in Amsterdam during those two days in July 2018, to discuss the interoperability between their tools. One important distinction we made in this work was between data interoperability based on data models and facilitating interoperability at the semantic level (which we did not tackle in this meeting). As Walkowsky (2016) clarifies: “knowledge about structure and properties of annotations is one thing, knowledge about concepts which are used in annotations is another.”

![Participants Annotation Expert Meeting](https://github.com/CLARIAH/mediasuite-blog/blob/master/img/posts/2018-07-11_annotation-expert-meeting1.jpg?raw=true "2018-07-11_annotation-expert-meeting1.jpg")

The participants of the expert meeting were the programmers of applications that are being developed in important projects in the Humanities where audio-visual media is at the center. The experts who participated in this meeting were:

- Marijn Koolen (KNAW Humanities cluster), developer of one of the CLARIAH annotation tools
- Jaap Blom (The Netherlands Institute for Sound and Vision, CLARIAH), developer of one of the CLARIAH annotation tools
- Han Slootjes (Max Planck Institute for Psycholinguistics), developer of [ELAN](https://tla.mpi.nl/tools/tla-tools/elan/)
- John Bell (Dartmouth College), developer of [Waldorf.js & Statler](http://www.johnpbell.com/the-semantic-annotation-tool/) for The Media Ecology project (led by Mark Williams)
- Gaudenz Halter (University of Zurich), developer of [VIAN](https://filmcolors.org/2018/03/08/vian/), an adaptation of ELAN for the Film Colors project, led by Prof. Barbara Flueckiger
- Joscha Jaeger (Filmic Web), developer of [FrameTrail](https://frametrail.org/)
- Niels-Oliver Walkowski (Berlin-Brandenburgische Akademie der Wissenschaften), former leader of the DARIAH annotation working group
- Aristotelis Hadjakos (Center for Music and Film Informatics), developer involved in the creation of a format for exchanging movie annotations
- Heizo Schulze (Hochschule Ostwestfalen-Lippe), scholar involved in the creation of a format for exchanging movie annotations
- Fred van Blommestein (University of Groningen), the developer of an exchange format (REFI) between QDAs (qualitative data analysis software packages) and the leader of the initiative Jeanine Evers (Erasmus University Rotterdam)
- Nanne van Noord (University of Amsterdam), computer scientists in the SEMIA project, together with main researcher Christian Olesen (University of Amsterdam),
- Hugo Huurdeman (Timeless Future), co-founder of XIMPEL.net, an interactive video framework, and
- Liliana Melgar (University of Amsterdam), information scientist at the CLARIAH project, whose focus is on the user requirements for scholarly annotations

The two-day meeting included presentations of the tools´ data models. Following the methodology used in previous interoperability efforts (e.g., by Schmidt et al., 2016), we had a plenary discussion in which the developers identified the main challenges for data interoperability. These included:

- Conceptual aspects, such as a different understanding of what counts as annotation.
- Import/export formats: many tools already support different output formats such as CSV, XML and JSON, but based on their own schemas and data models. Interoperability would require exporting to a schema and data model that can be imported by other tools.
- Desktop vs. Browser-based tools and offline vs. online AV materials: tools like ELAN and VIAN are desktop tools that can access AV materials stored on a local hard drive, which allows fine-grained time-coding and segmenting, whereas online browser-based tools such as Waldorf.js and FrameTrail access AV materials via web protocols which streams the data in chunks that do not allow the same fine-grained access.  
- Tier-based vs. standoff annotation: some tools consider each annotation separately (e.g. Waldorf.js and the CLARIAH Mediasuite annotation tool), whereas others group annotations in tiers of non-overlapping segments (e.g. ELAN). These tiers represent a form of semantics that needs to be expressed in an interoperable way such that non-tier-based tools can still interpret the individual annotations, and ELAN can automatically generate tiers for annotations from non-tier-based tools. 
- Manual vs. automatic annotation: some tools allow automatic analysis and generation of annotations based on e.g. shot detection, automatic speech transcription, object identification, face recognition, etc. When combining automatic and manual annotations, their provenance needs to be clear. Also, automatic analyses can generate vast numbers of annotations which may be difficult to load and represent in tools developed for manual annotation. Finally, automatic analyses can be easily redone with different parameter settings or version of the algorithms, which creates different versions of annotations. Keeping track of these when exporting and mixing with manual annotations creates versioning challenges. 

These topics were grouped into four themes, and participants worked in groups on each of them:

1. Selectors and targets for different media types, such as selections of arbitrary and dynamic shape, tracing objects across a temporal segment and how to represent these in W3C Web Annotations. 
2. User projects (so-called “hermeneutic units” by scholars) vs. annotation collections, and how tiers relate to these.
3. Provenance and context: Where, by whom, and how annotations were made.
4. Annotation content and motivation: what the content of an annotation looks like or can contain, such as a code, a plain text string, a URI to an external term from a vocabulary, etc. 

In the second day, participants summarized the main conclusions of the previous day, and came up with concrete test cases to start exploring options for interoperability. Based on the W3C annotation model, the participants worked on possible cross-walks, i.e. alignments of the key elements that their tools and data models use, so that annotation data can be exchanged. The idea of this second group exercise was to compare, per tool, how each of them will deal with the following cases when exporting/importing:

- ​      A minimal example consisting of a single segment and label,
- ​      A slightly more complex example containing a label from an existing classification system,
- ​      A more complex example with annotations grouped in a tier.

This exercise brought some major hurdles to the surface, but also generated potential solutions and future plans for improving annotation data interoperability between the involved tools. The participants, besides agreeing on the importance of seeking interoperability to support scholars in their work, also agreed on that this is needed for preserving annotation data for archival purposes, since it is common that scholarly annotations are lost when tools are no longer supported.

The meeting concluded by listing the most important challenges and tasks for next encounter, which will most likely take place in Spring 2019. As preparation for the follow-up meeting, the developers in this group of experts will be collaboratively working on developing the test cases further, and in conducting these interoperability tests with their data.    More information can be found in the project [GitHub repository](https://github.com/CLARIAH/video-annotation-interoperability).

REFERENCES

Boot, P., Dekker, R. H., Koolen, M., & Melgar Estrada, L. (2017). Facilitating Fine-Grained Open Annotations of Scholarly Sources. Presented at the Digital Humanities, Montreal, Canada: DH2017.

Melgar Estrada, L., Hielscher, E., Koolen, M., Olesen, C., Noordegraaf, J., & Blom, J. (2017). Film analysis as annotation: Exploring current tools and their affordances. *The Moving Image: The Journal of the Association of Moving Image Archivists*, *in print*.

Melgar Estrada, L., & Koolen, M. (2017). Audiovisual media annotation using Qualitative Data Analysis Software: a comparative analysis. *The Qualitative Report*, *in print*.

Melgar Estrada, L., Koolen, M., Huurdeman, H., & Blom, J. (2017). A process model of time-based media annotation in a scholarly context. In *CHIIR 2017: ACM SIGIR Conference on Human Information Interaction and Retrieval*. Oslo.