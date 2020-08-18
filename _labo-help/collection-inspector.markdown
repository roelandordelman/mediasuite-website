---
title: 'Tool: Inspect'
---

This is a tool for the inspection of the metadata types in a collection, as well as for the evaluation of metadata quality of those fields. At this moment (Version 3), the Inspect tool offers the option to evaluate metadata completeness, which is calculated based on the number of records for which a given metadata field has been filled in. This completeness can be evaluated per field (all years), or along time. 

### Background

The "collection inspection" functionalities support the scholarly tasks of *data criticism* by facilitating the close inspection of the metadata fields that constitute each collection. 

The purpose of this tool is to provide an overview of how a collection/dataset is constituted and also to allow a closer inspection of their metadata (e.g., detect incomplete data, or observe value distributions along date fields). 

It is important to have clear that the collection inspector does not give search results. Future developments include the integration of other metrics (besides completeness) for the evaluation of metadata quality, and the possibility to visualize metadata completeness together with search results. 

### How to use

<iframe width="560" height="315" src="https://www.youtube.com/embed/NSAHVlqhesw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


1. When you open the Inspect tool you will find a button to add a Collection. This opens the "Collection selector," where you can see the available collections (see [FAQ section: What kind of data is available via the Media Suite?](http://mediasuite.clariah.nl/documentation/faq/what-data))
2. When you select a collection, you can inspect its metadata fields by clicking on "Select field to analyse"
3. In this graphic you can see the completeness of ONE metadata field over time. The timeline chart uses a date field selected by the user. Be aware that these date fields are also metadata, and that they can also be more or less complete. You can evaluate the completeness of a date field as well, using the first option in Step 1.
4. There is a [Jupyter notebook](http://mediasuite.clariah.nl/documentation/howtos/jupyter-notebooks) prepared for complementing the functions available in this tool. For example:
   - If you want to compare the completeness of two or more metadata fields
   - If you want to check the metadata completeness of a section of the collection (e.g., for resources of a certain media type)

   > If you are interested in the completeness of the ASR (automatic speech recognition transcripts) of the Netherlands Institute for Sound and Vision's audio-visual collection, visit [this page](<https://sites.google.com/beeldengeluid.nl/stats-beeldengeluid-nl/speech-recognition?pli=1>).

### Metadata dictionaries

Because the Media Suite has been built following the principles of metadata transparency (which means that we only a minimum intervention in normalization and cleaning is done to the metadata provided by the institutions), users may face difficulties in understanding what a specific metada field means, or how to use it.

In Version 3, we provide an example of a good practice in documenting the metadata schemas for the users. This is done via "metadata dictionaries," which provide definitions of the metadata field (regardless of their labels) when they are used in the Media Suite. 

We have integrated this dictionary for one collection (The Netherlands Institute for Sound and Vision). The institution was responsible for creating a file with the technical label of the field plus a user-friendly label and a user-oriented definition of the field. These data was integrated into the Media Suite (you can observe it, for instance, when you click in the drop-down menu in the [Inspector tool](http://mediasuite.clariah.nl/documentation/howtos/collection-inspector)).

The CLARIAH WP5 team encourages other providing institutions to create and publish these metadata dictionaries as part of their metadata schemas and documentation.



*(Last update: November 5, 2018)*. *If you have any questions, please [contact us]( https://mediasuite.clariah.nl/contact ).*