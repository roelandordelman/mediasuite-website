---
title: 'Tool: Search'
---

In this help menu you will learn How To:

- [Use the Search tool (Screencast)](#screencast)
- [Know which data is used by the Search tool](#data)
- [Use search expressions (Boolean operators)](#search-boolean)
- [Search layers (predetermined aggregations)](#search-layers)
- [Search per field(s) (field cluster selector)](#field-cluster)
- [Filtering per date](#date-filter)
- [Understand time line charts](#timeline-charts)
- [Filter using facets](#facets)
- [Understand how search results are ranked](#result-list)
- [Order your search results](#result-list)
- [Save your query](#saved-queries)
- [Bookmark search results](#bookmarking)

---

### <a name="screencast"></a>Use the Search tool

<iframe width="560" height="315" src="https://www.youtube.com/embed/cA7c53e-MAQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### <a name="data"></a>Know which data used by the Search tool

This tool uses all the data and enrichments available via the Media Suite. See [Data page](http://mediasuite.clariah.nl/data) for more information.

### <a name="search-boolean"></a>Use search expressions (Boolean operators)

At this moment (version 4) the search API detects when a user does a boolean/wildcard query by looking for the keywords: 

**OR**

- Default operator. Connect two or more similar concepts (synonyms). ANY of your search terms can be present in the resulting records. Broaden your results.

**AND**

- ALL search terms must be present in the resulting records. Narrows your results
- Example: Koningin AND Beatrix
- Searches for the word ‘Koningin’ AND the word ‘Beatrix’ - but they do not have to be next to each other

**NOT**

- Ignore concepts (words) that may be implied by your search terms

**\***

- Wildcard which matches any character sequence (including the empty one).
- Example 1: boeren* --> *boerenleven, boerenmarkt*
- Example 2: boeren *  --> *boeren zijn bang*
- Note that a space between the last character and the asterisk wildcard influences the results

**?**

- Wildcard which matches any single character
- Example 1: vluchteling? —>  ‘vluchtelinge
- Searches for a word that starts with ‘vluchteling’ and has one extra character

**" "**

- Exact expression

- Example 1: "Broodje Aap"
- Searches for the phrase *Broodje Aap*

**Nesting and search order**

- Nesting queries is supported

- Use parentheses to separate the queries. The logical order in which words are connected influences the results
- Example1. (koe AND varkens) OR boeren 
- Example2. Koningin AND Beatrix NOT “Koningin Beatrix”
- Example2 searches for items with the word ‘Koningin’ AND the word ‘Beatrix’ - but NOT the phrase ‘Koningin Beatrix’.  So we get e.g. items that talk about Prinses Beatrix and Koningin Juliana, but not Koningin Beatrix

**Capitalization**

- Boolean queries are not case-sensitive
- Example: bordeaux, Bourdeaux 
- Searching for any of these two terms will give the same results

**Query corrections/suggestions**

- This is not supported
- Example: koningi
- Searching for this word gives no matches (matching is precise and does not accept typos or missing letters)

Note: Future work includes supporting proximity parameters.

### <a name="search-layers"></a> Search layers

<img src="https://github.com/CLARIAH/mediasuite-info/blob/master/docs/_images/search-layers.png?raw=true" />

To facilitate more precise queries, users can use "search layers," which are aggregations of metadata fields. At this moment (version 4) we support three layers for all collections:

- **All**: searches in all the metadata and automatic enrichments at the time
- **Archive's metadata**: searches only in the mostly manually generated metadata (archival descriptions and subject/content metadata). These are the common aggregations for all collections:
  - Title field cluster: when there are different title fields, these have been aggregated and users can search in all of them at once
  - Description field cluster: searches in all fields (per each collection) which contain descriptions (e.g., summaries, abstracts)
  - Other clusters: depending on the collection there may be other clusters available (e.g., "Subtitles" for the Sound and Vision audio-visual collection).
- **Enrichments**: searches in the existing layer(s) of mostly automatic content enrichments (e.g., OCR, or ASR- automatic speech transcripts)

*Tip*: To see which fields have been aggregated in each cluster, hover over the field cluster.

### <a name="field-cluster"></a> Search per field (field cluster selector)

<img src="https://github.com/CLARIAH/mediasuite-info/blob/master/docs/_images/search-field-clusters.png?raw=true" />

Users can determine in which field or group of fields they want to search for their query expression. For example, a user may want to search for a specific character's name (e.g., Mies Bouwman). In that case:

* Use the "Custom field cluster" button that appears in the drop-down menu of the Search layers (image above)
* Search for the field of interest (e.g., "cast"). If there are many fields which include cast information, they can be aggregated in a "field cluster." Assign a name to the cluster to create custom aggregations
* Now you can search in the cluster as if it was one of the Search layers described above.

*Tip*: To see the list of metadata fields per collection, as well as their definitions, use the Collection Inspector tool.


### <a name="date-filter"></a> Filtering per date

You can limit your query to a specific period of time. It is important to keep in mind that collections often include several fields of the type "Date". To see the metadata fields that are of the type "Date", you can use the "Inspect" tool and consult the metadata dictionaries.

- In the date filter, you first have to select which date field you would like to use for filtering, and then enter the date range. For example, for The Sound and Vision audiovisual collection, we recommend to select the field "Date:sorting (preferred)" (which is the closest equivalent to the "broadcasting date"). You can check how complete this metadata field has been over time by using the Inspector tool.

### <a name="timeline-charts"></a>Understand time line charts

The timeline visualisation shows a histogram or a line chart with the amount of documents (relative or absolute) which match your query. 

- To generate a timeline visualization of your results based on time, first select a date field (see item before.

- Mouse-overs show the year and the number of results per year.

- Please note that the statistical unit (what is being counted) are documents (programs, articles, interviews), and not the number of occurrences of the term within a document; that is: “1” means one document (i.e., one television programme, one newspaper article, one oral history interview). 

- The relative frequencies (percentages) are calculated by dividing the number of documents with hits by the total number of documents within one year (or week, day, depending of the ‘bucket’).

- This normalization helps to compare result numbers of different collections.

- Please also note that each record possibly can have multiple occurrences of the selected date field (this happens clearly in the audio-visual collections of The Netherlands Institute for Sound and Vision, e.g., a rebroadcast), making it possible that there are more dates found that the number of search results. The number of cases can be seen in the "Outside range" summary in the chart panel:

  <img src="https://github.com/CLARIAH/mediasuite-info/blob/master/docs/_images/search-date-ranges.jpg?raw=true" />

### <a name="facets"></a> Filter using facets

* Faceted search: Facets include aggregations of terms from the metadata fields of the type "Keyword field", the terms included in each facet can be used for filtering the results of your query. To see the metadata fields that are of the type "Keyword", you can use the "Inspect" tool. At this moment (version 3) we support:

  *   Default facets per collection: we include facets for the most important fields in each collection (e.g., "Broadcaster" for the Sound and Vision collection)
  *   Creation of new facets: users are allowed to add their own facets to the faceted search functionality (see screencast: Search)


### <a name="result-list-ranking"></a> Understand how search results are ranked

* List of search results: The Search tool gives a list of search results after entering your query and filters. You can in this list:

  *   Order results per relevance (description to be included soon)

  *   Order results per date: it chooses the date field you used for filtering

  *   See a summary of the metadata: using the "document" icon on the left

  *   See information per item about:

      *   Media type: there are icons on the right side of each item indicating whether it is of the type image, audio, video, or text
      *   Access: if you can "view", "play", "read" a document, you will see an icon with an open eye on the right side of the item

### <a name="result-list-ordering"></a>Order your search results

### <a name="saved-queries"></a> Save your query

* Save the query paramenters: the Search tool allows users to store the queries for further use giving them a name. See [Saved queries](http://mediasuite.clariah.nl/documentation/workspace/user-projects/queries) section for more details.

### <a name="bookmarking"></a> Bookmark search results

* Bookmark items: the screencast below shows how the bookmarking functionality works. See also the [Bookmarks section](http://mediasuite.clariah.nl/documentation/workspace/user-projects/bookmarks) in the Documentation.

   <iframe width="560" height="315" src="https://www.youtube.com/embed/2fVNz6eh6Sg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



> **Please use our [Public forum](https://gitter.im/CLARIAH-media-studies/Lobby) if you miss content in this page or if you find any issues while using the Media Suite.**

*(Last update: March 7, 2019)*. *If you have any questions, please [contact us]( https://mediasuite.clariah.nl/contact ).*

