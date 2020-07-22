---
title: Alignment
---

By Roeland Ordelman

Alignment (officially ‘forced alignment’) is the process of  synchronizing a text transcription of speech to the audio recording that  contains the speech, by automatically adding time labels to every word  in the transcript using a specific form of speech recognition  technology. This technology is sometimes called ‘informed speech  recognition’: the words to be recognized are already known — the task is  to find the exact positions in the audio where the words occur. In  practice, the speech transcripts are usually not an exact representation  of the speech. For example, repetitions and filler words such as ‘uh’  and ‘ah’ are often omitted, and ungrammatical sentences reformulated.  The further the text transcripts depart from the verbatim speech, the  more difficult the alignment process for the speech recognition  technology will be.

Alignment is a very valuable tool to enable word level access to  spoken word recordings (jump to positions where a particular word is  mentioned) in cases where text transcripts are available such as in Oral  History research where scholars are used to making verbatim transcripts  of interviews in word processors that do not capture time information.   Examples of text transcripts in other domains that are deployed for  alignment are subtitles for the hearing impaired, auto-cues, production  scripts, and court reports.

An alignment tool typically takes as input (i) a plain text file with  the speech transcript, and (ii) the audio recording that contains the  speech, and provides as output a file where time labels are added to  each of the words in the transcript, for example in a list format with  on each line the start time and a word:

00:01:23:34 today

00:01:25:01  we

00:01:25:28 started

This output can be used in a transcription viewer to  jump  immediately to the corresponding position in the audio file by clicking  on a word while viewing a single interview. It can also be used to jump  to positions in multiple audio files by indexing the aligned text (of  multiple interviews) in a search engine.

See more at this blog post about the [CLARIN-Plus workshop on oral history](https://clariah.github.io/mediasuite-blog/blog/2017/05/12/CLARIN-PLUS-workshop-on-Oral-History).